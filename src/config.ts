import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://samuelbwr.github.io", // replace this with your deployed domain
  author: "Samuel Berwanger",
  profile: "https://samuelbwr.github.io/",
  desc: "A place where Sam shares his thoughts",
  title: "Sam's Thinking Pad",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/samuelbwr/samuelbwr.github.io",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  }
];
