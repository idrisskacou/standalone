import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-pages.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V5C3 3.9 3.9 3 5 3H11V8L8.62 7.4C7.88 7.22 7.22 7.88 7.4 8.62L8 11H3ZM3 13H8L7.41 15.39C7.22 16.12 7.89 16.78 8.62 16.6L11 16V21H5C3.9 21 3 20.1 3 19V13ZM15.38 16.6L13 16V21H19C20.1 21 21 20.1 21 19V13H16L16.6 15.38C16.78 16.12 16.12 16.78 15.38 16.6ZM13 3H19C20.1 3 21 3.9 21 5V11H16L16.59 8.61C16.78 7.88 16.11 7.22 15.38 7.4L13 8V3Z" fill="currentColor"/></svg>';
var RuxIconPages = class {
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
  RuxIconPages as rux_icon_pages
};
//# sourceMappingURL=rux-icon-pages.entry-SQRGHRV7.js.map
