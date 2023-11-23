import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import naive from "naive-ui";

import { useEcharts } from "../plugins/echarts";
import {
  Wordcloud,
  NaiveTheme,
  Description,
  DescriptionPopover
} from "../../components";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      await import("../plugins/wordcloud");
    }
    app.use(naive);
    app.component("wordcloud", Wordcloud);
    app.component("naive-theme", NaiveTheme);
    app.component("description", Description);
    app.component("description-popover", DescriptionPopover);
    app.use(useEcharts);
  }
} satisfies Theme;
