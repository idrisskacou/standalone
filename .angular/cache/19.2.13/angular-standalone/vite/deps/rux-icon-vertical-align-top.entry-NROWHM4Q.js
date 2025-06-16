import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-vertical-align-top.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C4.45 5 4 4.55 4 4C4 3.45 4.45 3 5 3H19C19.55 3 20 3.45 20 4C20 4.55 19.55 5 19 5H5ZM11 11H9.21C8.76 11 8.54 10.46 8.85 10.15L11.64 7.36C11.84 7.16 12.15 7.16 12.35 7.36L15.14 10.15C15.46 10.46 15.24 11 14.79 11H13V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V11Z" fill="currentColor"/></svg>';
var RuxIconVerticalAlignTop = class {
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
  RuxIconVerticalAlignTop as rux_icon_vertical_align_top
};
//# sourceMappingURL=rux-icon-vertical-align-top.entry-NROWHM4Q.js.map
