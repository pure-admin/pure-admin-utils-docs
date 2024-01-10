export interface GradientOptions {
  /** 基础色相（`0`-`360`度），默认为一个随机色相 */
  baseHue?: number;
  /** 从基础色相偏移的度数，用于创建第二种和谐色相，默认为`30`度 */
  hueOffset?: number;
  /** 饱和度百分比（`50`-`100%`），颜色的鲜艳程度，默认为`70%` */
  saturation?: number;
  /** 亮度百分比（`40`-`70%`），颜色的明亮程度，默认为`60%` */
  lightness?: number;
  /** 渐变角度（`0`-`360`度），决定渐变的方向，默认为`135`度 */
  angle?: number;
  /** 是否随机生成色相，默认为`false` */
  randomizeHue?: boolean;
  /** 是否随机生成饱和度，默认为`false` */
  randomizeSaturation?: boolean;
  /** 是否随机生成亮度，默认为`false` */
  randomizeLightness?: boolean;
  /** 是否随机生成渐变角度，默认为`false` */
  randomizeAngle?: boolean;
}
