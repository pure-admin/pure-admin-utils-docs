import { withInstall } from "@pureadmin/utils";

import wwhole from "./whole.vue";
import wpart from "./part.vue";
import wforever from "./forever.vue";

const Wwhole = withInstall(wwhole);
const Wpart = withInstall(wpart);
const Wforever = withInstall(wforever);

export { Wwhole, Wpart, Wforever };
