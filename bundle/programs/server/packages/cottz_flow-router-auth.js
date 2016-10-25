(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var check = Package.check.check;
var Match = Package.check.Match;
var Random = Package.random.Random;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"cottz:flow-router-auth":{"flow-router-auth.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/classCallCheck",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/cottz_flow-router-auth/flow-router-auth.js                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});
                                                                                                       //
                                                                                                       //
var FlowAuth = function () {                                                                           //
  function FlowAuth() {                                                                                // 2
    _classCallCheck(this, FlowAuth);                                                                   // 2
                                                                                                       //
    this.controllers = new Mongo.Collection(null);                                                     // 3
    this.redirect = 'notFound';                                                                        // 4
    this.hasPermission = new ReactiveVar(false);                                                       // 5
    this.authReady = new ReactiveVar(true);                                                            // 6
  }                                                                                                    // 7
                                                                                                       //
  FlowAuth.prototype.allow = function allow(callback, options) {                                       //
    check(callback, Function);                                                                         // 9
                                                                                                       //
    var controller = {                                                                                 // 11
      action: callback,                                                                                // 12
      createdAt: new Date().getTime()                                                                  // 13
    };                                                                                                 // 11
                                                                                                       //
    if (options) {                                                                                     // 16
      options.except ? controller.except = options.except : controller.only = options.only || options;
      controller.redirect = options.redirect;                                                          // 20
    };                                                                                                 // 21
                                                                                                       //
    if (_typeof(controller.only) == 'object' && !Array.isArray(controller.only)) {                     // 23
      var groupId = Random.id();                                                                       // 24
      var group = controller.only;                                                                     // 25
                                                                                                       //
      if (!group.auth) group.auth = [];                                                                // 27
      group.auth.push(groupId);                                                                        // 28
                                                                                                       //
      controller.only = groupId;                                                                       // 30
    }                                                                                                  // 31
    this.controllers.insert(controller);                                                               // 32
  };                                                                                                   // 33
                                                                                                       //
  FlowAuth.prototype.allows = function allows(controllers) {                                           //
    for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;                                                                                        // 35
                                                                                                       //
      if (_isArray) {                                                                                  // 35
        if (_i >= _iterator.length) break;                                                             // 35
        _ref = _iterator[_i++];                                                                        // 35
      } else {                                                                                         // 35
        _i = _iterator.next();                                                                         // 35
        if (_i.done) break;                                                                            // 35
        _ref = _i.value;                                                                               // 35
      }                                                                                                // 35
                                                                                                       //
      var c = _ref;                                                                                    // 35
                                                                                                       //
      this.allow(c.action, c);                                                                         // 36
    };                                                                                                 // 37
  };                                                                                                   // 38
                                                                                                       //
  FlowAuth.prototype.check = function check(path, group, redirect) {                                   //
    var _this = this;                                                                                  // 39
                                                                                                       //
    var next = true;                                                                                   // 40
    var only = path;                                                                                   // 41
                                                                                                       //
    this.authReady.set(false);                                                                         // 43
                                                                                                       //
    if (group) {                                                                                       // 45
      var auth = [];                                                                                   // 46
                                                                                                       //
      while (group) {                                                                                  // 48
        if (group.auth) auth.push(group.auth);                                                         // 49
        group = group.parent;                                                                          // 51
      };                                                                                               // 52
                                                                                                       //
      if (auth.length) {                                                                               // 54
        auth.unshift(only);                                                                            // 55
        only = { $in: _.flatten(auth) };                                                               // 56
      }                                                                                                // 57
    }                                                                                                  // 58
                                                                                                       //
    this.controllers.find({                                                                            // 60
      $or: [{ only: only }, { except: { $ne: path }, only: null }]                                     // 61
    }, { sort: { createdAt: 1 } }).forEach(function (route) {                                          // 60
      if (!next) return;                                                                               // 66
                                                                                                       //
      next = route.action();                                                                           // 68
                                                                                                       //
      if (!next) {                                                                                     // 70
        typeof redirect === 'function' ? redirect(route.redirect || _this.redirect) : FlowRouter.go(route.redirect || _this.redirect);
      }                                                                                                // 74
    });                                                                                                // 75
                                                                                                       //
    this.authReady.set(true);                                                                          // 77
    this.hasPermission.set(next);                                                                      // 78
  };                                                                                                   // 79
                                                                                                       //
  FlowAuth.prototype.permissionGranted = function permissionGranted() {                                //
    return this.hasPermission.get();                                                                   // 81
  };                                                                                                   // 82
                                                                                                       //
  FlowAuth.prototype.ready = function ready() {                                                        //
    return this.authReady.get();                                                                       // 84
  };                                                                                                   // 85
                                                                                                       //
  return FlowAuth;                                                                                     //
}();                                                                                                   //
                                                                                                       //
;                                                                                                      // 86
// ----------------------------------------------------------------------                              //
FlowRouter.Auth = new FlowAuth();                                                                      // 88
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/cottz:flow-router-auth/flow-router-auth.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['cottz:flow-router-auth'] = {};

})();

//# sourceMappingURL=cottz_flow-router-auth.js.map
