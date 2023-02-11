"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

function DarkMode() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme == "system" ? systemTheme : theme;
    return (
        <div>
            {currentTheme === "dark" ? (
                <SunIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <MoonIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setTheme("dark")}
                />
            )}
        </div>
    );
}

export default DarkMode;
