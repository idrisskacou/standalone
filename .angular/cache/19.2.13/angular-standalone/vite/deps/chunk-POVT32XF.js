import {
  createCommonjsModule,
  format,
  getDefaultExportFromCjs,
  utcToZonedTime
} from "./chunk-HZJEJK75.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/index-fe8e5d4f.js
var assign_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assign;
  function assign(target, dirtyObject) {
    if (target == null) {
      throw new TypeError("assign requires that input parameter not be null or undefined");
    }
    dirtyObject = dirtyObject || {};
    for (var property in dirtyObject) {
      if (dirtyObject.hasOwnProperty(property)) {
        target[property] = dirtyObject[property];
      }
    }
    return target;
  }
  module.exports = exports.default;
});
var cloneObject_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneObject2;
  var _index = _interopRequireDefault(assign_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function cloneObject2(dirtyObject) {
    return (0, _index.default)({}, dirtyObject);
  }
  module.exports = exports.default;
});
var cloneObject = getDefaultExportFromCjs(cloneObject_1);
function formatInTimeZone(date, timeZone, formatStr, options) {
  var extendedOptions = cloneObject(options);
  extendedOptions.timeZone = timeZone;
  return format(utcToZonedTime(date, timeZone), formatStr, extendedOptions);
}

export {
  formatInTimeZone
};
//# sourceMappingURL=chunk-POVT32XF.js.map
