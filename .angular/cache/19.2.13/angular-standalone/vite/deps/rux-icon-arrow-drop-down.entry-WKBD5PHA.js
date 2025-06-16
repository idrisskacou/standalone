import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-arrow-drop-down.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70999 11.71L11.3 14.3C11.69 14.69 12.32 14.69 12.71 14.3L15.3 11.71C15.93 11.08 15.48 10 14.59 10H9.40999C8.51999 10 8.07999 11.08 8.70999 11.71Z" fill="currentColor"/></svg>';
var RuxIconArrowDropDown = class {
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
  RuxIconArrowDropDown as rux_icon_arrow_drop_down
};
//# sourceMappingURL=rux-icon-arrow-drop-down.entry-WKBD5PHA.js.map
