"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const usePathName = usePathname();

  return (
    <section>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="container mx-auto px-2 flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <p className="font-bold text-2xl">SunCart</p>
            </div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <Link
                href="/"
                className={
                  usePathName === "/"
                    ? "btn bg-black rounded-full text-white no-underline"
                    : "no-underline"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={
                  usePathName === "/products"
                    ? "btn bg-black rounded-full text-white no-underline"
                    : "no-underline"
                }
              >
                products
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className={
                  usePathName === "/profile"
                    ? "btn bg-black rounded-full text-white no-underline"
                    : "no-underline"
                }
              >
                Profile
              </Link>
            </li>
          </ul>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/auth/login"
              className={
                usePathName === "/auth/login"
                  ? "btn bg-black text-white no-underline rounded-full"
                  : "no-underline"
              }
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className={"btn bg-black rounded-full text-white no-underline"}
            >
              Sign Up
            </Link>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link
                  href="/"
                  className={
                    usePathName === "/"
                      ? "btn bg-black rounded-full text-white no-underline"
                      : "no-underline"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={
                    usePathName === "/products"
                      ? "btn bg-black rounded-full text-white no-underline"
                      : "no-underline"
                  }
                >
                  products
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className={
                    usePathName === "/profile"
                      ? "btn bg-black rounded-full text-white no-underline"
                      : "no-underline"
                  }
                >
                  Profile
                </Link>
              </li>
              <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
                <Link
                  href="/auth/login"
                  className={
                    "btn bg-black rounded-full no-underline text-white"
                  }
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className={
                    "btn bg-black rounded-full text-white no-underline"
                  }
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
