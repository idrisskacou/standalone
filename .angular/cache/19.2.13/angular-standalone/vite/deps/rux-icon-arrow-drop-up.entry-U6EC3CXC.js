import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-arrow-drop-up.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.70999 12.2902L11.3 9.70021C11.69 9.31021 12.32 9.31021 12.71 9.70021L15.3 12.2902C15.93 12.9202 15.48 14.0002 14.59 14.0002H9.40999C8.51999 14.0002 8.07999 12.9202 8.70999 12.2902Z" fill="currentColor"/></svg>';
var RuxIconArrowDropUp = class {
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
  RuxIconArrowDropUp as rux_icon_arrow_drop_up
};
//# sourceMappingURL=rux-icon-arrow-drop-up.entry-U6EC3CXC.js.map
