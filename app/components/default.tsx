"use client";
import { Button, ButtonGroup, DarkThemeToggle, Navbar } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdDownload, MdFace6, MdLocalPhone, MdKeyboard, MdComputer,MdPerson, MdHome } from "react-icons/md";
import { GiHoodedFigure } from "react-icons/gi";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-200 dark:bg-gray-800 ">
      <Navbar className=" max-w-screen-lg mx-auto bg-transparent">
        <Navbar.Brand href="https://flowbite.com">
          {/* <img
            src="/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <GiHoodedFigure className="mr-3 w-6 h-6 sm:w-9 sm:h-9 fill-gray-800 dark:fill-slate-200" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-slate-200 text-gray-800">
            Nomad Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <DarkThemeToggle
            theme={{
              root: {
                icon: " focus:ring-gray-700 border-0 w-5 h-5",
              },
            }}
          />

          <Button
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
          </Button>

          <Navbar.Toggle
            theme={{
              icon: "h-5 w-5 shrink-0 fill-gray-700 dark:fill-slate-300",
            }}
          />
        </div>
        <Navbar.Collapse
          theme={{
            list: "my-4 flex flex-col lg:my-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1 md:rounded-lg"
        >
          <Navbar.Link
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
<MdHome className="w-4 h-4 lg:hidden fill-white ml-2"/>
          </Navbar.Link>
          <Navbar.Link href="#" className="flex lg:flex-none items-center justify-between">About
<MdPerson className="w-4 h-4 lg:hidden fill-gray-700 ml-2"/></Navbar.Link>
          <Navbar.Link href="#" className="flex lg:flex-none items-center justify-between">Projects
<MdComputer className="w-4 h-4 lg:hidden fill-gray-700 ml-2"/></Navbar.Link>
          <Navbar.Link href="#" className="flex lg:flex-none items-center justify-between">Blog
<MdKeyboard className="w-4 h-4 lg:hidden fill-gray-700 ml-2"/></Navbar.Link>
          <Navbar.Link href="#" className="flex lg:flex-none items-center justify-between">Contact
<MdLocalPhone className="w-4 h-4 lg:hidden fill-gray-700 ml-2"/></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
