<script setup lang="ts">
import { hasCNChars } from "@pureadmin/utils";
</script>

<template>
  <naive-theme>
    <n-space className="mt-2">
      <n-descriptions label-placement="left" size="small" :column="1" bordered>
        <n-descriptions-item
          label="hasCNChars(' i 要学习 study ') ? '包含中文' : '不包含中文'"
        >
          <p>
            {{ hasCNChars(" i 要学习 study ") ? "包含中文" : "不包含中文" }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('study✍') ? '包含✍' : '不包含✍'"
        >
          <p>{{ hasCNChars("study✍") ? "包含✍" : "不包含✍" }}</p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('study✍', { unicode: '\u270d' }) ? '包含✍' : '不包含✍'"
        >
          <p>
            {{
              hasCNChars("study✍", { unicode: "\u270d" })
                ? "包含✍"
                : "不包含✍"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('。！') ? '包含。！' : '不包含。！'"
        >
          <p>
            {{
              hasCNChars("。！")
                ? "包含。！（常用中文标点符号也会被识别为中文）"
                : "不包含。！"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('。！', { replaceUnicode: '\u270c' }) ? '包含。！' : '不包含。！'"
        >
          <p>
            {{
              hasCNChars("。！", { replaceUnicode: "\u270c" })
                ? "包含。！"
                : "不包含。！"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars(' i 要学习 study ', { all: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars(" i 要学习 study ", { all: true })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>
        <n-descriptions-item
          label="hasCNChars('我要学习', { all: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("我要学习", { all: true }) ? "全是中文" : "不全是中文"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('（我要学习）？！。', { all: true, replaceUnicode: '\u270c' }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("（我要学习）？！。", {
                all: true,
                replaceUnicode: "\u270c"
              })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>
        <n-descriptions-item
          label="hasCNChars('（我要学习）？！。', { all: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("（我要学习）？！。", { all: true })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars('我要学习✍', { all: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("我要学习✍", { all: true })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>
        <n-descriptions-item
          label="hasCNChars('我要学习✍', { all: true, unicode: `\u270d` }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("我要学习✍", { all: true, unicode: `\u270d` })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>

        <n-descriptions-item
          label="hasCNChars(' 我 要 学 习 ', { all: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars(" 我 要 学 习 ", { all: true })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>
        <n-descriptions-item
          label="hasCNChars('我 要 学 习', { all: true, pure: true }) ? '全是中文' : '不全是中文'"
        >
          <p>
            {{
              hasCNChars("我 要 学 习", { all: true, pure: true })
                ? "全是中文"
                : "不全是中文"
            }}
          </p>
        </n-descriptions-item>
      </n-descriptions>
    </n-space>
  </naive-theme>
</template>
