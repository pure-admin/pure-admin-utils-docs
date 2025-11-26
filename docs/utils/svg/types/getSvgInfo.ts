export interface SvgInfo {
  /** SVG的宽度，基于`viewBox`属性的第三个值 */
  width: number;
  /** SVG的高度，基于`viewBox`属性的第四个值 */
  height: number;
  /** `<svg>` 元素内部的所有 HTML 内容（即 `innerHTML`），包含所有子元素如 `<path>`, `<g>`, `<rect>` 等 */
  body: string;
};
