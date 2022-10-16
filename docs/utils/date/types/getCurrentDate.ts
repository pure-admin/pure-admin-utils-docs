export interface currentDateType {
  /** 当前年月日 */
  ymd: string;
  /** 当前时分秒 */
  hms: string;
  /** 当前周几 */
  week: string;
}
export type dateType = 1 | 2 | 3;
export interface currentDateOpt {
  /** 当前返回的年月日和时分秒的格式 1：汉字模式（默认） 2：- 连接符 3：/ 连接符  */
  type?: dateType;
  /** 自定义 `week` 返回格式前缀，默认 `星期` */
  prefix?: string;
}
