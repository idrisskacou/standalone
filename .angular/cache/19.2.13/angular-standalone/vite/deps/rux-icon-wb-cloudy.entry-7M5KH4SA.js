import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-wb-cloudy.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5952 10.04C17.9328 6.59 15.024 4 11.5296 4C8.75518 4 6.34558 5.64 5.14558 8.04C2.25598 8.36 0.00958252 10.91 0.00958252 14C0.00958252 17.31 2.59198 20 5.76958 20H18.2496C20.8992 20 23.0496 17.76 23.0496 15C23.0496 12.36 21.0816 10.22 18.5952 10.04Z" fill="currentColor"/></svg>';
var RuxIconWbCloudy = class {
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
  RuxIconWbCloudy as rux_icon_wb_cloudy
};
//# sourceMappingURL=rux-icon-wb-cloudy.entry-7M5KH4SA.js.map
