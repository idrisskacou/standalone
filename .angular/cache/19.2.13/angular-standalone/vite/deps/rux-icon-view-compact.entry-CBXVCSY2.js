import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-view-compact.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 11V7C3 5.9 3.9 5 5 5H20C21.1 5 22 5.9 22 7V11H3ZM5 19H9V12H3V17C3 18.1 3.9 19 5 19ZM10 19H20C21.1 19 22 18.1 22 17V12H10V19Z" fill="currentColor"/></svg>';
var RuxIconViewCompact = class {
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
  RuxIconViewCompact as rux_icon_view_compact
};
//# sourceMappingURL=rux-icon-view-compact.entry-CBXVCSY2.js.map
