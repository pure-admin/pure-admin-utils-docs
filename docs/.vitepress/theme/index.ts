import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Description from "../../components/description.vue";
import Wordcloud from "../../components/wordcloud/index.vue";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";
import "@unocss/reset/tailwind.css";

import { useEcharts } from "../plugins/echarts";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("wordcloud", Wordcloud);
    app.component("description", Description);
    app.use(useEcharts);
  },
};

export default theme;
