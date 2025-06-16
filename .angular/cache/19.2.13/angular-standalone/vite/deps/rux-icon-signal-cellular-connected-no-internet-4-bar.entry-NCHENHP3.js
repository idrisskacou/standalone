import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-signal-cellular-connected-no-internet-4-bar.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 22H4.40999C3.51999 22 3.07999 20.92 3.70999 20.29L20.29 3.70002C20.92 3.07002 22 3.52002 22 4.41002V8.00002H21C19.34 8.00002 18 9.34002 18 11V22ZM21 18C21.55 18 22 17.55 22 17V11C22 10.45 21.55 10 21 10C20.45 10 20 10.45 20 11V17C20 17.55 20.45 18 21 18ZM22 22V20H20V22H22Z" fill="currentColor"/></svg>';
var RuxIconSignalCellularConnectedNoInternet4Bar = class {
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
  RuxIconSignalCellularConnectedNoInternet4Bar as rux_icon_signal_cellular_connected_no_internet_4_bar
};
//# sourceMappingURL=rux-icon-signal-cellular-connected-no-internet-4-bar.entry-NCHENHP3.js.map
