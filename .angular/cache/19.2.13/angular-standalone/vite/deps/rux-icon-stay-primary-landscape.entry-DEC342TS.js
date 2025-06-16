import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-stay-primary-landscape.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 17L1.01 7C1.01 5.9 1.9 5 3 5H21C22.1 5 23 5.9 23 7V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17ZM19 17V7H5V17H19Z" fill="currentColor"/></svg>';
var RuxIconStayPrimaryLandscape = class {
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
  RuxIconStayPrimaryLandscape as rux_icon_stay_primary_landscape
};
//# sourceMappingURL=rux-icon-stay-primary-landscape.entry-DEC342TS.js.map
