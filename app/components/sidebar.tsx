"use client";
import { links } from "@/site";
import { ListGroup, NavbarLink, theme } from "flowbite-react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink: FC = function () {
  const pathname = usePathname();
  return (
    <ListGroup
      // className=" flex flex-col lg:my-0 bg-transparent md:flex-row lg:space-x-2 lg:text-base lg:font-medium "
      theme={{
        root: {
          base: "list-none rounded-lg border border-gray-200 bg-white text-left text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white",
        },
      }}
      className="flex flex-col lg:my-0 md:flex-row lg:space-x-2 "
    >
      {links.map((link) => (
        <NavbarLink
          as={Link}
          key={link.id}
          href={link.to}

          //   className={`link ${pathname === "/" ? "active" : { theme }}`}
          //   theme={{
          //     active: {
          //       on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
          //     },
          //   }}
        >
          <ListGroup.Item
            icon={link.icon}
            theme={{
              link: {
                base: "flex md:flex-row w-full items-center border-b lg:!border-b-0 lg:border-r border-gray-200 px-4 py-2 dark:border-gray-600 !rounded-none !bg-transparent",
              },
            }}
          >
            {link.name}
          </ListGroup.Item>
        </NavbarLink>
      ))}
    </ListGroup>
  );
};
export default NavLink;
