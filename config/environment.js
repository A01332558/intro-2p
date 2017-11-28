/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'intro-2p',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii:{
      sessionServiceName: 'session' // Como se llama el servicio de torii
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase = {
      apiKey: "AIzaSyDLjM-9ZSTtPd47CR9jdU5xnhe5mmlXixY",
      authDomain: "intro2p-a8916.firebaseapp.com",
      databaseURL: "https://intro2p-a8916.firebaseio.com",
      projectId: "intro2p-a8916",
      storageBucket: "intro2p-a8916.appspot.com",
      messagingSenderId: "569562845237",
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.firebase = {
      apiKey: "AIzaSyDLjM-9ZSTtPd47CR9jdU5xnhe5mmlXixY",
      authDomain: "intro2p-a8916.firebaseapp.com",
      databaseURL: "https://intro2p-a8916.firebaseio.com",
      projectId: "intro2p-a8916",
      storageBucket: "intro2p-a8916.appspot.com",
      messagingSenderId: "569562845237",
    };
  }

  return ENV;
};
