import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import { useEcharts } from "../plugins/echarts";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(useEcharts);
  },
};

export default theme;
