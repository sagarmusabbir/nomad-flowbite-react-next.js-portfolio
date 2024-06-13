"use client";
import { links } from "@/site";
import { ListGroup, NavbarLink, theme } from "flowbite-react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink: FC = function () {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <NavbarLink
            as={Link}
            href={link.to}
            className="flex items-center justify-between text-gray-800 dark:text-slate-200 gap-2"
          >
            {link.name}
            <link.icon />
          </NavbarLink>
        </li>
      ))}
    </>
  );
};
export default NavLink;
