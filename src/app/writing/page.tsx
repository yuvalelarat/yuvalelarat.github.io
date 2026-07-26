import type { Metadata } from "next";
import Link from "next/link";
import PostItem from "../components/PostItem";
import { SITE_URL } from "../lib/site";
import { getAllPosts } from "../lib/writing";

export const metadata: Metadata = {
    metadataBase: SITE_URL,
    title: "Writing · Yuval Elarat",
    description: "Notes on distributed systems, GenAI tooling, and things that broke in production.",
};

export default function WritingIndex() {
    const posts = getAllPosts();

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

            <h1 className="mt-12 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Writing
            </h1>
            <p className="mt-4 max-w-lg leading-normal">
                Notes on distributed systems, GenAI tooling, and things that broke in production.
            </p>

            {posts.length === 0 ? (
                <p className="mt-16 text-sm text-slate-500">Nothing published yet. Check back soon.</p>
            ) : (
                <ol className="group/list mt-16">
                    {posts.map((post) => (
                        <PostItem key={post.slug} post={post} showThumbnail />
                    ))}
                </ol>
            )}
        </div>
    );
}
