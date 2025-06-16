import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-clear-all.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H20C20.55 7 21 7.45 21 8C21 8.55 20.55 9 20 9H8ZM6 13H18C18.55 13 19 12.55 19 12C19 11.45 18.55 11 18 11H6C5.45 11 5 11.45 5 12C5 12.55 5.45 13 6 13ZM4 17H16C16.55 17 17 16.55 17 16C17 15.45 16.55 15 16 15H4C3.45 15 3 15.45 3 16C3 16.55 3.45 17 4 17Z" fill="currentColor"/></svg>';
var RuxIconClearAll = class {
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
  RuxIconClearAll as rux_icon_clear_all
};
//# sourceMappingURL=rux-icon-clear-all.entry-VLQFS2FB.js.map
