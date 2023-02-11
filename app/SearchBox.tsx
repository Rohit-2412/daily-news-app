"use client";

import { FormEvent, useState } from "react";

import { useRouter } from "next/navigation";

function SearchBox() {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input.length) return;

        router.push(`/search?term=${input}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex max-w-6xl mx-auto items-center justify-between px-5 border rounded-lg shadow-md"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search Keywords..."
                className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent dark:text-orange-300"
            />

            <button
                disabled={!input.length}
                type="submit"
                className="text-orange-400 disabled:text-gray-400"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBox;
