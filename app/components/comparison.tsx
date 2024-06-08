import { Alert, Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import type { FC } from "react";
import { MdPerson, MdInfo } from "react-icons/md";

const ComparisonCardsFeatureSection: FC = function () {
  return (
    <section className="bg-slate-50 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-16 lg:px-6">
        <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
          <div>
            <Badge
              href="#"
              color="gray"
              icon={MdInfo}
              size="sm"
              className="mb-4 font-normal"
            >
              <span className="font-medium">New!</span> Tailwind Developer
              Portfolio Template is Out Now.
            </Badge>
            <Avatar
              img="/coding.png"
              rounded
              bordered
              size="xl"
              className="justify-start mb-4"
            >
              <div className="space-y-1 font-medium text-2xl dark:text-white">
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
              className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-emerald-600 bg-white p-4 shadow hover:bg-gray-50 dark:border-emerald-500 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  Hire Me On
                </span>
                <span className="text-xl font-semibold text-emerald-600 dark:text-emerald-500">
                  UpWork
                </span>
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
              className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-slate-700 bg-white p-4 shadow hover:bg-gray-50 dark:border-slate-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  browse through my
                </span>
                <span className="text-xl font-semibold text-slate-700 dark:text-slate-400">
                  GitHub
                </span>
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
              className="flex items-center justify-between rounded-lg border-l-4 border-amber-600 bg-white p-4 shadow hover:bg-gray-50 dark:border-amber-500 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div>
                <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                  check me out on
                </span>
                <span className="text-xl font-semibold text-amber-600 dark:text-amber-500">
                  stackoverflow
                </span>
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
