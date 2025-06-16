import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-forum.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 4V11C17 12.1 16.1 13 15 13H6L2 17V4C2 2.9 2.9 2 4 2H15C16.1 2 17 2.9 17 4ZM19 6H20C21.1 6 22 6.9 22 8V22L18 18H8C6.9 18 6 17.1 6 16V15H18C18.55 15 19 14.55 19 14V6Z" fill="currentColor"/></svg>';
var RuxIconForum = class {
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
  RuxIconForum as rux_icon_forum
};
//# sourceMappingURL=rux-icon-forum.entry-2YJQK3WI.js.map
