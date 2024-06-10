import { Badge, Banner } from "flowbite-react";
import type { FC } from "react";
import { HiX } from "react-icons/hi";

const AnnouncementBanner: FC = function () {
  return (
    <Banner>
      <div className="flex w-full items-center justify-between border border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto flex items-center gap-x-3">
          <Badge color="dark" className="w-fit hidden md:inline">
            New
          </Badge>
          <p className="text-sm font-medium text-gray-900 dark:text-white md:my-0">
            Tailwind Developer Portfolio Template is Out Now.
            <a
              href="#"
              className="ml-2 inline-flex items-center text-sm font-medium text-slate-800 dark:text-slate-300 hover:underline "
            >
              Check it out!
            </a>
          </p>
        </div>
        {/* <Banner.CollapseButton
          color="gray"
          className="text-gray-400 border-0 bg-transparent px-0 [&>span]:px-2 enabled:hover:bg-gray-200 enabled:hover:text-gray-900 dark:enabled:hover:bg-gray-600 dark:enabled:hover:text-white"
        >
          <HiX className="h-5 w-5" />
        </Banner.CollapseButton> */}
      </div>
    </Banner>
  );
};

export default AnnouncementBanner;
