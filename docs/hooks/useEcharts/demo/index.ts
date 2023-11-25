import { withInstall } from "@pureadmin/utils";

import eline from "./line.vue";
import ebar from "./bar.vue";
import epie from "./pie.vue";
import escatter from "./scatter.vue";
import ecandlestick from "./candlestick.vue";
import eradar from "./radar.vue";
import eboxplot from "./boxplot.vue";
import eheatmap from "./heatmap.vue";
import egraph from "./graph.vue";
import etree from "./tree.vue";
import esunburst from "./sunburst.vue";
import esankey from "./sankey.vue";
import efunnel from "./funnel.vue";
import egauge from "./gauge.vue";
import epictorialBar from "./pictorialBar.vue";
import ethemeRiver from "./themeRiver.vue";

const Eline = withInstall(eline);
const Ebar = withInstall(ebar);
const Epie = withInstall(epie);
const Escatter = withInstall(escatter);
const Ecandlestick = withInstall(ecandlestick);
const Eradar = withInstall(eradar);
const Eboxplot = withInstall(eboxplot);
const Eheatmap = withInstall(eheatmap);
const Egraph = withInstall(egraph);
const Etree = withInstall(etree);
const Esunburst = withInstall(esunburst);
const Esankey = withInstall(esankey);
const Efunnel = withInstall(efunnel);
const Egauge = withInstall(egauge);
const EpictorialBar = withInstall(epictorialBar);
const EthemeRiver = withInstall(ethemeRiver);

export {
  /** 折线图 */
  Eline,
  /** 柱状图 */
  Ebar,
  /** 饼图 */
  Epie,
  /** 散点图 */
  Escatter,
  /** K 线图 */
  Ecandlestick,
  /** 雷达图 */
  Eradar,
  /** 盒须图 */
  Eboxplot,
  /** 热力图 */
  Eheatmap,
  /** 关系图 */
  Egraph,
  /** 树图 */
  Etree,
  /** 旭日图 */
  Esunburst,
  /** 桑基图 */
  Esankey,
  /** 桑基图 */
  Efunnel,
  /** 仪表盘 */
  Egauge,
  /** 象形柱图 */
  EpictorialBar,
  /** 主题河流图 */
  EthemeRiver
};
