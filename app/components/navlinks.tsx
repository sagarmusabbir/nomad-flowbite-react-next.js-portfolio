"use client";
import { links } from "@/site";
import { ListGroup, NavbarLink, theme } from "flowbite-react";
import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink: FC = function () {
  return (
    // <ListGroup
    //   // className=" flex flex-col lg:my-0 bg-transparent md:flex-row lg:space-x-2 lg:text-base lg:font-medium "
    //   theme={{
    //     root: {
    //       base: "list-none border border-gray-800 bg-white  text-sm font-normal text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-white flex flex-col lg:my-0 md:flex-row lg:space-x-2  ",
    //     },
    //   }}
    //   className="border-0"
    // >
    //   {links.map((link) => (
    //     <NavbarLink as={Link} key={link.id} href={link.to}>
    //       <ListGroup.Item
    //         icon={link.icon}
    //         theme={{
    //           link: {
    //             base: "flex w-full items-center hover:!border-0 border-gray-200 px-2 py-0 hover:!bg-transparent dark:hover:!bg-transparent hover:!text-gray-800 dark:hover:!text-gray-100 focus:!ring-0 focus:!text-800 dark:focus:!text-gray-100 dark:border-gray-600",
    //           },
    //         }}
    //       >
    //         {link.name}
    //       </ListGroup.Item>
    //     </NavbarLink>
    //   ))}
    // </ListGroup>

    <>
      {links.map((link) => (
        <li key={link.id}>
          <NavbarLink
            as={Link}
            href={link.to}
            className="flex items-center justify-between text-gray-800 dark:text-slate-200"
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
