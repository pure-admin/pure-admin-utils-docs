import { type Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "uno.css";
import "./style/code.css";
import "./style/overrides.css";

import naive from "naive-ui";

// import Toast from "vue-toastification";
// import "vue-toastification/dist/index.css";

import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";

import { useECharts } from "../plugins/echarts";
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
  VisualLoad,
  PreviewImage,
  ThemeChange,
  Layout
} from "../../components";

export default {
  ...DefaultTheme,
  Layout,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      await import("echarts-gl");
      // await import("../plugins/wordcloud");
    }
    app.use(naive);
    // app.use(Toast, { timeout: 1200, maxToasts: 6, icon: false });
    app.use(vue3PhotoPreview);
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
    app.component("visual-load", VisualLoad);
    app.component("preview-image", PreviewImage);
    app.component("theme-change", ThemeChange);
    app.use(useECharts);
  }
} satisfies Theme;
