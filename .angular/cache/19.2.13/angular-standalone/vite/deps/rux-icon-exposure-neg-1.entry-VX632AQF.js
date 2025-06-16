import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-exposure-neg-1.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 18H19V5H18.7L14 6.7V8.4L17 7.38V18ZM5 13C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H11C11.55 11 12 11.45 12 12C12 12.55 11.55 13 11 13H5Z" fill="currentColor"/></svg>';
var RuxIconExposureNeg1 = class {
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
  RuxIconExposureNeg1 as rux_icon_exposure_neg_1
};
//# sourceMappingURL=rux-icon-exposure-neg-1.entry-VX632AQF.js.map
