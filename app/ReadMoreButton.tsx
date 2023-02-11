"use client";

import Link from "next/link";

function ReadMoreButton({ article }: { article: Article }) {
    return (
        <Link
            href={article.url}
            target="_blank"
            className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500"
        >
            <p className="text-center mt-2">Read More</p>
        </Link>
    );
}

export default ReadMoreButton;
