// node_modules/@astrouxds/astro-web-components/dist/esm/index-bf9fd6cc.js
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire();
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var requiredArgs_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = requiredArgs;
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  module.exports = exports.default;
});
var toDate_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toDate2;
  var _index = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function toDate2(argument) {
    (0, _index.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  module.exports = exports.default;
});
var isValid_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValid;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function isValid(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    return !isNaN(date);
  }
  module.exports = exports.default;
});
var formatDistance_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = formatDistance;
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === "string") {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace("{{count}}", count);
    }
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  }
  module.exports = exports.default;
});
var buildFormatLongFn_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildFormatLongFn;
  function buildFormatLongFn(args) {
    return function(dirtyOptions) {
      var options = dirtyOptions || {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format2 = args.formats[width] || args.formats[args.defaultWidth];
      return format2;
    };
  }
  module.exports = exports.default;
});
var formatLong_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildFormatLongFn_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: (0, _index.default)({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: (0, _index.default)({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: (0, _index.default)({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  var _default = formatLong;
  exports.default = _default;
  module.exports = exports.default;
});
var formatRelative_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = formatRelative;
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }
  module.exports = exports.default;
});
var buildLocalizeFn_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildLocalizeFn;
  function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }
  module.exports = exports.default;
});
var localize_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildLocalizeFn_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var eraValues = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.
  };
  var monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  function ordinalNumber(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  }
  var localize = {
    ordinalNumber,
    era: (0, _index.default)({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: (0, _index.default)({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function(quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: (0, _index.default)({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: (0, _index.default)({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, _index.default)({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  var _default = localize;
  exports.default = _default;
  module.exports = exports.default;
});
var buildMatchPatternFn_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchPatternFn;
  function buildMatchPatternFn(args) {
    return function(dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult) {
        return null;
      }
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value,
        rest: string.slice(matchedString.length)
      };
    };
  }
  module.exports = exports.default;
});
var buildMatchFn_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchFn;
  function buildMatchFn(args) {
    return function(dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var value;
      if (Object.prototype.toString.call(parsePatterns) === "[object Array]") {
        value = findIndex(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
      } else {
        value = findKey(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
      }
      value = args.valueCallback ? args.valueCallback(value) : value;
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value,
        rest: string.slice(matchedString.length)
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
  }
  module.exports = exports.default;
});
var match_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildMatchPatternFn_1);
  var _index2 = _interopRequireDefault(buildMatchFn_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: (0, _index.default)({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function(value) {
        return parseInt(value, 10);
      }
    }),
    era: (0, _index2.default)({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: (0, _index2.default)({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function(index) {
        return index + 1;
      }
    }),
    month: (0, _index2.default)({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: (0, _index2.default)({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, _index2.default)({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  var _default = match;
  exports.default = _default;
  module.exports = exports.default;
});
var enUS = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(formatDistance_1);
  var _index2 = _interopRequireDefault(formatLong_1);
  var _index3 = _interopRequireDefault(formatRelative_1);
  var _index4 = _interopRequireDefault(localize_1);
  var _index5 = _interopRequireDefault(match_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var locale = {
    code: "en-US",
    formatDistance: _index.default,
    formatLong: _index2.default,
    formatRelative: _index3.default,
    localize: _index4.default,
    match: _index5.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var _default = locale;
  exports.default = _default;
  module.exports = exports.default;
});
var toInteger_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toInteger2;
  function toInteger2(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  module.exports = exports.default;
});
var toInteger = getDefaultExportFromCjs(toInteger_1);
var addMilliseconds_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addMilliseconds;
  var _index = _interopRequireDefault(toInteger_1);
  var _index2 = _interopRequireDefault(toDate_1);
  var _index3 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function addMilliseconds(dirtyDate, dirtyAmount) {
    (0, _index3.default)(2, arguments);
    var timestamp = (0, _index2.default)(dirtyDate).getTime();
    var amount = (0, _index.default)(dirtyAmount);
    return new Date(timestamp + amount);
  }
  module.exports = exports.default;
});
var subMilliseconds_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = subMilliseconds;
  var _index = _interopRequireDefault(toInteger_1);
  var _index2 = _interopRequireDefault(addMilliseconds_1);
  var _index3 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function subMilliseconds(dirtyDate, dirtyAmount) {
    (0, _index3.default)(2, arguments);
    var amount = (0, _index.default)(dirtyAmount);
    return (0, _index2.default)(dirtyDate, -amount);
  }
  module.exports = exports.default;
});
var addLeadingZeros_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addLeadingZeros2;
  function addLeadingZeros2(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }
  module.exports = exports.default;
});
var lightFormatters = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(addLeadingZeros_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var formatters2 = {
    // Year
    y: function(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
    },
    // Day of the month
    d: function(date, token) {
      return (0, _index.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return dayPeriodEnumValue.toUpperCase();
        case "aaa":
          return dayPeriodEnumValue;
        case "aaaaa":
          return dayPeriodEnumValue[0];
        case "aaaa":
        default:
          return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function(date, token) {
      return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function(date, token) {
      return (0, _index.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function(date, token) {
      return (0, _index.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function(date, token) {
      return (0, _index.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return (0, _index.default)(fractionalSeconds, token.length);
    }
  };
  var _default = formatters2;
  exports.default = _default;
  module.exports = exports.default;
});
var getUTCDayOfYear_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCDayOfYear;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var MILLISECONDS_IN_DAY = 864e5;
  function getUTCDayOfYear(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }
  module.exports = exports.default;
});
var startOfUTCISOWeek_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCISOWeek;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function startOfUTCISOWeek(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _index.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  module.exports = exports.default;
});
var getUTCISOWeekYear_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCISOWeekYear;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(startOfUTCISOWeek_1);
  var _index3 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function getUTCISOWeekYear(dirtyDate) {
    (0, _index3.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index2.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index2.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  module.exports = exports.default;
});
var startOfUTCISOWeekYear_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCISOWeekYear;
  var _index = _interopRequireDefault(getUTCISOWeekYear_1);
  var _index2 = _interopRequireDefault(startOfUTCISOWeek_1);
  var _index3 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function startOfUTCISOWeekYear(dirtyDate) {
    (0, _index3.default)(1, arguments);
    var year = (0, _index.default)(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _index2.default)(fourthOfJanuary);
    return date;
  }
  module.exports = exports.default;
});
var getUTCISOWeek_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCISOWeek;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(startOfUTCISOWeek_1);
  var _index3 = _interopRequireDefault(startOfUTCISOWeekYear_1);
  var _index4 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCISOWeek(dirtyDate) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  module.exports = exports.default;
});
var startOfUTCWeek_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCWeek;
  var _index = _interopRequireDefault(toInteger_1);
  var _index2 = _interopRequireDefault(toDate_1);
  var _index3 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    (0, _index3.default)(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index.default)(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index.default)(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = (0, _index2.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  module.exports = exports.default;
});
var getUTCWeekYear_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCWeekYear;
  var _index = _interopRequireDefault(toInteger_1);
  var _index2 = _interopRequireDefault(toDate_1);
  var _index3 = _interopRequireDefault(startOfUTCWeek_1);
  var _index4 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index2.default)(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index.default)(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  module.exports = exports.default;
});
var startOfUTCWeekYear_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCWeekYear;
  var _index = _interopRequireDefault(toInteger_1);
  var _index2 = _interopRequireDefault(getUTCWeekYear_1);
  var _index3 = _interopRequireDefault(startOfUTCWeek_1);
  var _index4 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    (0, _index4.default)(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index.default)(options.firstWeekContainsDate);
    var year = (0, _index2.default)(dirtyDate, dirtyOptions);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _index3.default)(firstWeek, dirtyOptions);
    return date;
  }
  module.exports = exports.default;
});
var getUTCWeek_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCWeek;
  var _index = _interopRequireDefault(toDate_1);
  var _index2 = _interopRequireDefault(startOfUTCWeek_1);
  var _index3 = _interopRequireDefault(startOfUTCWeekYear_1);
  var _index4 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCWeek(dirtyDate, options) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  module.exports = exports.default;
});
var formatters_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(lightFormatters);
  var _index2 = _interopRequireDefault(getUTCDayOfYear_1);
  var _index3 = _interopRequireDefault(getUTCISOWeek_1);
  var _index4 = _interopRequireDefault(getUTCISOWeekYear_1);
  var _index5 = _interopRequireDefault(getUTCWeek_1);
  var _index6 = _interopRequireDefault(getUTCWeekYear_1);
  var _index7 = _interopRequireDefault(addLeadingZeros_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* | Milliseconds in day            |
     * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
     * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
     * |  d  | Day of month                   |  D  | Day of year                    |
     * |  e  | Local day of week              |  E  | Day of week                    |
     * |  f  |                                |  F* | Day of week in month           |
     * |  g* | Modified Julian day            |  G  | Era                            |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  i! | ISO day of week                |  I! | ISO week of year               |
     * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
     * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
     * |  l* | (deprecated)                   |  L  | Stand-alone month              |
     * |  m  | Minute                         |  M  | Month                          |
     * |  n  |                                |  N  |                                |
     * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
     * |  p! | Long localized time            |  P! | Long localized date            |
     * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
     * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
     * |  u  | Extended year                  |  U* | Cyclic year                    |
     * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
     * |  w  | Local week of year             |  W* | Week of month                  |
     * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
     * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
     * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     *
     * Letters marked by ! are non-standard, but implemented by date-fns:
     * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
     * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
     *   i.e. 7 for Sunday, 1 for Monday, etc.
     * - `I` is ISO week of year, as opposed to `w` which is local week of year.
     * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
     *   `R` is supposed to be used in conjunction with `I` and `i`
     *   for universal ISO week-numbering date, whereas
     *   `Y` is supposed to be used in conjunction with `w` and `e`
     *   for week-numbering date specific to the locale.
     * - `P` is long localized date format
     * - `p` is long localized time format
     */
  };
  var formatters2 = {
    // Era
    G: function(date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        // AD, BC
        case "G":
        case "GG":
        case "GGG":
          return localize.era(era, {
            width: "abbreviated"
          });
        // A, B
        case "GGGGG":
          return localize.era(era, {
            width: "narrow"
          });
        // Anno Domini, Before Christ
        case "GGGG":
        default:
          return localize.era(era, {
            width: "wide"
          });
      }
    },
    // Year
    y: function(date, token, localize) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: "year"
        });
      }
      return _index.default.y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
      var signedWeekYear = (0, _index6.default)(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return (0, _index7.default)(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return (0, _index7.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
      var isoWeekYear = (0, _index4.default)(date);
      return (0, _index7.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
      var year = date.getUTCFullYear();
      return (0, _index7.default)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        // 1, 2, 3, 4
        case "Q":
          return String(quarter);
        // 01, 02, 03, 04
        case "QQ":
          return (0, _index7.default)(quarter, 2);
        // 1st, 2nd, 3rd, 4th
        case "Qo":
          return localize.ordinalNumber(quarter, {
            unit: "quarter"
          });
        // Q1, Q2, Q3, Q4
        case "QQQ":
          return localize.quarter(quarter, {
            width: "abbreviated",
            context: "formatting"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "QQQQQ":
          return localize.quarter(quarter, {
            width: "narrow",
            context: "formatting"
          });
        // 1st quarter, 2nd quarter, ...
        case "QQQQ":
        default:
          return localize.quarter(quarter, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        // 1, 2, 3, 4
        case "q":
          return String(quarter);
        // 01, 02, 03, 04
        case "qq":
          return (0, _index7.default)(quarter, 2);
        // 1st, 2nd, 3rd, 4th
        case "qo":
          return localize.ordinalNumber(quarter, {
            unit: "quarter"
          });
        // Q1, Q2, Q3, Q4
        case "qqq":
          return localize.quarter(quarter, {
            width: "abbreviated",
            context: "standalone"
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case "qqqqq":
          return localize.quarter(quarter, {
            width: "narrow",
            context: "standalone"
          });
        // 1st quarter, 2nd quarter, ...
        case "qqqq":
        default:
          return localize.quarter(quarter, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
        case "M":
        case "MM":
          return _index.default.M(date, token);
        // 1st, 2nd, ..., 12th
        case "Mo":
          return localize.ordinalNumber(month + 1, {
            unit: "month"
          });
        // Jan, Feb, ..., Dec
        case "MMM":
          return localize.month(month, {
            width: "abbreviated",
            context: "formatting"
          });
        // J, F, ..., D
        case "MMMMM":
          return localize.month(month, {
            width: "narrow",
            context: "formatting"
          });
        // January, February, ..., December
        case "MMMM":
        default:
          return localize.month(month, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
        // 1, 2, ..., 12
        case "L":
          return String(month + 1);
        // 01, 02, ..., 12
        case "LL":
          return (0, _index7.default)(month + 1, 2);
        // 1st, 2nd, ..., 12th
        case "Lo":
          return localize.ordinalNumber(month + 1, {
            unit: "month"
          });
        // Jan, Feb, ..., Dec
        case "LLL":
          return localize.month(month, {
            width: "abbreviated",
            context: "standalone"
          });
        // J, F, ..., D
        case "LLLLL":
          return localize.month(month, {
            width: "narrow",
            context: "standalone"
          });
        // January, February, ..., December
        case "LLLL":
        default:
          return localize.month(month, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function(date, token, localize, options) {
      var week = (0, _index5.default)(date, options);
      if (token === "wo") {
        return localize.ordinalNumber(week, {
          unit: "week"
        });
      }
      return (0, _index7.default)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
      var isoWeek = (0, _index3.default)(date);
      if (token === "Io") {
        return localize.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return (0, _index7.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
      if (token === "do") {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return _index.default.d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
      var dayOfYear = (0, _index2.default)(date);
      if (token === "Do") {
        return localize.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return (0, _index7.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        // Tue
        case "E":
        case "EE":
        case "EEE":
          return localize.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "EEEEE":
          return localize.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "EEEEEE":
          return localize.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        // Tuesday
        case "EEEE":
        default:
          return localize.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case "e":
          return String(localDayOfWeek);
        // Padded numerical value
        case "ee":
          return (0, _index7.default)(localDayOfWeek, 2);
        // 1st, 2nd, ..., 7th
        case "eo":
          return localize.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "eee":
          return localize.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "eeeee":
          return localize.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "eeeeee":
          return localize.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        // Tuesday
        case "eeee":
        default:
          return localize.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        // Numerical value (same as in `e`)
        case "c":
          return String(localDayOfWeek);
        // Padded numerical value
        case "cc":
          return (0, _index7.default)(localDayOfWeek, token.length);
        // 1st, 2nd, ..., 7th
        case "co":
          return localize.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "ccc":
          return localize.day(dayOfWeek, {
            width: "abbreviated",
            context: "standalone"
          });
        // T
        case "ccccc":
          return localize.day(dayOfWeek, {
            width: "narrow",
            context: "standalone"
          });
        // Tu
        case "cccccc":
          return localize.day(dayOfWeek, {
            width: "short",
            context: "standalone"
          });
        // Tuesday
        case "cccc":
        default:
          return localize.day(dayOfWeek, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        // 2
        case "i":
          return String(isoDayOfWeek);
        // 02
        case "ii":
          return (0, _index7.default)(isoDayOfWeek, token.length);
        // 2nd
        case "io":
          return localize.ordinalNumber(isoDayOfWeek, {
            unit: "day"
          });
        // Tue
        case "iii":
          return localize.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        // T
        case "iiiii":
          return localize.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        // Tu
        case "iiiiii":
          return localize.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        // Tuesday
        case "iiii":
        default:
          return localize.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
        case "b":
        case "bb":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return _index.default.h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
      if (token === "Ho") {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return _index.default.H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return (0, _index7.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;
      if (token === "ko") {
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return (0, _index7.default)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
      if (token === "mo") {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return _index.default.m(date, token);
    },
    // Second
    s: function(date, token, localize) {
      if (token === "so") {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return _index.default.s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
      return _index.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
        // Hours and optional minutes
        case "X":
          return formatTimezoneWithOptionalMinutes2(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`
        case "XXXX":
        case "XX":
          return formatTimezone2(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XXX`
        case "XXXXX":
        case "XXX":
        // Hours and minutes with `:` delimiter
        default:
          return formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Hours and optional minutes
        case "x":
          return formatTimezoneWithOptionalMinutes2(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`
        case "xxxx":
        case "xx":
          return formatTimezone2(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xxx`
        case "xxxxx":
        case "xxx":
        // Hours and minutes with `:` delimiter
        default:
          return formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (GMT)
    O: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Short
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
        // Long
        case "OOOO":
        default:
          return "GMT" + formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Short
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
        // Long
        case "zzzz":
        default:
          return "GMT" + formatTimezone2(timezoneOffset, ":");
      }
    },
    // Seconds timestamp
    t: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return (0, _index7.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return (0, _index7.default)(timestamp, token.length);
    }
  };
  function formatTimezoneShort2(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
    return sign + String(hours) + delimiter + (0, _index7.default)(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes2(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + (0, _index7.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone2(offset, dirtyDelimiter);
  }
  function formatTimezone2(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = (0, _index7.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _index7.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  var _default = formatters2;
  exports.default = _default;
  module.exports = exports.default;
});
var longFormatters_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case "P":
        return formatLong.date({
          width: "short"
        });
      case "PP":
        return formatLong.date({
          width: "medium"
        });
      case "PPP":
        return formatLong.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong.date({
          width: "full"
        });
    }
  }
  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case "p":
        return formatLong.time({
          width: "short"
        });
      case "pp":
        return formatLong.time({
          width: "medium"
        });
      case "ppp":
        return formatLong.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong.time({
          width: "full"
        });
    }
  }
  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
  }
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  var _default = longFormatters;
  exports.default = _default;
  module.exports = exports.default;
});
var getTimezoneOffsetInMilliseconds_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getTimezoneOffsetInMilliseconds2;
  function getTimezoneOffsetInMilliseconds2(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  module.exports = exports.default;
});
var getTimezoneOffsetInMilliseconds = getDefaultExportFromCjs(getTimezoneOffsetInMilliseconds_1);
var protectedTokens = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
  exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
  exports.throwProtectedError = throwProtectedError;
  var protectedDayOfYearTokens = ["D", "DD"];
  var protectedWeekYearTokens = ["YY", "YYYY"];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format2, input) {
    if (token === "YYYY") {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "YY") {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "D") {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "DD") {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }
});
var format_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = format2;
  var _index = _interopRequireDefault(isValid_1);
  var _index2 = _interopRequireDefault(enUS);
  var _index3 = _interopRequireDefault(subMilliseconds_1);
  var _index4 = _interopRequireDefault(toDate_1);
  var _index5 = _interopRequireDefault(formatters_1);
  var _index6 = _interopRequireDefault(longFormatters_1);
  var _index7 = _interopRequireDefault(getTimezoneOffsetInMilliseconds_1);
  var _index9 = _interopRequireDefault(toInteger_1);
  var _index10 = _interopRequireDefault(requiredArgs_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  function format2(dirtyDate, dirtyFormatStr, dirtyOptions) {
    (0, _index10.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || _index2.default;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0, _index9.default)(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0, _index9.default)(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0, _index9.default)(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0, _index9.default)(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = (0, _index4.default)(dirtyDate);
    if (!(0, _index.default)(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = (0, _index7.default)(originalDate);
    var utcDate = (0, _index3.default)(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate,
      weekStartsOn,
      locale,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = _index6.default[firstCharacter];
        return longFormatter(substring, locale.formatLong, formatterOptions);
      }
      return substring;
    }).join("").match(formattingTokensRegExp).map(function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = _index5.default[firstCharacter];
      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && (0, protectedTokens.isProtectedWeekYearToken)(substring)) {
          (0, protectedTokens.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
        }
        if (!options.useAdditionalDayOfYearTokens && (0, protectedTokens.isProtectedDayOfYearToken)(substring)) {
          (0, protectedTokens.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    }).join("");
    return result;
  }
  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }
  module.exports = exports.default;
});
var dateFnsFormat = getDefaultExportFromCjs(format_1);
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale);
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date);
  for (var i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i].type === "timeZoneName") {
      return formatted[i].value;
    }
  }
}
function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
function getDTF(length, timeZone, locale) {
  if (locale && !locale.code) {
    throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, "en-US"] : void 0, {
    timeZone,
    timeZoneName: length
  });
}
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var pos = typeToPos[formatted[i].type];
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  var utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$2 = 6e4;
var patterns$1 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token;
  var absoluteOffset;
  if (timezoneString === "") {
    return 0;
  }
  token = patterns$1.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  var hours;
  token = patterns$1.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR$1);
  }
  token = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    var minutes = parseInt(token[2], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2;
    return hours > 0 ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = isUtcDate ? date : toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}
function calcOffset(date, timezoneString) {
  var tokens = tzTokenizeDate(date, timezoneString);
  var asUTC = newDateUTC(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
  var asTS = date.getTime();
  var over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime();
  var utcGuess = localTS - offset;
  var o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  var o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString]) return true;
  try {
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}
var MILLISECONDS_IN_MINUTE$1 = 60 * 1e3;
var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimeter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimeter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, localize, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, options._originalDate || date);
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, localize, options) {
    var originalDate = options._originalDate || date;
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", originalDate, options);
      // Long
      case "zzzz":
      default:
        return tzIntlTimeZoneName("long", originalDate, options);
    }
  }
};
function getTimeZoneOffset(timeZone, originalDate) {
  var timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE$1 : originalDate.getTimezoneOffset();
  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError("Invalid time zone specified: " + timeZone);
  }
  return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(Math.floor(absOffset % 60), 2);
  return sign + hours + delimeter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimeter);
}
function formatTimezoneShort(offset, dirtyDelimeter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimeter = dirtyDelimeter || "";
  return sign + String(hours) + delimeter + addLeadingZeros(minutes, 2);
}
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern
};
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;
    if (dateStrings.time) {
      time = parseTime(dateStrings.time);
      if (isNaN(time)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time + offset));
    }
    return new Date(timestamp + time + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var parts = patterns.dateTimePattern.exec(dateString);
  var timeString;
  if (!parts) {
    parts = patterns.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    var token = patterns.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token;
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token = patterns.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token;
  var hours;
  var minutes;
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var matches = formatStr.match(tzFormattingTokensRegExp);
  if (matches) {
    var date = toDate(dirtyDate, options);
    formatStr = matches.reduce(function(result, token) {
      if (token[0] === "'") {
        return result;
      }
      var pos = result.indexOf(token);
      var precededByQuotedSection = result[pos - 1] === "'";
      var replaced = result.replace(token, "'" + formatters[token[0]](date, token, null, options) + "'");
      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }
  return dateFnsFormat(dirtyDate, formatStr, options);
}
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = toDate(dirtyDate, options);
  var offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  var d = new Date(date.getTime() - offsetMilliseconds);
  var resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
  return resultDate;
}

export {
  getDefaultExportFromCjs,
  createCommonjsModule,
  format,
  utcToZonedTime
};
//# sourceMappingURL=chunk-HZJEJK75.js.map
