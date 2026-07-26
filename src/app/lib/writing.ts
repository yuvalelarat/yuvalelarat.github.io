import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Posts live outside src/ so that adding one never means touching code.
const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

const WORDS_PER_MINUTE = 200;

export type PostMeta = {
    slug: string;
    title: string;
    /** ISO date, `YYYY-MM-DD`. */
    date: string;
    summary: string;
    tags: string[];
    banner?: string;
    bannerAlt?: string;
    readingMinutes: number;
};

export type Post = PostMeta & {
    /** Raw MDX body, frontmatter already stripped. */
    body: string;
};

/**
 * YAML turns an unquoted `2026-06-14` into a Date, but a quoted one stays a
 * string. Normalise both to `YYYY-MM-DD` so sorting and formatting only ever
 * deal with one shape.
 */
function toIsoDate(value: unknown, slug: string): string {
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
        return value.slice(0, 10);
    }
    throw new Error(`Post "${slug}" needs a \`date\` in YYYY-MM-DD form.`);
}

function readingMinutes(body: string): number {
    const words = body.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function parse(slug: string): Post {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);

    if (typeof data.title !== "string" || !data.title) {
        throw new Error(`Post "${slug}" needs a \`title\`.`);
    }
    if (typeof data.summary !== "string" || !data.summary) {
        throw new Error(`Post "${slug}" needs a \`summary\`.`);
    }
    if (data.banner && !data.bannerAlt) {
        throw new Error(`Post "${slug}" sets a \`banner\` but no \`bannerAlt\`.`);
    }

    return {
        slug,
        title: data.title,
        date: toIsoDate(data.date, slug),
        summary: data.summary,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        banner: typeof data.banner === "string" ? data.banner : undefined,
        bannerAlt: typeof data.bannerAlt === "string" ? data.bannerAlt : undefined,
        readingMinutes: readingMinutes(content),
        body: content,
    };
}

/** Every post, newest first. Build-time only — this touches the filesystem. */
export function getAllPosts(): Post[] {
    if (!fs.existsSync(CONTENT_DIR)) return [];

    return fs
        .readdirSync(CONTENT_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => parse(file.replace(/\.mdx$/, "")))
        .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
    return getAllPosts().find((post) => post.slug === slug);
}

/** `JUN 14, 2026`. Pinned to UTC so the build machine's zone can't shift it. */
export function formatDate(isoDate: string): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    })
        .format(new Date(`${isoDate}T00:00:00Z`))
        .toUpperCase();
}
