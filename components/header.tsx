"use client";
import { links } from "@/site";
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
  MdOutlineHorizontalSplit,
} from "react-icons/md";
import { GiHoodedFigure, GiSprint } from "react-icons/gi";
import NavLink from "./navlinks";
import AnnouncementBanner from "./announcement";

import { SiUpwork } from "react-icons/si";
import {
  PiDownload,
  PiDownloadFill,
  PiMoonBold,
  PiRows,
  PiRowsBold,
  PiRowsLight,
  PiSunBold,
} from "react-icons/pi";
import { Contact } from "./contact";

const DefaultHeaderNavigation: FC = function () {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 border border-b border-gray-200 dark:border-gray-800">
      <AnnouncementBanner />

      <Navbar fluid className=" max-w-screen-lg mx-auto  ">
        <Navbar.Brand as={Link} href="/">
          <GiSprint className="mr-3 w-6 h-6 sm:w-9 sm:h-9 fill-gray-800 dark:fill-slate-200" />
          <span className="hidden sm:block self-center whitespace-nowrap text-xl font-semibold dark:text-slate-200 text-gray-800">
            Nomad Portfolio
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 md:order-2">
          <DarkThemeToggle
            iconDark={PiMoonBold}
            iconLight={PiSunBold}
            theme={{
              root: {
                icon: "w-5 h-5 shrink-0 fill-gray-800 dark:fill-slate-200",
              },
            }}
          />

          <Link href="#">
            <Button size="sm" color="light">
              CV
              <PiDownloadFill className="ml-2 h-4 w-4 shrink-0 self-center" />
            </Button>
          </Link>
          <Navbar.Toggle
            theme={{
              icon: "w-6 h-6 sm:w-9 sm:h-9 shrink-0 fill-gray-800 dark:fill-slate-200",
            }}
            barIcon={PiRows}
          />
        </div>
        <Navbar.Collapse className="md:order-1 ">
          {/* <NavLink /> */}
          {links.map((link) => (
            <li key={link.id}>
              <NavbarLink
                as={Link}
                href={link.to}
                className="flex items-center justify-between text-gray-800 dark:text-slate-200 gap-x-2"
              >
                {link.name}
                <link.icon />
              </NavbarLink>
            </li>
          ))}
          <NavbarLink
            className="block md:hidden w-full my-4 text-gray-800 dark:text-slate-200"
            color="light"
            as={Button}
            size="sm"
          >
            Hire on
            <SiUpwork className="ml-auto self-end fill-emerald-400 " />
            <MdArrowOutward className="self-center ml-1  " />
          </NavbarLink>
          <NavbarLink
            className="block w-full md:hidden mb-4 text-slate-200 dark:text-gray-200"
            color="dark"
            as={Button}
            size="sm"
          >
            Download Resume
            <PiDownload className="ml-auto self-end  " />
          </NavbarLink>
        </Navbar.Collapse>
      </Navbar>
      <Contact />
    </header>
  );
};

export default DefaultHeaderNavigation;
