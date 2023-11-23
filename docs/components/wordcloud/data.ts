import { ref } from "vue";
import { subBetween } from "@pureadmin/utils";
import type { WorldCloudDataItem } from "../../.vitepress/plugins/wordcloud/index.d.ts"; // 路径要写完整，确保打包时引用正确

const modules: any = import.meta.glob("../../{hooks,utils}/**/*.md", {
  eager: true
});

export function useData() {
  let utilsList = [];
  let hooksList = [];
  let dataList = ref<WorldCloudDataItem[]>([]);

  Object.keys(modules).forEach(v => {
    if (v.includes("/utils/")) utilsList.push(v);
    if (v.includes("/hooks/")) hooksList.push(v);
  });

  Object.keys(modules).map(key => {
    if (!modules[key].default?.name) return;
    dataList.value.push({
      name: subBetween(modules[key].default?.name, "/", "/"),
      value: 1
    });
  });
  dataList.value.push(
    { name: "Hooks", value: hooksList.length },
    { name: "Utils", value: utilsList.length }
  );

  return {
    data: dataList,
    hooksLen: hooksList.length,
    utilsLen: utilsList.length
  };
}
