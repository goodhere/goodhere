// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-organizations-js": () => import("./../src/templates/organizations.js" /* webpackChunkName: "component---src-templates-organizations-js" */),
  "component---src-pages-capital-js": () => import("./../src/pages/capital.js" /* webpackChunkName: "component---src-pages-capital-js" */),
  "component---src-templates-organization-js": () => import("./../src/templates/organization.js" /* webpackChunkName: "component---src-templates-organization-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-authback-js": () => import("./../src/pages/authback.js" /* webpackChunkName: "component---src-pages-authback-js" */),
  "component---src-pages-contribute-js": () => import("./../src/pages/contribute.js" /* webpackChunkName: "component---src-pages-contribute-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-login-js": () => import("./../src/pages/login.js" /* webpackChunkName: "component---src-pages-login-js" */)
}

