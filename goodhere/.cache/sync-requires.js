const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-organizations-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/templates/organizations.js"))),
  "component---src-pages-capital-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/capital.js"))),
  "component---src-templates-organization-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/templates/organization.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/404.js"))),
  "component---src-pages-authback-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/authback.js"))),
  "component---src-pages-contribute-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/contribute.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/benmatthews/rails/climatescape.org/site/src/pages/login.js")))
}

