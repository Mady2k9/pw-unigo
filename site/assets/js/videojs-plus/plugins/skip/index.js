/* eslint-disable */
/* VERSION: 1.6.9 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.videojs));
}(this, (function (videojs) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var Component = videojs__default['default'].getComponent('Component');

  var SkipButtons = /*#__PURE__*/function (_Component) {
    _inheritsLoose(SkipButtons, _Component);

    function SkipButtons() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = SkipButtons.prototype;

    _proto.createEl = function createEl() {
      var el = videojs__default['default'].dom.createEl('div', {
        className: 'vjs-skip-buttons',
        innerHTML: "\n                    <div class=\"vjs-icon-replay-5 pr-10 cursor-pointer\">\n                            Replay\n                    </div>\n                    <div class=\"vjs-icon-forward-5 cursor-pointer\">\n                            Forward\n                    </div>\n                "
      });
      return el;
    };

    return SkipButtons;
  }(Component);

  videojs__default['default'].registerComponent('SkipButtons', SkipButtons);

  var Plugin = videojs__default['default'].getPlugin('plugin');

  var Skip = /*#__PURE__*/function (_Plugin) {
    _inheritsLoose(Skip, _Plugin);

    function Skip(player, options) {
      var _this;

      if (options === void 0) {
        options = {};
      }

      _this = _Plugin.call(this, player, options) || this;

      _this.createSkipButtons(player);

      return _this;
    }

    var _proto = Skip.prototype;

    _proto.createSkipButtons = function createSkipButtons(player) {
      var _player$findChild$ = player.findChild('DurationDisplay')[0],
          parent = _player$findChild$.parent,
          index = _player$findChild$.index;
      var skipButtons = new SkipButtons(player);
      parent.addChild(skipButtons, {}, index + 1);
      this.on('dispose', function () {
        parent.removeChild(skipButtons);
      });
    };

    return Skip;
  }(Plugin);

  videojs__default['default'].registerPlugin('skip', Skip);

})));
//# sourceMappingURL=index.js.map
