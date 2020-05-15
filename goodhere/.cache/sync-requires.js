const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-organizations-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/templates/organizations.js"))),
  "component---src-pages-capital-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/capital.js"))),
  "component---src-templates-organization-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/templates/organization.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/404.js"))),
  "component---src-pages-authback-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/authback.js"))),
  "component---src-pages-contribute-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/contribute.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/benmatthews/rails/goodhere/src/pages/login.js")))
}

