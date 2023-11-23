<script setup lang="ts">
import { reactive } from "vue";
import { storageLocal } from "@pureadmin/utils";
import { useMessage } from "../../components/message";

interface StorageConfigs {
  name: string;
  age: number;
}

const { message } = useMessage();
let storages = reactive({
  info: {
    name: "",
    age: 0
  }
});

function set() {
  storageLocal().setItem("info", {
    name: "xiaoming",
    age: 18
  });
}

function get() {
  if (!storageLocal().getItem<StorageConfigs>("info")?.name)
    message?.info("暂无对应键名的 storage，请先储存localStorage对象");
  storages.info.name = storageLocal().getItem<StorageConfigs>("info")?.name;
  storages.info.age = storageLocal().getItem<StorageConfigs>("info")?.age;
}

function remove() {
  storageLocal().removeItem("info");
}

function clear() {
  storageLocal().clear();
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2" vertical>
      <n-tag :bordered="false" type="info">
        打开控制台，根据对应操作观察 Local Storage 变化
      </n-tag>

      <n-button @click="set"> 储存localStorage对象 </n-button>
      <div className="flex items-center">
        <n-button @click="get"> 获取localStorage对象 </n-button>
        <span className="ml-2">
          {{ storages.info.name ? storages : "" }}
        </span>
      </div>
      <n-button @click="remove"> 删除localStorage对象 </n-button>
      <n-button @click="clear"> 删除此域的所有localStorage对象 </n-button>
    </n-space>
  </naive-theme>
</template>
