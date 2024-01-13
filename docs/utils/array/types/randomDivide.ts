export type OrderType = "asc" | "desc" | "random";

export interface DivideOptions {
  /** 每一份的最小阀值。默认`0` */
  minPerPart?: number;
  /** 每一份的最大阀值。默认最大阀值不会超过总数 */
  maxPerPart?: number;
  /** 返回数组的排序方式：递增(`'asc'`)、递减(`'desc'`)、随机(`'random'`)。默认为`'random'` */
  order?: OrderType;
}
