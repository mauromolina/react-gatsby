const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/mauro/Escritorio/React/react-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/mauro/Escritorio/React/react-gatsby/src/pages/404.js"))),
  "component---src-pages-about-us-js": hot(preferDefault(require("/home/mauro/Escritorio/React/react-gatsby/src/pages/aboutUs.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/mauro/Escritorio/React/react-gatsby/src/pages/index.js")))
}

