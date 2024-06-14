import { Alert, Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import {
  MdPerson,
  MdInfo,
  MdArrowRight,
  MdArrowForward,
  MdNewLabel,
  MdNewReleases,
} from "react-icons/md";
import { SiGithub, SiStackoverflow, SiUpwork } from "react-icons/si";

const ComparisonCardsFeatureSection: FC = function () {
  return (
    <section className="bg-slate-50 dark:bg-black">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <Avatar
              img="/person.svg"
              rounded
              bordered
              size="xl"
              className="justify-start mb-4 "
              color="dark"
              theme={{
                root: {
                  color: {
                    dark: " bg-gray-100 ring-gray-800 rounded-full shadow-lg ",
                  },
                },
              }}
            >
              <div className="space-y-1 font-semibold text-2xl dark:text-white whitespace-nowrap">
                <h1>Nomad Developer</h1>
                <span className=" text-gray-500 text-xl dark:text-gray-400">
                  AWS Cloud Architect
                </span>
              </div>
            </Avatar>

            <p className=" text-gray-600 dark:text-gray-400 sm:text-xl">
              Free Next.js Tailwind Developer Portfolio Template Created by
              NomadGang. NomadGang is an Open Source platform by Third Bracket
              Solution.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-8 border-gray-400 bg-white p-4 shadow hover:bg-gray-50 dark:border-slate-500 dark:bg-gray-800 dark:hover:bg-slate-800 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  for work or collaboration on
                </span>

                <SiUpwork className="w-6 h-6  fill-emerald-600 dark:fill-emerald-500" />
              </div>
              <MdArrowForward className="h-6 w-6 text-gray-700 dark:text-gray-400 " />
            </a>
            <a
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-8 border-gray-400 bg-white p-4 shadow hover:bg-gray-50 dark:border-slate-500 dark:bg-gray-800 dark:hover:bg-slate-800 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  browse my projects on
                </span>
                <SiGithub className="w-6 h-6  fill-slate-700 dark:fill-slate-500" />
              </div>
              <MdArrowForward className="h-6 w-6 text-gray-700 dark:text-gray-400 " />
            </a>
            <a
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-8 border-gray-400 bg-white p-4 shadow hover:bg-gray-50 dark:border-slate-500 dark:bg-gray-800 dark:hover:bg-slate-800 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  check out my solutions on
                </span>

                <SiStackoverflow className="w-6 h-6  fill-amber-600 dark:fill-amber-500" />
              </div>
              <MdArrowForward className="h-6 w-6 text-gray-700 dark:text-gray-400 " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCardsFeatureSection;
