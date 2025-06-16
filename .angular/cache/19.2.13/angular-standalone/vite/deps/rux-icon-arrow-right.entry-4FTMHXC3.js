import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-arrow-right.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.71 15.2902L14.3 12.7002C14.69 12.3102 14.69 11.6802 14.3 11.2902L11.71 8.70022C11.08 8.08022 10 8.52022 10 9.41022V14.5802C10 15.4802 11.08 15.9202 11.71 15.2902Z" fill="currentColor"/></svg>';
var RuxIconArrowRight = class {
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
  RuxIconArrowRight as rux_icon_arrow_right
};
//# sourceMappingURL=rux-icon-arrow-right.entry-4FTMHXC3.js.map
