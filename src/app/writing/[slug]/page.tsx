import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import rehypeUnwrapImages from "rehype-unwrap-images";
import SkillsItem from "../../components/SkillItem";
import { mdxComponents } from "../../components/mdx";
import { SITE_URL } from "../../lib/site";
import { formatDate, getAllPosts, getPost } from "../../lib/writing";

type Params = { slug: string };

// Required by `output: "export"` — every post route is enumerated at build time.
export function generateStaticParams(): Params[] {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) return {};

    // Social scrapers (LinkedIn, Slack, X, iMessage) can't render SVG preview
    // images and fall back to scraping the first inline <img>. Point the OG tag
    // at a rasterised PNG twin of the banner instead — the page hero stays SVG.
    const ogImage = post.banner?.replace(/\.svg$/, ".png");

    return {
        metadataBase: SITE_URL,
        title: `${post.title} · Yuval Elarat`,
        description: post.summary,
        openGraph: {
            type: "article",
            title: post.title,
            description: post.summary,
            publishedTime: post.date,
            images: ogImage
                ? [{ url: ogImage, width: 1600, height: 800, alt: post.bannerAlt ?? post.title }]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.summary,
            images: ogImage ? [ogImage] : undefined,
        },
    };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) notFound();

    return (
        <div className="mx-auto min-h-screen max-w-3xl px-6 py-12 font-sans md:px-12 md:py-20">
            <Link
                href="/"
                className="group inline-flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
            >
                <span
                    className="mr-1 inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                >
                    ←
                </span>
                Yuval Elarat
            </Link>

            <article className="mt-12">
                {post.banner && (
                    /* eslint-disable-next-line @next/next/no-img-element -- images.unoptimized is on for the static export; next/image would only add a wrapper. */
                    <img
                        src={post.banner}
                        alt={post.bannerAlt ?? ""}
                        className="mb-10 aspect-[2/1] w-full rounded-md object-cover ring-1 ring-inset ring-slate-700/50"
                    />
                )}

                <header>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span aria-hidden="true"> · </span>
                        {post.readingMinutes} min read
                    </p>
                    <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl">
                        {post.title}
                    </h1>
                    {post.tags.length > 0 && <SkillsItem skills={post.tags} />}
                </header>

                <hr className="my-10 border-slate-800" />

                <div className="text-base">
                    <MDXRemote
                        source={post.body}
                        components={mdxComponents}
                        options={{
                            mdxOptions: {
                                // Runs at build time, so highlighting costs
                                // nothing on the client.
                                rehypePlugins: [
                                    // Lift standalone images out of the <p> the
                                    // parser wraps them in — our img renders a
                                    // <figure>, which is illegal inside <p>.
                                    rehypeUnwrapImages,
                                    [rehypeShiki, { theme: "poimandres" }],
                                ],
                            },
                        }}
                    />
                </div>
            </article>

            <Link
                href="/writing"
                className="group mt-16 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-teal-300 focus-visible:text-teal-300"
            >
                <span
                    className="mr-1 inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                >
                    ←
                </span>
                All writing
            </Link>
        </div>
    );
}
