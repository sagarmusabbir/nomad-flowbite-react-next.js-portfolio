"use client";

import { Button, Drawer, Label, TextInput } from "flowbite-react";
import { useState } from "react";

import {
  MdCall,
  MdEmail,
  MdFacebook,
  MdMessage,
  MdWhatsapp,
} from "react-icons/md";
import {
  PiArrowElbowDownLeftLight,
  PiArrowLineUpRightLight,
  PiDeviceMobileSpeakerBold,
  PiDownloadBold,
  PiFilmScriptBold,
  PiPhone,
  PiQuestionFill,
} from "react-icons/pi";
import { SiUpwork } from "react-icons/si";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <a
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-4 cursor-pointer "
      >
        <PiQuestionFill className="w-12 h-12 fill-gray-800 dark:fill-slate-200 stroke-gray-900 " />
      </a>

      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Contact" titleIcon={PiFilmScriptBold} />
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
                  icon={PiPhone}
                  rightIcon={PiArrowElbowDownLeftLight}
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
                  <PiDeviceMobileSpeakerBold className="self-center" />
                  <span className="self-center ml-2">Request Callback</span>
                </Button>
              </div>
            </form>
          </div>

          <Button className="w-full mb-4" size="sm" color="light">
            Hire on <SiUpwork className="self-center w-5 h-5 ml-2" />
            <PiArrowLineUpRightLight className="h-4 w-4 self-center ml-2  " />
          </Button>

          <Button className="w-full mb-4" size="sm" color="light">
            Download CV <PiDownloadBold className="self-center w-5 h-5 ml-2" />
          </Button>

          <div className="mt-2 flex flex-wrap gap-4  sm:mt-0 ">
            <a href="#">
              <MdWhatsapp className="w-10 h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdCall className="w-10 h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdEmail className="w-10 h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdFacebook className="w-10 h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
            <a href="#">
              <MdMessage className="w-10 h-10 fill-gray-800 dark:fill-slate-200" />
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
function bodyScrolling(arg0: boolean) {
  throw new Error("Function not implemented.");
}
