import type { Ref } from "vue";

/** 水印样式属性 */
interface attr {
  /** 字体，默认 `normal 16px Arial, 'Courier New', 'Droid Sans', sans-serif`，`Arial`和`Courier New`正常情况下在`Windows`、`macOS`、`iOS`默认存在，`Droid Sans`正常情况下在`Linux`和`Android`默认存在，`sans-serif`作为候补是一个通用的字体族关键词，它会使用浏览器使用默认的无衬线字体。`font`的字体遵循从左往右原则 */
  font?: string;
  /** 字体颜色，默认 `rgba(128, 128, 128, 0.3)` */
  color?: string;
  /** 宽度，默认 `250` */
  width?: number;
  /** 高度，默认 `100` */
  height?: number;
  /** 水印整体的旋转，默认 `-10` */
  rotate?: number;
  /** 水印的 `z-index`，默认 `100000` */
  zIndex?: string;
  /** 字体渐变色，优先级高于 `color` */
  gradient?: Array<gradientType>;
  /** 创建阴影（四个参数，如下）
   *  第一个填 `shadowBlur`，`必填`，具体设置看：https://www.runoob.com/jsref/prop-canvas-shadowblur.html
   *  第二个填 `shadowColor`，`可选，默认#000000`，具体设置看：https://www.runoob.com/jsref/prop-canvas-shadowcolor.html
   *  第三个填 `shadowOffsetX`，`可选，默认0`，具体设置看：https://www.runoob.com/jsref/prop-canvas-shadowoffsetx.html
   *  第四个填 `shadowOffsetY`，`可选，默认0`，具体设置看：https://www.runoob.com/jsref/prop-canvas-shadowoffsety.html
   */
  shadowConfig?: Array<any>;
  /** 透明度，范围 `0.0`（完全透明） 到 `1.0` */
  globalAlpha?: number;
  /** 多行水印文本的行高，默认 `20` */
  lineHeight?: number;
  /** 多行水印文本的换行标识符，默认遇到`、`就换行 */
  wrap?: string;
  /** 文本对齐方向。当多行文本时默认`center`，反之默认`left`。具体设置看：https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textAlign */
  textAlign?: CanvasTextAlign;
  /** 图片路径 */
  image?: string;
  /** 图片宽度 */
  imageWidth?: number;
  /** 图片高度 */
  imageHeight?: number;
  /** 是否让水印无法删除，默认`false`，开启后在控制台操作对应的 `Elements` 也无法删除 */
  forever?: boolean;
}
interface gradientType {
  /** 范围 `0.0` 到 `1.0` https://www.runoob.com/tags/canvas-addcolorstop.html */
  value: number;
  /** 对应 `value` 范围的文本颜色 */
  color: string;
}
/** 创建水印 */
declare const useWatermark: (appendEl?: Ref<HTMLElement | null>) => {
  /** 销毁水印 */
  clear: () => void;
  /** 根据自定义配置项添加水印 */
  setWatermark: (str: string, attr?: attr | undefined) => void;
};
