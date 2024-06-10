import { LinkItem } from "./lib/types";

import {
  MdHome,
  MdPerson,
  MdKeyboard,
  MdComputer,
  MdContacts,
} from "react-icons/md";

export const links: LinkItem[] = [
  { id: 0, name: "Home", to: "/", icon: MdHome },
  { id: 1, name: "Projects", to: "/projects", icon: MdComputer },
  { id: 2, name: "About", to: "/about", icon: MdPerson },
  { id: 3, name: "Blog", to: "/blog", icon: MdKeyboard },
  { id: 4, name: "Contacts", to: "/contacts", icon: MdContacts },

  // { id: 3, name: "Search", to: "/search" },
];

// export const siteData = {
//   title: "Musabbirs Terminal",
//   author: "Musabbir Sagar",
//   headerTitle: "Musabbirs Terminal",
//   profileUrl: "/logo.svg",
//   headerDescription: "Full Stack Next.js Developer",
//   footerText: "© All rights reserved",
//   language: "en-us",
//   locale: "en-US",
//   websiteUrl: "musabbirsagar.com",
// };

// export const footerNavigation: FooterNavItem[] = [
//   {
//     name: "GitHub",
//     href: "https://github.com/sagarmusabbir",
//     icon: GithubIcon,
//   },
//   // {
//   //   name: "Twitter",
//   //   href: "/",
//   //   icon: Twitter,
//   // },
//   // {
//   //   name: "Slack",
//   //   href: "https://join.slack.com/t/analytics-roundtable/shared_invite/zt-1m5vonbd3-4~ZRqbz_sO4iWrn691DhwA",
//   //   icon: Slack,
//   // },
//   {
//     name: "Linkedin",
//     href: "https://www.linkedin.com/in/musabbirsagar/",
//     icon: LinkedInIcon,
//   },
// ];

export const postsPerPage = 5;

export const email = "sagarmusabbir@gmail.com";