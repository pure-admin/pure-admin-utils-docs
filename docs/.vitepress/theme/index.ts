import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import naive from "naive-ui";

import { useEcharts } from "../plugins/echarts";
import {
  DividerBase,
  DividerOptions,
  DividerParam,
  DividerTarget,
  DividerType,
  DividerUse,
  // Wordcloud,
  NaiveTheme,
  // Description,
  // DescriptionPopover,
  ThemeChange
} from "../../components";

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      await import("echarts-gl");
      // await import("../plugins/wordcloud");
    }
    app.use(naive);
    app.component("divider-base", DividerBase);
    app.component("divider-options", DividerOptions);
    app.component("divider-param", DividerParam);
    app.component("divider-target", DividerTarget);
    app.component("divider-type", DividerType);
    app.component("divider-use", DividerUse);
    // app.component("wordcloud", Wordcloud);
    app.component("naive-theme", NaiveTheme);
    // app.component("description", Description);
    // app.component("description-popover", DescriptionPopover);
    app.component("theme-change", ThemeChange);
    app.use(useEcharts);
  }
} satisfies Theme;
