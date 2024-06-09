import { Alert, Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdPerson, MdInfo } from "react-icons/md";
import { SiGithub, SiStackoverflow, SiUpwork } from "react-icons/si";

const ComparisonCardsFeatureSection: FC = function () {
  return (
    <section className="bg-slate-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <Badge
              href="#"
              color="light"
              icon={MdInfo}
              size="xs"
              theme={{
                root: {
                  color: {
                    gray: "bg-slate-100 text-gray-600 group-hover:bg-slate-200 dark:bg-gray-700 dark:text-gray-500 dark:group-hover:bg-gray-600",
                  },
                },
              }}
              className="mb-4 font-light"
            >
              <span className="font-base">New!</span> Tailwind Developer
              Portfolio Template is Out Now.
            </Badge>
            <Avatar
              img="/person.svg"
              rounded
              bordered
              size="xl"
              className="justify-start mb-4"
              color="gray"
              theme={{
                root: {
                  color: {
                    gray: " bg-slate-200 ring-slate-300 rounded-full shadow-lg ",
                  },
                },
              }}
            >
              <div className="space-y-1 font-medium text-xl dark:text-white">
                <div>Nomad Developer</div>
                <div className=" text-md text-gray-500 dark:text-gray-400">
                  AWS Cloud Architect
                </div>
              </div>
            </Avatar>

            <p className=" text-gray-500 dark:text-gray-400 sm:text-xl">
              Free Next.js Tailwind Developer Portfolio Template Created by
              NomadGang. NomadGang is an Open Source platform by Third Bracket
              Solution.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-2 border-emerald-600 bg-white p-4 shadow hover:bg-gray-50 dark:border-emerald-500 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  for work or collaboration on
                </span>

                <SiUpwork className="w-6 h-6  fill-gray-600 dark:fill-gray-500" />
              </div>
              <svg
                className="h-6 w-6 text-emerald-500 dark:text-emerald-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="mb-6 flex items-center justify-between rounded-lg border-l-2 border-slate-700 bg-white p-4 shadow hover:bg-gray-50 dark:border-slate-400 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  browse my projects on
                </span>
                <SiGithub className="w-6 h-6  fill-gray-600 dark:fill-gray-500" />
              </div>
              <svg
                className="h-6 w-6 text-slate-700 dark:text-slate-400 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-between rounded-lg border-l-2 border-amber-600 bg-white p-4 shadow hover:bg-gray-50 dark:border-amber-500 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  check out my solutions on
                </span>

                <SiStackoverflow className="w-6 h-6  fill-gray-600 dark:fill-gray-500" />
              </div>
              <svg
                className="h-6 w-6 text-amber-600 dark:text-amber-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCardsFeatureSection;
