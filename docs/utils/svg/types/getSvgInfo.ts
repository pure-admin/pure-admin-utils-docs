export interface SvgInfo {
  /** SVG的宽度，基于`viewBox`属性的第三个值 */
  width: number;
  /** SVG的高度，基于`viewBox`属性的第四个值 */
  height: number;
  /** SVG中所有`<path>`元素的`outerHTML`连接而成的字符串 */
  body: string;
};
