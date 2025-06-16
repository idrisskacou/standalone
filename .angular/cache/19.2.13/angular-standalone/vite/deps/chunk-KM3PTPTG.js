import {
  requiredArgs,
  toDate
} from "./chunk-LENAR7IN.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/index-1ff547d6.js
function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}
var MILLISECONDS_IN_HOUR = 36e5;
function differenceInHours(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
var MILLISECONDS_IN_MINUTE = 6e4;
function differenceInMinutes(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

export {
  differenceInMilliseconds,
  differenceInHours,
  differenceInMinutes
};
//# sourceMappingURL=chunk-KM3PTPTG.js.map
