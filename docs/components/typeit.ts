import { h, defineComponent } from "vue";
import TypeIt from "typeit";

// 打字机效果组件
export default defineComponent({
  name: "TypeIt",
  // 配置项参考 https://www.typeitjs.com/docs/vanilla/usage#options
  props: {
    /** 打字速度，以每一步之间的毫秒数为单位 */
    speed: {
      type: Number,
      default: 200
    },
    values: {
      type: Array,
      defalut: []
    },
    className: {
      type: String,
      default: "type-it"
    }
  },
  render() {
    return h(
      "span",
      {
        class: this.className
      },
      {
        default: () => []
      }
    );
  },
  mounted() {
    new TypeIt(`.${this.className}`, {
      strings: this.values,
      speed: this.speed,
      cursor: false
    }).go();
  }
});
