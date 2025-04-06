"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LuLeaf } from "react-icons/lu";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-sidebar/95 backdrop-blur-sm py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform">
            <LuLeaf className="text-primary w-5 h-5 absolute transform transition-all group-hover:rotate-12" />
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-primary">Ever</span>
            <span className="text-accent-foreground">Tree</span>
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-4 md:gap-8">
            <Link
              href="https://github.com/m-azzam-azis/evertree-vault"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Code
            </Link>
            <p> | </p>
            <Link
              href="/dev"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Developer
            </Link>
            <p> | </p>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <IoSunnyOutline size={20} />
              ) : (
                <IoMoonOutline size={20} />
              )}
            </button>

            <Link
              href={"/demo"}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
            >
              Try Our App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
