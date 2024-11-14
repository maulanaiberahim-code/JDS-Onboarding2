const { defineConfig } = require("cypress")
require('dotenv').config()

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-qase-reporter',
    // cypressMochawesomeReporterReporterOptions: {
    //   charts: true,
    // },
    
    cypressQaseReporterReporterOptions: {
      debug: true,

      testops: {
        api: {
          token: process.env.QASE_API_TOKEN,
        },

        project: 'JSA',
        autoGenerate: true,
        uploadAttachments: true,
        

        run: {
          complete: true,
        },

        
      },

      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        }
      }
    },
  },
  video: false,
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-qase-reporter/plugin')(on, config)
      require('cypress-qase-reporter/metadata')(on)
      // implement node event listeners here
    },

    env: {
      base_url: process.env.BASE_URL
    },
  },
});
