import {
  Button,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

export function DefaultHeader() {
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 dark:bg-opacity-90  bg-slate-200 dark:bg-gray-700"
    >
      <NavbarBrand href="#">
        <img src="logo.svg" className="mr-3 h-7 sm:h-10 " alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700 dark:text-white">
          NOMAD
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        <DarkThemeToggle />
        {/* <Button>Get started</Button> */}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Button.Group>
          <Button
            as={Link}
            href="#"
            size="sm"
            color="light"
            className="dark:border-gray-500"
          >
            <HiHome
              className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 dark:fill-slate-300 dark:hover:fill-slate-400 "
              aria-hidden="true"
            />
            Profile
          </Button>
          <Button
            as={Link}
            href="#"
            size="sm"
            color="light"
            className="dark:border-gray-500"
          >
            <HiHome
              className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 dark:fill-slate-300 dark:hover:fill-slate-400 "
              aria-hidden="true"
            />
            Profile
          </Button>
          <Button
            as={Link}
            href="#"
            size="sm"
            color="light"
            className="dark:border-gray-500"
          >
            <HiHome
              className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 dark:fill-slate-300 dark:hover:fill-slate-400 "
              aria-hidden="true"
            />
            Profile
          </Button>
        </Button.Group>
      </NavbarCollapse>
    </Navbar>
  );
}
