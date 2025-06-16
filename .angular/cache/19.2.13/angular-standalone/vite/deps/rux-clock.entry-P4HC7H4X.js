import {
  getTimezoneOffsetInMilliseconds
} from "./chunk-IIGMCHKC.js";
import {
  format,
  utcToZonedTime
} from "./chunk-HZJEJK75.js";
import {
  requiredArgs,
  toDate
} from "./chunk-LENAR7IN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-clock.entry.js
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
var MILLISECONDS_IN_DAY = 864e5;
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
function startOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var cleanDate = toDate(dirtyDate);
  var date = /* @__PURE__ */ new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = differenceInCalendarDays(date, startOfYear(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}
var militaryTimezones = {
  A: "+01:00",
  B: "+02:00",
  C: "+03:00",
  D: "+04:00",
  E: "+05:00",
  F: "+06:00",
  G: "+07:00",
  H: "+08:00",
  I: "+09:00",
  K: "+10:00",
  L: "+11:00",
  M: "+12:00",
  N: "-01:00",
  O: "-02:00",
  P: "-03:00",
  Q: "-04:00",
  R: "-05:00",
  S: "-06:00",
  T: "-07:00",
  U: "-08:00",
  V: "-09:00",
  W: "-10:00",
  X: "-11:00",
  Y: "-12:00",
  Z: "+00:00"
};
var ruxClockCss = ":host{display:flex;margin:var(--spacing-0, 0rem);color:var(--color-palette-neutral-000, #ffffff);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host([hidden]){display:none}:host(:not([hide-labels])){height:calc(var(--spacing-8, 2rem) * 2)}.rux-clock{display:flex;user-select:none;color:var(--clock-text-color)}.rux-clock__segment{display:flex;flex-direction:column;align-items:center}.rux-clock__segment__value{display:flex;align-items:center;color:var(--gsb-color-text, #ffffff);font-family:var(--font-monospace-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-variant-numeric:tabular-nums;font-weight:var(--font-monospace-1-font-weight, 500);font-size:var(--font-monospace-1-font-size, 1.75rem);letter-spacing:var(--font-monospace-1-letter-spacing, 0em);box-shadow:var(--gsb-color-background, #172635) 0 0 0 1px inset;background-color:var(--clock-datetime-color-background, #101923);white-space:nowrap;overflow-y:hidden;text-overflow:ellipsis;height:var(--spacing-10, 2.5rem);padding:var(--spacing-0, 0rem) var(--spacing-3, 0.75rem)}:host([small]) .rux-clock__segment__value{height:var(--spacing-10, 2.5rem);padding:var(--spacing-1, 0.25rem) var(--spacing-3, 0.75rem);font-size:1.15rem;font-weight:var(--font-weight-medium)}.rux-clock__segment__label{font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-2-font-size, 0.875rem);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);color:var(--color-palette-neutral-000, #ffffff);background:var(--gsb-color-background, #172635);padding:var(--spacing-0, 0rem) var(--spacing-3, 0.75rem) var(--spacing-0, 0rem) var(--spacing-3, 0.75rem);line-height:var(--font-body-3-line-height, calc(16 / 12));width:-moz-available;width:-webkit-fill-available;width:fill-available;height:var(--spacing-6, 1.5rem);display:flex;align-items:flex-end;justify-content:center;text-align:center}.rux-clock__aos{margin-left:var(--spacing-4, 1rem)}";
var RuxClock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._timezone = "UTC";
    this.tzFormat = "z";
    this.hasRun = false;
    this._time = void 0;
    this._rawTime = void 0;
    this.aos = void 0;
    this.static = false;
    this.los = void 0;
    this.timezone = "UTC";
    this.hideTimezone = false;
    this.hideDate = false;
    this.hideLabels = false;
    this.dateIn = void 0;
    this.small = false;
  }
  updateAos(newValue) {
    this.convertedAos = this._formatLosAosDateIn(newValue);
  }
  updateLos(newValue) {
    this.convertedLos = this._formatLosAosDateIn(newValue);
  }
  handleDateInChange() {
    clearTimeout(this._timer);
    this._rawTime = new Date(this.dateIn);
    this._handleDateIn();
    this._updateTime();
  }
  timezoneChanged() {
    this._convertTimezone(this.timezone);
    if (this.aos) this.convertedAos = this._formatLosAosDateIn(this.aos);
    if (this.los) this.convertedLos = this._formatLosAosDateIn(this.los);
    this._updateTime();
  }
  get time() {
    return this._time;
  }
  connectedCallback() {
    this._convertTimezone(this.timezone);
    if (this.dateIn) {
      this._handleDateIn();
    } else {
      if (!this.static) {
        this._timer = window.setInterval(() => {
          this._updateTime();
        }, 1e3);
      }
    }
    if (this.aos) this.convertedAos = this._formatLosAosDateIn(this.aos);
    if (this.los) this.convertedLos = this._formatLosAosDateIn(this.los);
  }
  disconnectedCallback() {
    clearTimeout(this._timer);
  }
  componentWillLoad() {
    this._timezone = this.timezone;
    this._convertTimezone(this.timezone);
    this._updateTime();
  }
  _formatTime(time, timezone) {
    return format(utcToZonedTime(time, timezone), `HH:mm:ss ${this.hideTimezone ? "" : this.tzFormat}`, {
      timeZone: timezone
    });
  }
  _handleDateIn() {
    this._formatLosAosDateIn(this.dateIn);
    this._time = this.dateIn;
    if (!this._rawTime) this._rawTime = new Date(this.dateIn);
    if (this._validateDateIn(this._rawTime)) {
      if (!this.static) {
        this._timer = window.setInterval(() => {
          this._updateTime();
        }, 1e3);
      }
    } else {
      console.warn(`The date-in value of ${this.dateIn} is not a valid date.`);
    }
  }
  /**
   * @param date a Date type to be validated
   * @returns A boolean representative of if the date provided is valid
   */
  _validateDateIn(date) {
    return date.getTime() === date.getTime();
  }
  _updateTime() {
    if (this.dateIn) {
      if (!this.hasRun) {
        this._time = this._formatTime(this._rawTime, this._timezone);
        const clockDate = utcToZonedTime(this._rawTime, this._timezone);
        this.dayOfYear = getDayOfYear(clockDate);
        this.hasRun = true;
      } else {
        let seconds = this._rawTime.getSeconds() + 1;
        this._rawTime.setSeconds(seconds);
        this._time = this._formatTime(this._rawTime, this._timezone);
        const clockDate = utcToZonedTime(this._rawTime, this._timezone);
        this.dayOfYear = getDayOfYear(clockDate);
      }
    } else {
      this._time = this._formatTime(new Date(Date.now()), this._timezone);
      const localDate = new Date(Date.now());
      const clockDate = utcToZonedTime(localDate, this._timezone);
      this.dayOfYear = getDayOfYear(clockDate);
    }
  }
  /**
   * @param dateTime A date string in unix or ISO formats
   * @returns A timezone local ISO formatted 24h time string
   */
  _formatLosAosDateIn(dateTime) {
    if (new Date(Number(dateTime)).getTime() > 0) {
      dateTime = Number(dateTime);
      if (this.dateIn && parseInt(this.dateIn) === dateTime) {
        let d = new Date(dateTime);
        this._rawTime = d;
      }
    }
    return format(utcToZonedTime(dateTime, this._timezone), "HH:mm:ss");
  }
  _convertTimezone(timezone) {
    const _militaryTimezones = militaryTimezones;
    this._timezone = _militaryTimezones[timezone.toUpperCase()];
    this.tzFormat = "O";
    if (!this._timezone) {
      this._timezone = timezone;
      this.tzFormat = "zzz";
    } else if (timezone.toUpperCase() == "Z") {
      this.tzFormat = "X";
    }
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-clock",
      part: "container"
    }, !this.hideDate && h("div", {
      class: "rux-clock__segment"
    }, h("div", {
      class: "rux-clock__segment__value",
      "aria-labelledby": "rux-clock__day-of-year-label",
      part: "date"
    }, this.dayOfYear.toString().padStart(3, "0")), !this.hideLabels && h("div", {
      class: "rux-clock__segment__label",
      id: "rux-clock__day-of-year-label",
      part: "date-label"
    }, "Date")), h("div", {
      class: "rux-clock__segment"
    }, h("div", {
      class: "rux-clock__segment__value",
      "aria-labelledby": "rux-clock__time-label",
      part: "time"
    }, this.time), !this.hideLabels && h("div", {
      class: "rux-clock__segment__label",
      id: "rux-clock__time-label",
      part: "time-label"
    }, "Time")), this.aos && h("div", {
      class: "rux-clock__segment rux-clock__aos"
    }, h("div", {
      class: "rux-clock__segment__value",
      "aria-labelledby": "rux-clock__time-label--aos",
      id: "rux-clock__time--aos",
      part: "aos"
    }, this.convertedAos), !this.hideLabels && h("div", {
      class: "rux-clock__segment__label",
      id: "rux-clock__time-label--aos",
      part: "aos-label"
    }, "AOS")), this.los && h("div", {
      class: "rux-clock__segment rux-clock__los"
    }, h("div", {
      class: "rux-clock__segment__value",
      "aria-labelledby": "rux-clock__time-label--los",
      id: "rux-clock__time--los",
      part: "los"
    }, this.convertedLos), !this.hideLabels && h("div", {
      class: "rux-clock__segment__label",
      id: "rux-clock__time-label--los",
      part: "los-label"
    }, "LOS"))));
  }
  static get watchers() {
    return {
      "aos": ["updateAos"],
      "los": ["updateLos"],
      "dateIn": ["handleDateInChange"],
      "timezone": ["timezoneChanged"]
    };
  }
};
RuxClock.style = ruxClockCss;
export {
  RuxClock as rux_clock
};
//# sourceMappingURL=rux-clock.entry-P4HC7H4X.js.map
