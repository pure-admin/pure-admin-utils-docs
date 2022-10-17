export type ColorType = "rgb" | "hex" | "hsl";
export interface ColorOptions {
  /** 颜色格式 `rgb` 、 `hex` 、 `hsl` ，默认 `rgb` */
  type?: ColorType;
  /** 生成颜色的数量。指定数量，则返回生成颜色数组，数量为 `0` 或不指定，返回生成颜色字符串 */
  num?: number;
}
