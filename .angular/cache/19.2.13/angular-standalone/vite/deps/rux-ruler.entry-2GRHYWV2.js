import {
  dateRange
} from "./chunk-L6JKGC3J.js";
import "./chunk-POVT32XF.js";
import "./chunk-KM3PTPTG.js";
import "./chunk-HZJEJK75.js";
import "./chunk-LENAR7IN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-ruler.entry.js
var ruxRulerCss = ":host{display:contents}.rux-track{display:contents}.ruler-time{display:flex;align-items:center;padding:12px 20px}.ruler-new-day-cell{background-color:var(--color-background-base-default, #101923);font-size:var(--font-size-sm, 0.875rem);display:block;text-align:center;padding:5px}.ruler-new-day-display{display:block;font-size:var(--font-size-sm, 0.875rem)}";
var RuxRuler = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.timePattern = /^00:.+$/;
    this.interval = "";
    this.start = "";
    this.end = "";
    this.timezone = "UTC";
    this.showStartOfDay = false;
  }
  get dateRange() {
    return dateRange(new Date(this.start), new Date(this.end), this.interval, 1, this.timezone);
  }
  getColumn(index) {
    let unitOfTime = 60;
    if (this.interval === "day") {
      unitOfTime = 24;
    }
    const start = unitOfTime * index + 2;
    const end = start + unitOfTime;
    return `${unitOfTime * index + 2} / ${end}`;
  }
  shouldShowDate(time) {
    if (this.interval !== "hour") {
      return false;
    }
    if (!this.showStartOfDay) {
      return false;
    }
    return this.timePattern.test(time);
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-ruler rux-track"
    }, this.dateRange.map(([time, newDayDate], index) => {
      const newDay = this.timePattern.test(time) ? newDayDate : "";
      return h("span", {
        key: index,
        class: {
          "ruler-time": true,
          "ruler-new-day-cell": this.shouldShowDate(time)
        },
        style: {
          gridRow: "1",
          gridColumn: this.getColumn(index)
        }
      }, time, this.shouldShowDate(time) ? h("span", {
        class: "ruler-new-day-display"
      }, newDay) : "");
    })));
  }
  get el() {
    return getElement(this);
  }
};
RuxRuler.style = ruxRulerCss;
export {
  RuxRuler as rux_ruler
};
//# sourceMappingURL=rux-ruler.entry-2GRHYWV2.js.map
