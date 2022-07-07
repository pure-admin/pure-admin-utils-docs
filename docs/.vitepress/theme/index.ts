import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import { useEcharts } from "../plugins/echarts";
import NaiveTheme from "../../components/theme.vue";
import Description from "../../components/description.vue";
import Wordcloud from "../../components/wordcloud/index.vue";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("wordcloud", Wordcloud);
    app.component("naive-theme", NaiveTheme);
    app.component("description", Description);
    app.use(useEcharts);
  },
};

export default theme;
