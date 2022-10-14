import { version } from "../../../package.json"

export function addReleaseTag() {
  const tagLineParagragh = document.querySelector('div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline')
  const docsReleaseTagSpan = document.createElement('samp')
  docsReleaseTagSpan.classList.add('github-release-tag')
  docsReleaseTagSpan.innerText = `v${version}`
  tagLineParagragh?.appendChild(docsReleaseTagSpan)
}
