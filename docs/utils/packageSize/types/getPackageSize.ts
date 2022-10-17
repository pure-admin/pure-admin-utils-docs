export type packageOpt = {
  /** 文件夹名（默认：`dist`） */
  folder?: string;
  /** 是否返回已经转化好单位的包总大小（默认：`true`） */
  format?: boolean;
  /** 回调函数，返回包总大小（单位：字节） */
  callback: CallableFunction;
};
