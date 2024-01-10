interface ElementRef<T = any> {
  value: T;
}
interface UseResizeObserverOptions {
  /** 防抖延迟时间，默认`40`毫秒 */
  time?: number;
  /** 初始化时是否立刻触发回调，默认`true` */
  immediate?: boolean;
  /** `content-box`（默认）指的是元素的内容区域尺寸，不包括边框和内边距；`border-box`指的是元素的边框盒尺寸，包括内容、内边距和边框，但不包括外边距；`device-pixel-content-box`指的是设备像素级别观察尺寸变化 */
  box?: "content-box" | "border-box" | "device-pixel-content-box";
}
