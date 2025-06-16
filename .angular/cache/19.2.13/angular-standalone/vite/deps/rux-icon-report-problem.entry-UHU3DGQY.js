import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-report-problem.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.73004 21H21.26C22.03 21 22.51 20.17 22.13 19.5L12.86 3.5C12.47 2.83 11.51 2.83 11.13 3.5L1.86004 19.5C1.48004 20.17 1.96004 21 2.73004 21ZM13 18H11V16H13V18ZM11 13C11 13.55 11.45 14 12 14C12.55 14 13 13.55 13 13V11C13 10.45 12.55 10 12 10C11.45 10 11 10.45 11 11V13Z" fill="currentColor"/></svg>';
var RuxIconReportProblem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "auto";
  }
  get iconSize() {
    const sizes = {
      "extra-small": "1rem",
      small: "2rem",
      normal: "3rem",
      large: "4rem"
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    } else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize
    };
    return h("div", {
      style,
      innerHTML: svgIcon
    });
  }
};
export {
  RuxIconReportProblem as rux_icon_report_problem
};
//# sourceMappingURL=rux-icon-report-problem.entry-UHU3DGQY.js.map
