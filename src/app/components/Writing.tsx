import Link from "next/link";
import SectionListItem from "./SectionListItem";
import PostItem from "./PostItem";
import { getAllPosts } from "../lib/writing";

const HOMEPAGE_POST_COUNT = 3;

export default function Writing() {
    const posts = getAllPosts();

    if (posts.length === 0) return null;

    return (
        <SectionListItem title="Writing" id="writing">
            {posts.slice(0, HOMEPAGE_POST_COUNT).map((post) => (
                <PostItem key={post.slug} post={post} showThumbnail />
            ))}
            {/* Always shown, not just past the cutoff — otherwise /writing is
                unreachable from the homepage until the fourth post lands. */}
            <li>
                <Link
                    href="/writing"
                    className="group inline-flex items-center text-sm font-semibold text-slate-200 transition hover:text-teal-300 focus-visible:text-teal-300"
                >
                    View all writing
                    <span
                        className="ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </Link>
            </li>
        </SectionListItem>
    );
}
