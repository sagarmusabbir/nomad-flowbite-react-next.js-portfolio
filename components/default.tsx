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
import { SiUpwork } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";
import {
  PiArrowBendDoubleUpRightThin,
  PiArrowBendRightUpThin,
  PiArrowElbowRightThin,
  PiArrowUpRightBold,
  PiArrowUpRightLight,
  PiDownload,
  PiDownloadBold,
  PiDownloadFill,
  PiMoonBold,
  PiRowsBold,
  PiSunBold,
} from "react-icons/pi";
import { DefaultDrawer } from "./drawer";
import MenuBar, { MoonIcon, SunIcon } from "./icons";

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
        <Link href="#" className="hidden md:block">
          <Button size="sm" color="light">
            CV
            <PiDownloadBold className="ml-2 self-center w-4 h-4" />
          </Button>
        </Link>
        <Link href="#" className="hidden md:block">
          <Button color="dark" size="sm">
            Hire Me on
            <SiUpwork className="ml-2 self-center w-4 h-4" />
            <PiArrowUpRightBold className="self-center w-2 h-2" />
          </Button>
        </Link>

        <NavbarToggle barIcon={MenuBar} />
      </div>
      <NavbarCollapse className="h-screen sm:h-auto items-center">
        <NavLink />

        <div className="md:hidden my-4 ">
          <Link href="#">
            <Button size="sm" color="light" className="w-full mb-2">
              Download CV
              <PiDownloadBold className="ml-2 self-center w-4 h-4" />
            </Button>
          </Link>
          <Link href="#">
            <Button color="dark" size="sm" className="w-full">
              Hire Me on
              <SiUpwork className=" self-center w-4 h-4 ml-2" />
              <PiArrowUpRightBold className="self-center w-2 h-2" />
            </Button>
          </Link>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
