import { withInstall } from "@pureadmin/utils";

import edemo1 from "./demo1.vue";
import edemo2 from "./demo2.vue";
import edemo3 from "./demo3.vue";
import edemo4 from "./demo4.vue";
import edemo5 from "./demo5.vue";
import edemo6 from "./demo6.vue";

const Edemo1 = withInstall(edemo1);
const Edemo2 = withInstall(edemo2);
const Edemo3 = withInstall(edemo3);
const Edemo4 = withInstall(edemo4);
const Edemo5 = withInstall(edemo5);
const Edemo6 = withInstall(edemo6);

export { Edemo1, Edemo2, Edemo3, Edemo4, Edemo5, Edemo6 };
