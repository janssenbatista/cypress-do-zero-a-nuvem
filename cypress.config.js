const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 768,
  viewportWidth: 1024,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
