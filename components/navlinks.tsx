import { links } from "@/site";
import { ListGroup, NavbarLink, theme } from "flowbite-react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink: FC = function () {
  return (
    <>
      {links.map((link) => (
        <NavbarLink
          as={Link}
          key={link.id}
          href={link.to}
          className="flex items-center justify-between text-gray-800 dark:text-slate-200 "
        >
          {link.name}
          <link.icon className="ml-2 self-center" />
        </NavbarLink>
      ))}
    </>
  );
};
export default NavLink;
