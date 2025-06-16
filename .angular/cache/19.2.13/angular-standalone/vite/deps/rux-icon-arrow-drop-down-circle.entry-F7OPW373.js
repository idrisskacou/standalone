import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-arrow-drop-down-circle.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM8.86 11.86L11.65 14.65C11.84 14.84 12.16 14.84 12.36 14.64L15.15 11.85C15.47 11.54 15.25 11 14.8 11H9.21C8.76 11 8.54 11.54 8.86 11.86Z" fill="currentColor"/></svg>';
var RuxIconArrowDropDownCircle = class {
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
  RuxIconArrowDropDownCircle as rux_icon_arrow_drop_down_circle
};
//# sourceMappingURL=rux-icon-arrow-drop-down-circle.entry-F7OPW373.js.map
