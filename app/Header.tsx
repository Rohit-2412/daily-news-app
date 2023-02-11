import { Bars3Icon } from "@heroicons/react/24/outline";
import DarkMode from "./DarkMode";
import Link from "next/link";
import NavLinks from "./NavLinks";
import React from "react";
import SearchBox from "./SearchBox";

function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 items-center px-10 py-5">
                <Bars3Icon className="w-6 h-6 cursor-pointer" />

                <Link href={"/"} prefetch={false}>
                    <h1 className="font-serif text-4xl text-center">
                        The{" "}
                        <span className="underline decoration-6 decoration-orange-400">
                            DAILY
                        </span>{" "}
                        News
                    </h1>
                </Link>

                <div className="flex items-center justify-end space-x-2">
                    {/* dark mode button */}
                    <DarkMode />
                    <button className="hidden md:inline-flex bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* nav links */}
            <NavLinks />

            {/* search bar */}
            <SearchBox />
        </header>
    );
}

export default Header;
