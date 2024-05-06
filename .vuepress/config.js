const { description } = require("../package");

module.exports = {
  title: "IQR Lab Docs",
  head: [
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
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
    [
      "link",
      {
        rel: "'stylesheet",
        href: "/styles/website.css",
      },
    ],
  ],
  base: "/docs/",

  watch: {
    $page(newPage, oldPage) {
      if (newPage.key !== oldPage.key) {
        requestAnimationFrame(() => {
          if (this.$route.hash) {
            const element = document.getElementById(this.$route.hash.slice(1));

            if (element && element.scrollIntoView) {
              element.scrollIntoView();
            }
          }
        });
      }
    },
  },

  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-multimd-table"), {
        rowspan: true,
      });
    },
  },

  theme: "vuepress-theme-succinct",
  globalUIComponents: ["ThemeManager"],

  themeConfig: {
    lastUpdated: true,
    repo: "https://github.com/iqr-lab/docs",
    editLinks: false,
    // logo: '/homepage.png',
    // nav: [{
    //     text: 'Dortania Guides',
    //     items: [{
    //         text: 'Home Site',
    //         link: 'https://dortania.github.io/'
    //     },
    //     ]
    // },
    // ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        sidebarDepth: 2,
        children: [""],
      },
      {
        title: "Computer Vision",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/computer-vision/intel-nuc",
          "/computer-vision/intel-realsense",
          "/computer-vision/kalibr",
          "/computer-vision/pointcloud-stitching",
        ],
      },
      {
        title: "Vention",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/vention/intro"],
      },
      {
        title: "Kinova",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/kinova/intro"],
      },
      {
        title: "Website",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/website/intro"],
      },
    ],
  },
  plugins: [
    "@vuepress/back-to-top",
    "vuepress-plugin-smooth-scroll",
    "vuepress-plugin-fulltext-search",
    [
      "@vuepress/medium-zoom",
      {
        selector: ".theme-succinct-content :not(a) > img",
        options: {
          background: "var(--bodyBgColor)",
        },
      },
    ],
  ],
};
