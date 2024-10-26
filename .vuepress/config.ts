import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "IQR Lab Docs",
  bundler: viteBundler(),
  head: [
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
  ],
  base: "/docs/",

  theme: defaultTheme({
    lastUpdated: true,
    repo: "https://github.com/iqr-lab/docs",
    editLinks: false,
    sidebar: [
      {
        text: "Introduction",
        link: "/",
        collapsable: false,
        sidebarDepth: 2,
        children: [""],
      },
      {
        text: "Computer Vision",
        prefix: "/computer-vision/",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "intel-nuc",
          "intel-realsense",
          "kalibr",
          "pointcloud-stitching",
        ],
      },
      {
        text: "Vention",
        prefix: "/vention/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["intro"],
      },
      {
        text: "Kinova",
        prefix: "/kinova/",
        collapsable: false,
        sidebarDepth: 2,
        children: ["intro"],
      },
      {
        text: "Website",
        collapsable: false,
        sidebarDepth: 2,
        prefix: "/website/",
        children: ["intro"],
      },
    ],
  }),
  plugins: [searchPlugin()],
});
