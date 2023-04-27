
module.exports = {
  projectId: 'kiwvfu',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on: any, config: any) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}



