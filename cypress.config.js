const { defineConfig } = require('cypress');
const glob = require('glob');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(on, config);
      
      // Retrieve the spec pattern from the Cypress config
      const specPattern = config.specPattern || 'cypress/e2e/**/*.spec.{js,ts}';
      
      // Get matching test files using glob
      const testPaths = glob.sync(specPattern);
      
      // Log the test paths being run
      console.log(`Running tests for paths: ${testPaths.join(', ')}`);
      
      return config;
    },
    env: {
      testCredentials: process.env.TEST_CREDENTIALS,
      gkeServiceAccount: process.env.GKE,
      grepFilterSpecs: true,
      grepOmitFiltered: true
    }
  }
});
