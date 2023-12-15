interface grayOpt {
  /** `RGB`颜色模型中的红色，默认`0.3` */
  red?: number;
  /** `RGB`颜色模型中的绿色，默认`0.59` */
  green?: number;
  /** `RGB`颜色模型中的蓝色，默认`0.11` */
  blue?: number;
  /** 使用`canvas`缩放图像比例，默认`1`不缩放保持原始比例，建议范围`0.2 < scale < 2` */
  scale?: number;
}
