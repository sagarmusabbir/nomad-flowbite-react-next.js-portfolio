import { Badge, Card } from "flowbite-react";
import type { FC } from "react";

const CardWithImageBlogSection: FC = function () {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-lg px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Latest Articles
          </h2>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
                alt="office laptop working"
              />
            </a>
            <span>
              <Badge color="purple" className="!inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Our first office</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center font-medium text-slate-800 hover:underline dark:text-slate-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
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
          </Card>
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-hq.png"
                alt="Google HQ"
              />
            </a>
            <span>
              <Badge color="purple" className="!inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">We partnered up with Google</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center font-medium text-slate-800 hover:underline dark:text-slate-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
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
          </Card>
          <Card className="[&>div]:p-5">
            <a href="#">
              <img
                className="rounded-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops-2.png"
                alt="office laptops"
              />
            </a>
            <span>
              <Badge color="purple" className="!inline">
                Article
              </Badge>
            </span>
            <h2 className="-my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Our first project with React</a>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation and some hard work, we moved to our new
              office.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center font-medium text-slate-800 hover:underline dark:text-slate-400"
              >
                Read more
                <svg
                  className="ml-2 h-4 w-4"
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CardWithImageBlogSection;
