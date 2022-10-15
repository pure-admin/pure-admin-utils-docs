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
  DescriptionPopover,
} from "../../components";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(naive);
    app.component("wordcloud", Wordcloud);
    app.component("naive-theme", NaiveTheme);
    app.component("description", Description);
    app.component("description-popover", DescriptionPopover);
    app.use(useEcharts);
  },
};

export default theme;
