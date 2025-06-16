import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-space-bar.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 10V13H6V10C6 9.45 5.55 9 5 9C4.45 9 4 9.45 4 10V14C4 14.55 4.45 15 5 15H19C19.55 15 20 14.55 20 14V10C20 9.45 19.55 9 19 9C18.45 9 18 9.45 18 10Z" fill="currentColor"/></svg>';
var RuxIconSpaceBar = class {
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
  RuxIconSpaceBar as rux_icon_space_bar
};
//# sourceMappingURL=rux-icon-space-bar.entry-DYYBGASP.js.map
