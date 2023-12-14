import type { Ref } from "vue";

/** 水印样式属性 */
interface attr {
  /** 字体，默认 `15px Reggae One` */
  font?: string;
  /** 填充绘制图形的颜色，默认 `rgba(0, 0, 0, 0.15)` */
  fillStyle?: string;
  /** 宽度，默认 `250` */
  width?: number;
  /** 高度，默认 `100` */
  height?: number;
  /** 水印整体的旋转，默认 `-10` */
  rotate?: number;
  /** 水印的 `z-index`，默认 `100000` */
  zIndex?: string;
  /** 开始绘制文本的 `x` 坐标位置（相对于画布） https://www.runoob.com/jsref/met-canvas-filltext.html */
  fillTextWidth?: number;
  /** 开始绘制文本的 `y` 坐标位置（相对于画布） https://www.runoob.com/jsref/met-canvas-filltext.html */
  fillTextHeight?: number;
  /** 绘制文本渐变色，优先级高于 `fillStyle` */
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
