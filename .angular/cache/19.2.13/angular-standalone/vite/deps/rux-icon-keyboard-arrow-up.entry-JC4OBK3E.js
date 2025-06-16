import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-keyboard-arrow-up.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.11997 14.71L12 10.83L15.88 14.71C16.27 15.1 16.9 15.1 17.29 14.71C17.68 14.32 17.68 13.69 17.29 13.3L12.7 8.70998C12.31 8.31998 11.68 8.31998 11.29 8.70998L6.69997 13.3C6.30997 13.69 6.30997 14.32 6.69997 14.71C7.08997 15.09 7.72997 15.1 8.11997 14.71Z" fill="currentColor"/></svg>';
var RuxIconKeyboardArrowUp = class {
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
  RuxIconKeyboardArrowUp as rux_icon_keyboard_arrow_up
};
//# sourceMappingURL=rux-icon-keyboard-arrow-up.entry-JC4OBK3E.js.map
