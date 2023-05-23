export function formatImageSrc(src: string, url: string) {
  return new URL(src, url).href
}