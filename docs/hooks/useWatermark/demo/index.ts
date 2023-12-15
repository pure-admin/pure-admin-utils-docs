import { withInstall } from "@pureadmin/utils";

import wwhole from "./whole.vue";
import wpart from "./part.vue";
import wwrap from "./wrap.vue";
import wimage from "./image.vue";
import wforever from "./forever.vue";

const Wwhole = withInstall(wwhole);
const Wpart = withInstall(wpart);
const Wwrap = withInstall(wwrap);
const Wimage = withInstall(wimage);
const Wforever = withInstall(wforever);

export { Wwhole, Wpart, Wwrap, Wimage, Wforever };
