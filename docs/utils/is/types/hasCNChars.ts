export interface isParams {
  /** 自定义 `unicode`，不会覆盖默认的 `unicode` */
  unicode?: string;
  /** 自定义 `unicode`，会覆盖默认的 `unicode` */
  replaceUnicode?: string;
  /** 是否全部是中文，默认 `false` */
  all?: boolean;
}
