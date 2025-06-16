import {
  formatInTimeZone
} from "./chunk-POVT32XF.js";
import {
  differenceInHours,
  differenceInMinutes
} from "./chunk-KM3PTPTG.js";
import {
  requiredArgs,
  toDate
} from "./chunk-LENAR7IN.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/helpers-902063ee.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}
var MILLISECONDS_IN_HOUR = 36e5;
function addHours(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}
var MILLISECONDS_IN_MINUTE = 6e4;
function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}
function subMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMinutes(dirtyDate, -amount);
}
function validateTimezone(timezone) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => {
      try {
        formatInTimeZone(/* @__PURE__ */ new Date(), timezone, "MM/dd");
        resolve(true);
      } catch (e) {
        reject(false);
      }
    });
  });
}
function agnosticAddDays(date, amount) {
  const originalTZO = date.getTimezoneOffset();
  const endDate = addDays(date, amount);
  const endTZO = endDate.getTimezoneOffset();
  const dstDiff = originalTZO - endTZO;
  return dstDiff >= 0 ? addMinutes(endDate, dstDiff) : subMinutes(endDate, Math.abs(dstDiff));
}
function dateRange(start, end, interval, intervalValue = 1, timezone = "UTC") {
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (startDate > endDate) {
    return [];
  }
  if (interval === "day") {
    const days = Math.floor(differenceInHours(endDate, startDate) / 24) | 0;
    const output = [...Array(days).keys()].map((i) => {
      const time = agnosticAddDays(startDate, i);
      const formattedTime = formatInTimeZone(time, timezone, "MM/dd");
      return [formattedTime];
    });
    return output;
  }
  if (interval === "hour") {
    let days = differenceInHours(endDate, startDate);
    days = days / intervalValue;
    const output = [...Array(days).keys()].map((i) => {
      const time = addHours(startDate, i);
      const formattedTime = formatInTimeZone(time, timezone, "HH:mm");
      const dayFormattedTime = formatInTimeZone(time, timezone, "MM/dd");
      return [formattedTime, dayFormattedTime];
    });
    return output;
  }
  if (interval === "minute") {
    let days = differenceInMinutes(endDate, startDate);
    days = days / intervalValue;
    const output = [...Array(days).keys()].map((i) => {
      const time = addMinutes(startDate, i);
      const formattedTime = formatInTimeZone(time, timezone, "HH:mm");
      const dayFormattedTime = formatInTimeZone(time, timezone, "MM/dd");
      return [formattedTime, dayFormattedTime];
    });
    return output;
  }
  return [];
}

export {
  toInteger,
  addMilliseconds,
  validateTimezone,
  dateRange
};
//# sourceMappingURL=chunk-L6JKGC3J.js.map
