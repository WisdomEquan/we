import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/we/",

  lang: "zh-CN",
  title: "阳光下の少年",
  description: "阳光下の少年",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
