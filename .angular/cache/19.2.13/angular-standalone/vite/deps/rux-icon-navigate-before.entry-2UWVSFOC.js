import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-navigate-before.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.91 6.70998C14.52 6.31998 13.89 6.31998 13.5 6.70998L8.90999 11.3C8.51999 11.69 8.51999 12.32 8.90999 12.71L13.5 17.3C13.89 17.69 14.52 17.69 14.91 17.3C15.3 16.91 15.3 16.28 14.91 15.89L11.03 12L14.91 8.11998C15.29 7.72998 15.29 7.08998 14.91 6.70998Z" fill="currentColor"/></svg>';
var RuxIconNavigateBefore = class {
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
  RuxIconNavigateBefore as rux_icon_navigate_before
};
//# sourceMappingURL=rux-icon-navigate-before.entry-2UWVSFOC.js.map
