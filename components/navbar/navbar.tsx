"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaAlignLeft } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ModeToggle } from "../ui/mode-toggle";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Schools",
    href: "/",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return;
  }

  return (
    <nav className="flex px-4 py-6 border-b items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="flex lg:hidden" variant="ghost" size={"icon"}>
            <FaAlignLeft />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px]" side="left">
          <SheetHeader>
            <SheetTitle>MNHS E-Library</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-start mt-4">
            {routes.map((link, index) => (
              <Button variant="link" key={index}>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <div>
        <Button variant="ghost">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
            MNHS E-Library
          </h3>
        </Button>
      </div>
      <div className="hidden lg:flex">
        {routes.map((link, index) => (
          <Button variant="link" key={index}>
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Button>
          <Link href={"/login"}>Login</Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
