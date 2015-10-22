(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _personEs6 = require('./person.es6');

// 1. Classes

var FriendlyGuy = (function (_Person) {
  _inherits(FriendlyGuy, _Person);

  // 2. Default parameter

  function FriendlyGuy(firstName, lastName) {
    var age = arguments.length <= 2 || arguments[2] === undefined ? 18 : arguments[2];

    _classCallCheck(this, FriendlyGuy);

    _get(Object.getPrototypeOf(FriendlyGuy.prototype), 'constructor', this).call(this, firstName, lastName, age);
    this._friends = [];
  }

  _createClass(FriendlyGuy, [{
    key: 'hasFriend',
    value: function hasFriend(friend) {
      for (var currentFriend in this._friends) {
        if (this._friends[currentFriend] == friend) {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'addFriend',
    value: function addFriend(friend) {
      if (!this.hasFriend(friend)) {
        this._friends.push(friend);
      } else {
        return;
      }
      friend.addFriend(this);
    }
  }, {
    key: 'pullEar',
    value: function pullEar() {
      var that = this;
      var pullEarActions = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function callee$2$0() {
        var i;
        return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              i = 1;

            case 1:
              if (!(i <= that._age)) {
                context$3$0.next = 7;
                break;
              }

              context$3$0.next = 4;
              return i;

            case 4:
              i++;
              context$3$0.next = 1;
              break;

            case 7:
            case 'end':
              return context$3$0.stop();
          }
        }, callee$2$0, this);
      }));
      return pullEarActions;
    }
  }, {
    key: 'showFriends',
    value: function showFriends() {
      var _this = this;

      // 4. Arrows
      this._friends.forEach(function (f) {
        return(
          // 3. Template Strings
          // 4. Unlike functions, arrows share the same lexical this as their surrounding code
          console.log(_this._firstName + ' and ' + f._firstName + ' are friends')
        );
      });
    }
  }]);

  return FriendlyGuy;
})(_personEs6.Person);

exports.FriendlyGuy = FriendlyGuy;

},{"./person.es6":2}],2:[function(require,module,exports){
// 1. Classes
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Person = (function () {
  // 2. Default parameter

  function Person(firstName, lastName) {
    var age = arguments.length <= 2 || arguments[2] === undefined ? 18 : arguments[2];

    _classCallCheck(this, Person);

    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  _createClass(Person, [{
    key: 'getIdentityCard',
    value: function getIdentityCard() {
      // 5. Shorthand Object Literals
      var name = this._firstName + ' ' + this._lastName;
      var age = this._age;
      return { name: name, age: age };
    }
  }]);

  return Person;
})();

exports.Person = Person;

},{}]},{},[1]);
