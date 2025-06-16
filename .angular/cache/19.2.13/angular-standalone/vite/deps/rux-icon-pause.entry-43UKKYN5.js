import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-pause.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17C10 18.1 9.1 19 8 19C6.9 19 6 18.1 6 17V7C6 5.9 6.9 5 8 5C9.1 5 10 5.9 10 7V17ZM14 17V7C14 5.9 14.9 5 16 5C17.1 5 18 5.9 18 7V17C18 18.1 17.1 19 16 19C14.9 19 14 18.1 14 17Z" fill="currentColor"/></svg>';
var RuxIconPause = class {
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
  RuxIconPause as rux_icon_pause
};
//# sourceMappingURL=rux-icon-pause.entry-43UKKYN5.js.map
