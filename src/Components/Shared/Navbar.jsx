"use client";

import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { useState } from "react";
import { Link } from "@heroui/react";
import { redirect, usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const usePathName = usePathname();

  const { data } = authClient.useSession();
  const user = data?.user;

  const handelLogout = async () => {
    await authClient.signOut();
    toast.success("LogOut Successfull");
    redirect("/");
  };

  return (
    <section>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="container mx-auto px-4 flex h-16 items-center justify-between">
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
                Products
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

          {user ? (
            <Dropdown>
              <Dropdown.Trigger className="rounded-full">
                <Avatar size="lg">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback delayMs={600}>
                    {user.name.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <div className="px-3 pt-3 pb-1">
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <Avatar.Image
                        alt={user.naem}
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback delayMs={600}>
                        {user.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                    <div className="flex flex-col gap-0">
                      <p className="text-sm leading-5 font-medium">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-muted">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item id="profile" textValue="Profile">
                    <Link href="/profile" className="no-underline w-full">
                      <Label>Profile</Label>
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    id="logout"
                    textValue="Logout"
                    variant="danger"
                    onClick={handelLogout}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <Label>Log Out</Label>
                      <ArrowRightFromSquare className="size-3.5 text-danger" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
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
          )}
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
                  Products
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
