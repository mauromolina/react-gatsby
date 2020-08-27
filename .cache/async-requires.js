// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-rooms-js": () => import("./../../../src/components/rooms.js" /* webpackChunkName: "component---src-components-rooms-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-us-js": () => import("./../../../src/pages/aboutUs.js" /* webpackChunkName: "component---src-pages-about-us-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

