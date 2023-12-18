declare type documentElement = "head" | "body";
export interface OptionsScript {
  /** 要加载的资源链接地址 */
  src: string | string[];
  /** 标签插入到哪个元素里。默认`CSS`（`link`标签）插入到`head`，`JavaScript`（`script`标签）插入到`body` */
  element?: documentElement | HTMLElement;
}
export interface LoadResult {
  /** 加载的资源链接地址 */
  src?: string;
  /** 加载状态（加载成功、加载失败） */
  message?: string;
}
