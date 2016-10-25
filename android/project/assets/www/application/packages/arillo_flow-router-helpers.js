//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/template.helpers.js                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
                                                                                     // 1
Template.__checkName("linkTo");                                                      // 2
Template["linkTo"] = new Template("Template.linkTo", (function() {                   // 3
  var view = this;                                                                   // 4
  return HTML.A({                                                                    // 5
    href: function() {                                                               // 6
      return Spacebars.mustache(view.lookup("pathFor"), view.lookup("."));           // 7
    }                                                                                // 8
  }, Blaze._InOuterTemplateScope(view, function() {                                  // 9
    return Spacebars.include(function() {                                            // 10
      return Spacebars.call(view.templateContentBlock);                              // 11
    });                                                                              // 12
  }));                                                                               // 13
}));                                                                                 // 14
                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/helpers.coffee.js                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var FlowRouterHelpers, currentRouteName, currentRouteOption, func, helpers, isSubReady, name, param, pathFor, queryParam, subsReady, urlFor,
  slice = [].slice,                                                                  //
  hasProp = {}.hasOwnProperty;                                                       //
                                                                                     //
subsReady = function() {                                                             // 2
  var subs;                                                                          // 3
  subs = 1 <= arguments.length ? slice.call(arguments, 0) : [];                      //
  if (subs.length === 1) {                                                           //
    return FlowRouter.subsReady();                                                   // 3
  }                                                                                  //
  subs = subs.slice(0, subs.length - 1);                                             //
  return _.reduce(subs, function(memo, sub) {                                        //
    return memo && FlowRouter.subsReady(sub);                                        //
  }, true);                                                                          //
};                                                                                   // 2
                                                                                     //
pathFor = function(path, view) {                                                     // 10
  var hashBang, query, ref;                                                          // 11
  if (view == null) {                                                                //
    view = {                                                                         //
      hash: {}                                                                       //
    };                                                                               //
  }                                                                                  //
  if (!path) {                                                                       //
    throw new Error('no path defined');                                              // 11
  }                                                                                  //
  if (!view.hash) {                                                                  //
    view = {                                                                         //
      hash: view                                                                     //
    };                                                                               //
  }                                                                                  //
  if (((ref = path.hash) != null ? ref.route : void 0) != null) {                    //
    view = path;                                                                     //
    path = view.hash.route;                                                          //
    delete view.hash.route;                                                          //
  }                                                                                  //
  query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};              //
  hashBang = view.hash.hash ? view.hash.hash : '';                                   //
  return FlowRouter.path(path, view.hash, query) + (hashBang ? "#" + hashBang : '');
};                                                                                   // 10
                                                                                     //
urlFor = function(path, view) {                                                      // 23
  var relativePath;                                                                  // 24
  relativePath = pathFor(path, view);                                                //
  return Meteor.absoluteUrl(relativePath.substr(1));                                 //
};                                                                                   // 23
                                                                                     //
param = function(name) {                                                             // 28
  return FlowRouter.getParam(name);                                                  //
};                                                                                   // 28
                                                                                     //
queryParam = function(key) {                                                         // 32
  return FlowRouter.getQueryParam(key);                                              //
};                                                                                   // 32
                                                                                     //
currentRouteName = function() {                                                      // 36
  return FlowRouter.getRouteName();                                                  //
};                                                                                   // 36
                                                                                     //
currentRouteOption = function(optionName) {                                          // 40
  return FlowRouter.current().route.options[optionName];                             //
};                                                                                   // 40
                                                                                     //
isSubReady = function(sub) {                                                         // 44
  if (sub) {                                                                         //
    return FlowRouter.subsReady(sub);                                                // 45
  }                                                                                  //
  return FlowRouter.subsReady();                                                     // 46
};                                                                                   // 44
                                                                                     //
helpers = {                                                                          // 48
  subsReady: subsReady,                                                              //
  pathFor: pathFor,                                                                  //
  urlFor: urlFor,                                                                    //
  param: param,                                                                      //
  queryParam: queryParam,                                                            //
  currentRouteName: currentRouteName,                                                //
  isSubReady: isSubReady,                                                            //
  currentRouteOption: currentRouteOption                                             //
};                                                                                   //
                                                                                     //
if (Meteor.isClient) {                                                               // 58
  for (name in helpers) {                                                            // 59
    if (!hasProp.call(helpers, name)) continue;                                      //
    func = helpers[name];                                                            //
    Template.registerHelper(name, func);                                             //
  }                                                                                  // 59
}                                                                                    //
                                                                                     //
if (Meteor.isServer) {                                                               // 61
  FlowRouterHelpers = {                                                              //
    pathFor: pathFor,                                                                //
    urlFor: urlFor                                                                   //
  };                                                                                 //
}                                                                                    //
                                                                                     //
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['arillo:flow-router-helpers'] = {};

})();
