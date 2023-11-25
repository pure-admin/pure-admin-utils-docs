import { nextTick, onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { version } from "../../../package.json";

export const addReleaseTag = () => {
  if (document.querySelector("samp")) return;
  const tagLineParagragh = document.querySelector(
    "div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline"
  );
  const docsReleaseTagSpan = document.createElement("samp");
  docsReleaseTagSpan.classList.add("github-release-tag");
  docsReleaseTagSpan.innerText = `v${version}`;
  tagLineParagragh?.appendChild(docsReleaseTagSpan);
};

export const useAddNumInOutlineLabel = (num = 0) => {
  if (document.querySelector("samp") || num === 0) return;
  /** 保持全局唯一 */
  const className = "pureadminutils-outline-label-num";
  let outlines = [];

  onBeforeMount(() => {
    nextTick(() => {
      // @media (min-width: 1279px) {}    >1279px
      const VPDocAsideOutline = document.querySelector(
        "div.VPDocAsideOutline.has-outline > .content > div.outline-title"
      );

      // @media (min-width: 960px) and (max-width: 1279px) {}    960px<x<1279px
      const VPDocOutlineDropdown = document.querySelector(
        "div.VPDocOutlineDropdown > button"
      );

      // @media (max-width: 960px) {}    <960px
      const VPLocalNavOutlineDropdown = document.querySelector(
        "div.VPLocalNavOutlineDropdown > button"
      );

      outlines = [
        VPDocAsideOutline,
        VPDocOutlineDropdown,
        VPLocalNavOutlineDropdown
      ];
    });
  });

  onMounted(() => {
    nextTick(() => {
      for (let i = 0; i < outlines.length; i++) {
        const numSpan = document.createElement("samp");
        numSpan.classList.add(className);
        numSpan.innerText = `共${num}个方法`;
        outlines[i]?.appendChild(numSpan);
      }
    });
  });

  onBeforeUnmount(() => {
    for (let i = 0; i < outlines.length; i++) {
      document.querySelector(`.${className}`)?.remove();
    }
  });
};
