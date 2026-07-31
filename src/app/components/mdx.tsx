import Link from "next/link";
import type { MDXComponents } from "mdx/types";

/**
 * How MDX elements render inside a post. Kept in one place so prose styling
 * stays consistent without a plugin like @tailwindcss/typography.
 */
export const mdxComponents: MDXComponents = {
    h2: (props) => (
        <h2 className="mt-12 mb-4 text-xl font-semibold tracking-tight text-slate-200" {...props} />
    ),
    h3: (props) => (
        <h3 className="mt-8 mb-3 text-base font-semibold tracking-tight text-slate-200" {...props} />
    ),
    p: (props) => <p className="mb-4 leading-relaxed" {...props} />,
    ul: (props) => <ul className="mb-4 list-disc space-y-2 pl-5 marker:text-slate-600" {...props} />,
    ol: (props) => (
        <ol className="mb-4 list-decimal space-y-2 pl-5 marker:text-slate-600" {...props} />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    strong: (props) => <strong className="font-semibold text-slate-200" {...props} />,
    hr: (props) => <hr className="my-10 border-slate-800" {...props} />,
    blockquote: (props) => (
        <blockquote
            className="my-6 border-l-2 border-teal-300/60 pl-4 italic text-slate-400"
            {...props}
        />
    ),
    a: ({ href = "", children, ...props }) => {
        const isInternal = href.startsWith("/") || href.startsWith("#");
        const className =
            "font-medium text-slate-200 underline decoration-slate-600 underline-offset-4 transition hover:text-teal-300 hover:decoration-teal-300 focus-visible:text-teal-300";

        if (isInternal) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            );
        }

        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
            </a>
        );
    },
    // Inline code. Fenced blocks arrive as <pre><code>, styled by `pre` below,
    // so the padding here would double up — hence `[pre_&]` resets.
    code: (props) => (
        <code
            className="rounded bg-slate-800/70 px-1.5 py-0.5 font-mono text-[0.85em] text-teal-300 [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-slate-300"
            {...props}
        />
    ),
    // Shiki highlights at build time and puts its own background and classes
    // on the <pre>. Keep its token colours, but drop the background so code
    // blocks stay on the site's slate panel instead of the theme's.
    pre: ({ className, style, ...props }) => (
        <pre
            className={[
                "my-6 overflow-x-auto rounded-md bg-slate-800/50 p-4 text-sm leading-relaxed ring-1 ring-inset ring-slate-700/50",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            style={{ ...style, backgroundColor: undefined }}
            {...props}
        />
    ),
    // Screenshots. A markdown title — ![alt](src "caption") — becomes the
    // caption. Width defaults to a little narrower than the prose column so
    // detail survives; append `?size=wide` or `?size=full` to the image URL to
    // widen an individual image (the query is stripped before the fetch).
    img: ({ src, alt, title }) => {
        const raw = typeof src === "string" ? src : "";
        const [cleanSrc, query] = raw.split("?");
        const size = new URLSearchParams(query ?? "").get("size");
        const maxW =
            size === "full" ? "max-w-4xl" : size === "wide" ? "max-w-3xl" : "max-w-xl";
        return (
            <figure className={`mx-auto my-8 ${maxW}`}>
                {/* eslint-disable-next-line @next/next/no-img-element -- images.unoptimized is on for the static export, so next/image adds nothing but fixed-dimension requirements screenshots can't satisfy. */}
                <img
                    src={cleanSrc}
                    alt={alt ?? ""}
                    loading="lazy"
                    className="w-full rounded-md ring-1 ring-inset ring-slate-700/50"
                />
                {title && (
                    <figcaption className="mt-3 text-center text-xs text-slate-500">{title}</figcaption>
                )}
            </figure>
        );
    },
};
