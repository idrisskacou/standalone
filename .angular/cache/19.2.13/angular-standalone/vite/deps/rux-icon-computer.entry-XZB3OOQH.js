import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-computer.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.99 16C21.99 17.1 21.1 18 20 18H23C23.55 18 24 18.45 24 19C24 19.55 23.55 20 23 20H1C0.45 20 0 19.55 0 19C0 18.45 0.45 18 1 18H4C2.9 18 2 17.1 2 16V6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6L21.99 16ZM19 6H5C4.45 6 4 6.45 4 7V15C4 15.55 4.45 16 5 16H19C19.55 16 20 15.55 20 15V7C20 6.45 19.55 6 19 6Z" fill="currentColor"/></svg>';
var RuxIconComputer = class {
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
  RuxIconComputer as rux_icon_computer
};
//# sourceMappingURL=rux-icon-computer.entry-XZB3OOQH.js.map
