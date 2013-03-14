require.config({
  shim : {
    'handlebars': {
      exports: 'Handlebars'
    },

    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  },

  paths: {
    'jquery': 'libs/jquery/1.9.1/jquery',
    'handlebars': 'libs/handlebars/1.0.0-rc.3/handlebars',
    'ember': 'libs/ember/1.0.0-rc.1/ember',
    'text': 'libs/requirejs/plugins/text',
    'janice': 'libs/janice'
  }
});

require(
  ['janice',
   'jquery',
   'ember',
   'text!../templates/character.template'
  ],
  function (Janice, $, Em, templateSource) {
    App = Em.Application.create({
      LOG_TRANSITIONS: true
    });

    App.ClickableView = Ember.View.extend({
      click: function(evt) {
        alert("ClickableView was clicked!");
      }
    });
    Em.Handlebars.bootstrap($(templateSource));

    return App
});
