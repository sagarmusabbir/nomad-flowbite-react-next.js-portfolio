"use client";
import { Button, DarkThemeToggle, Drawer, Navbar } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdDownload } from "react-icons/md";
import { GiHoodedFigure, GiSprint } from "react-icons/gi";
import NavLink from "./sidebar";
import AnnouncementBanner from "./announcement";
import { Contact } from "./comtact";
// import { Contact } from "./comtact";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border border-b border-gray-200 dark:border-gray-800">
      <AnnouncementBanner />

      <Contact />

      <Navbar className="  max-w-screen-lg mx-auto  ">
        <Navbar.Brand href="https://flowbite.com">
          <GiSprint className="mr-2 w-6 h-6 sm:w-9 sm:h-9 fill-gray-800 dark:fill-slate-200" />
          <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-slate-200 text-gray-800">
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
            list: "my-8 flex flex-col md:my-0 md:flex-row md:space-x-0 lg:text-base lg:font-medium ",
          }}
          className="md:order-1 "
        >
          <NavLink />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
