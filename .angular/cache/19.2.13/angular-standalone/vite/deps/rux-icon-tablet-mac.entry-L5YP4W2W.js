import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-tablet-mac.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 0H5.5C4.12 0 3 1.12 3 2.5V21.5C3 22.88 4.12 24 5.5 24H19.5C20.88 24 22 22.88 22 21.5V2.5C22 1.12 20.88 0 19.5 0ZM12.5 23C11.67 23 11 22.33 11 21.5C11 20.67 11.67 20 12.5 20C13.33 20 14 20.67 14 21.5C14 22.33 13.33 23 12.5 23ZM5 19H20V3H5V19Z" fill="currentColor"/></svg>';
var RuxIconTabletMac = class {
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
  RuxIconTabletMac as rux_icon_tablet_mac
};
//# sourceMappingURL=rux-icon-tablet-mac.entry-L5YP4W2W.js.map
