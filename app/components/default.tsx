"use client";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdDownload } from "react-icons/md";
import { GiHoodedFigure, GiSprint } from "react-icons/gi";
import NavLink from "./sidebar";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800">
      <Navbar className="  max-w-screen-lg mx-auto  ">
        <Navbar.Brand href="https://flowbite.com">
          <GiSprint className="mr-2 w-6 h-6 sm:w-9 sm:h-9 fill-gray-800 dark:fill-slate-200" />
          <span className="hidden lg:block self-center whitespace-nowrap text-xl font-semibold dark:text-slate-200 text-gray-800">
            Nomad Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:order-2">
          <DarkThemeToggle
            theme={{
              root: {
                icon: " focus:ring-gray-700 border-0 w-5 h-5",
              },
            }}
          />

          {/* <Button
            color="gray"
            outline
            size="sm"
            theme={{
              color: {
                gray: ":ring-slate-700 border border-slate-200 bg-white text-gray-900 focus:text-slate-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-slate-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
              },
            }}
          >
            <Link href="#" className="inline-flex items-center">
              <span>CV</span>
              <MdDownload className="ml-2" />
            </Link>
          </Button> */}

          <Button size="sm" color="light">
            CV
            <MdDownload className="ml-2 h-5 w-5 shrink-0" />
          </Button>

          <Navbar.Toggle
            theme={{
              icon: "h-5 w-5 shrink-0 fill-gray-700 dark:fill-slate-300",
            }}
          />
        </div>
        <Navbar.Collapse
          theme={{
            list: "my-8 flex flex-col md:my-0 md:flex-row md:space-x-0 lg:text-base lg:font-medium",
          }}
          className="md:order-1 "
        >
          <NavLink />

          {/* <Navbar.Link
            active
            theme={{
              active: {
                on: "bg-slate-600 text-white dark:text-white  md:bg-transparent md:text-slate-700",
              },
            }}
            className="flex lg:flex-none items-center justify-between"
            href="#"
          >
            <span>Home</span>
            <MdHome className="w-4 h-4 lg:hidden fill-white ml-2" />
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="flex lg:flex-none items-center justify-between"
          >
            About
            <MdPerson className="w-4 h-4 lg:hidden fill-gray-700 ml-2" />
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="flex lg:flex-none items-center justify-between"
          >
            Projects
            <MdComputer className="w-4 h-4 lg:hidden fill-gray-700 ml-2" />
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="flex lg:flex-none items-center justify-between"
          >
            Blog
            <MdKeyboard className="w-4 h-4 lg:hidden fill-gray-700 ml-2" />
          </Navbar.Link>
          <Navbar.Link
            href="#"
            className="flex lg:flex-none items-center justify-between"
          >
            Contact
            <MdLocalPhone className="w-4 h-4 lg:hidden fill-gray-700 ml-2" />
          </Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
