"use client";
import {
  Button,
  DarkThemeToggle,
  Drawer,
  Navbar,
  NavbarLink,
} from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import {
  MdArrowOutward,
  MdDownload,
  MdDownloadDone,
  MdOutlineHorizontalSplit,
  MdOutlineMenu,
} from "react-icons/md";
import { GiHoodedFigure, GiSprint } from "react-icons/gi";
import NavLink from "./navlinks";
import AnnouncementBanner from "./announcement";
import { Contact } from "./comtact";
import { SiUpwork } from "react-icons/si";
import { PiDownload } from "react-icons/pi";
// import { Contact } from "./comtact";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border border-b border-gray-200 dark:border-gray-800">
      <AnnouncementBanner />

      <Contact />

      <Navbar className="  max-w-screen-lg mx-auto  ">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <GiSprint className="mr-3 w-6 h-6 sm:w-9 sm:h-9 fill-gray-800 dark:fill-slate-200" />
          <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-slate-200 text-gray-800">
            Nomad Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:order-2">
          <DarkThemeToggle
            theme={{
              root: {
                icon: " w-6 h-6 shrink-0 fill-gray-800 dark:fill-slate-200",
              },
            }}
          />

          <Link href="#">
            <Button size="sm" color="light">
              CV
              <MdDownload className="ml-2 h-4 w-4 shrink-0 self-center" />
            </Button>
          </Link>
          <Navbar.Toggle
            theme={{
              icon: "w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200",
            }}
            barIcon={MdOutlineHorizontalSplit}
          />
        </div>
        <Navbar.Collapse className="md:order-1 ">
          <NavLink />
          <NavbarLink
            className="w-full my-4 text-gray-800 dark:text-slate-200"
            color="light"
            as={Button}
            size="sm"
          >
            Hire on
            <SiUpwork className="ml-auto self-end fill-emerald-400 " />
            <MdArrowOutward className="self-center ml-1  " />
          </NavbarLink>
          <NavbarLink
            className="w-full mb-4 text-slate-200 dark:text-gray-800"
            color="dark"
            as={Button}
            size="sm"
          >
            Download Resume
            <PiDownload className="ml-auto self-end  " />
          </NavbarLink>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default DefaultHeaderNavigation;
