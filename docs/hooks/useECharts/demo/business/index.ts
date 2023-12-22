import { withInstall } from "@pureadmin/utils";

import edynamic from "./dynamic.vue";
import erequest from "./request.vue";
import eloading from "./loading.vue";
import ecustomTheme from "./customTheme.vue";

const Edynamic = withInstall(edynamic);
const Erequest = withInstall(erequest);
const Eloading = withInstall(eloading);
const EcustomTheme = withInstall(ecustomTheme);

export {
  /** 加载动画 */
  Eloading,
  /** 动态图表 */
  Edynamic,
  /** 接口请求 */
  Erequest,
  /** 自定义主题 */
  EcustomTheme
};
