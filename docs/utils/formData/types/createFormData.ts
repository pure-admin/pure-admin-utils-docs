export interface HandleFileType {
  /** `File`或`Blob`文件 */
  file?: File | Blob;
  /** 传过来的文件字段键名 */
  key?: string;
  /** `new FormData()` 可以使用它的所有方法 */
  formData?: FormData;
}
export interface FormDataOptions {
  /** 用于指定文件字段的键名，默认`file` */
  fileKey?: string;
  /** 自定义处理文件的函数 */
  handleFile?: (params: HandleFileType) => void;
  /** 定义需要过滤掉的值，它们不会出现在请求参数中 */
  filter?: any[];
}
