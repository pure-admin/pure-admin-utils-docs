<script setup lang="ts">
import { reactive } from "vue";
import { storageSession } from "@pureadmin/utils";
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
  storageSession().setItem("info", {
    name: "xiaoming",
    age: 18
  });
}

function get() {
  if (!storageSession().getItem<StorageConfigs>("info")?.name)
    message?.info("暂无对应键名的 storage，请先储存sessionStorage对象");
  storages.info.name = storageSession().getItem<StorageConfigs>("info")?.name;
  storages.info.age = storageSession().getItem<StorageConfigs>("info")?.age;
}

function remove() {
  storageSession().removeItem("info");
}

function clear() {
  storageSession().clear();
}
</script>

<template>
  <naive-theme>
    <n-space className="mt-2" vertical>
      <n-tag :bordered="false" type="info">
        打开控制台，根据对应操作观察 Session Storage 变化
      </n-tag>

      <n-button ghost round type="success" @click="set">
        储存sessionStorage对象
      </n-button>
      <div className="flex items-center">
        <n-button ghost round type="info" @click="get">
          获取sessionStorage对象
        </n-button>
        <span className="ml-2">
          {{ storages.info.name ? storages : "" }}
        </span>
      </div>
      <n-button ghost round type="warning" @click="remove">
        删除sessionStorage对象
      </n-button>
      <n-button ghost round type="error" @click="clear">
        删除此域的所有sessionStorage对象
      </n-button>
    </n-space>
  </naive-theme>
</template>
