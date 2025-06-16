import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-details.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.13 18.45L3.84 5.49C3.46 4.82 3.95 4 4.71 4H19.29C20.05 4 20.54 4.82 20.16 5.49L12.87 18.45C12.49 19.13 11.51 19.13 11.13 18.45ZM17.63 6H6.38L12 16L17.63 6Z" fill="currentColor"/></svg>';
var RuxIconDetails = class {
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
  RuxIconDetails as rux_icon_details
};
//# sourceMappingURL=rux-icon-details.entry-MCYCL6LV.js.map
