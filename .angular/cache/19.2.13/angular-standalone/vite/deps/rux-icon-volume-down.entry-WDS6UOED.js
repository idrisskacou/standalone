import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-volume-down.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 14V10C5 9.45002 5.45 9.00002 6 9.00002H9L12.29 5.70002C12.92 5.07002 14 5.52002 14 6.41002V17.58C14 18.47 12.92 18.92 12.29 18.29L9 15H6C5.45 15 5 14.55 5 14ZM16 7.97002C17.48 8.71002 18.5 10.23 18.5 12C18.5 13.77 17.48 15.29 16 16.02V7.97002Z" fill="currentColor"/></svg>';
var RuxIconVolumeDown = class {
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
  RuxIconVolumeDown as rux_icon_volume_down
};
//# sourceMappingURL=rux-icon-volume-down.entry-WDS6UOED.js.map
