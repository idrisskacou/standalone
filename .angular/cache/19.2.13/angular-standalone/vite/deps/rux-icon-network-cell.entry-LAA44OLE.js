import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-network-cell.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.40999 22H20C21.1 22 22 21.1 22 20V4.41002C22 3.52002 20.92 3.07002 20.29 3.70002L3.70999 20.29C3.07999 20.92 3.51999 22 4.40999 22Z" fill="currentColor"/></svg>';
var RuxIconNetworkCell = class {
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
  RuxIconNetworkCell as rux_icon_network_cell
};
//# sourceMappingURL=rux-icon-network-cell.entry-LAA44OLE.js.map
