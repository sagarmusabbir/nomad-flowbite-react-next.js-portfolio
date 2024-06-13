import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { GiHoodedFigure } from "react-icons/gi";
import NavLink from "./navlinks";
import { links } from "@/site";
import Link from "next/link";
import { SiGithub, SiUpwork } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import {
  PiArrowBendDoubleUpRightThin,
  PiArrowBendRightUpThin,
  PiArrowElbowRightThin,
  PiArrowUpRightBold,
  PiArrowUpRightLight,
  PiDownload,
  PiDownloadFill,
} from "react-icons/pi";

export function HeaderNavigation() {
  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <img
          src="https://game-icons.net/icons/000000/transparent/1x1/lorc/sprint.svg"
          className="mr-3 h-6 sm:h-9 dark:invert"
          alt="Flowbite React Logo"
        />

        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Nomad Portfolio
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <DarkThemeToggle />
        <Link href="#">
          <Button size="sm" color="light">
            CV
            <PiDownloadFill className="ml-auto md:ml-2 self-center w-4 h-4" />
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse className="min-h-screen">
        <NavLink />

        <NavbarLink
          href="#"
          as={Link}
          className="group relative flex items-stretch justify-center border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700 mb-2   p-0.5 md:p-0 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none pl-10 md:dark:bg-transparent md:hover-bg-transparent md:text-gray-800 md:dark:text-slate-200"
        >
          Github
          <SiGithub className="self-center ml-2  " />
          <PiArrowUpRightBold className="self-center w-2 h-2" />
        </NavbarLink>
        <NavbarLink
          href="#"
          as={Link}
          className="group relative flex items-stretch justify-center border border-transparent bg-gray-800 text-white dark focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700  mb-2 rounded-md p-0.5 md:p-0 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none pl-10 md:bg-transparent md:hover-bg-transparent md:text-gray-800 md:dark:text-slate-200"
        >
          Upwork
          <SiUpwork className="self-center ml-2   " />
          <PiArrowUpRightBold className="self-center  w-2 h-2" />
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
