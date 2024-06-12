"use client";

import { Button, Drawer, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import {
  MdAdd,
  MdAddCall,
  MdArrowOutward,
  MdCall,
  MdCallEnd,
  MdCallMade,
  MdCallToAction,
  MdContactPhone,
  MdContactSupport,
  MdEmail,
  MdFacebook,
  MdInsertLink,
  MdInstallMobile,
  MdKeyboardReturn,
  MdMessage,
  MdPhone,
  MdPhoneCallback,
  MdPhoneIphone,
  MdPlusOne,
  MdWhatsapp,
} from "react-icons/md";
import { SiFiverr, SiUpwork } from "react-icons/si";

export function Contact() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button
        className="fixed bottom-8 right-4 "
        onClick={() => setIsOpen(true)}
        color="light"
        size="xs"
        outline
      >
        <MdContactSupport className="w-8 h-8" />
      </Button>

      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Contact" />
        <Drawer.Items>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            You can reach me directly by calling/emailing/messeging my social
            media handles. Email me at&nbsp;
            <a
              href="#"
              className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
            >
              musabbir@thirdbracket.co.uk
            </a>
            &nbsp;for projects and collaboration. You can also request for a
            callback.
          </p>
          <div className="grid grid-cols-1 gap-4 ">
            <form action="#">
              <div className="mb-2">
                <TextInput
                  id="phone-input"
                  name="phone-input"
                  placeholder="580 2158 2158"
                  type="text"
                  icon={MdPhone}
                  rightIcon={MdKeyboardReturn}
                  className="mt-3 w-full"
                />
              </div>

              <div className="mb-4">
                <Button
                  type="submit"
                  className=" w-full "
                  size="sm"
                  color="dark"
                >
                  <MdPhoneIphone className="self-center" />
                  <span className="self-center ml-2">Request Callback</span>
                </Button>
              </div>
            </form>
          </div>

          {/* <a
              href="#"
              className=" flex items-center justify-center gap-2 border rounded-md px-1 py-1.5 text-gray-800 dark:text-slate-200 border-gray-800 dark:border-slate-200 hover:bg-gray-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-gray-800 fill-gray-800 hover:fill-slate-200dark:hover:fill-gray-800 dark:fill-slate-200 text text-sm"
            >
              Hire on
              <SiFiverr className="w-4 h-4  " />
              <MdArrowOutward className="h-4 w-4  " />
            </a> */}
          <Button className="w-full mb-4" size="sm" color="gray" outline>
            Hire on <SiFiverr className="self-center w-5 h-5 ml-2" />
            <MdArrowOutward className="h-4 w-4 self-center ml-2  " />
          </Button>
          <Button className="w-full mb-4" size="sm" color="gray" outline>
            Hire on <SiUpwork className="self-center w-5 h-5 ml-2" />
            <MdArrowOutward className="h-4 w-4 self-center ml-2  " />
          </Button>

          <div className="mt-2 flex flex-wrap gap-4  sm:mt-0 ">
            <a href="#">
              <MdWhatsapp className="w-6 h-6 sm:w-10 sm:h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdCall className="w-6 h-6 sm:w-10 sm:h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdEmail className="w-6 h-6 sm:w-10 sm:h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdFacebook className="w-6 h-6 sm:w-10 sm:h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdMessage className="w-6 h-6 sm:w-10 sm:h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
