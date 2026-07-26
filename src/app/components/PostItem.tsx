import Link from "next/link";
import SkillsItem from "./SkillItem";
import { formatDate, type PostMeta } from "../lib/writing";

/**
 * One row in a post list. Mirrors TimelineItem's grid so Writing sits flush
 * with Experience and Education — the date takes the column where `period` is.
 */
export default function PostItem({
    post,
    showThumbnail = false,
}: {
    post: PostMeta;
    showThumbnail?: boolean;
}) {
    const { slug, title, date, summary, tags, banner, bannerAlt, readingMinutes } = post;

    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {showThumbnail && banner ? (
                    <div className="z-10 mb-2 sm:col-span-2 sm:mt-1">
                        {/* eslint-disable-next-line @next/next/no-img-element -- images.unoptimized is on for the static export; next/image would only add a wrapper. */}
                        <img
                            src={banner}
                            alt={bannerAlt ?? ""}
                            loading="lazy"
                            className="aspect-[2/1] w-full rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30"
                        />
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {formatDate(date)}
                        </p>
                    </div>
                ) : (
                    <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={formatDate(date)}
                    >
                        {formatDate(date)}
                    </header>
                )}

                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <Link
                            href={`/writing/${slug}`}
                            className="inline-flex items-baseline text-base font-medium leading-tight text-slate-200 transition hover:text-teal-300 focus-visible:text-teal-300 group/link"
                        >
                            {/* Stretches the hit area over the whole row. */}
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                                {title}
                                <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1 motion-reduce:transition-none">
                                    →
                                </span>
                            </span>
                        </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">{summary}</p>
                    <p className="mt-2 text-xs text-slate-500">{readingMinutes} min read</p>
                    {tags.length > 0 && <SkillsItem skills={tags} />}
                </div>
            </div>
        </li>
    );
}
