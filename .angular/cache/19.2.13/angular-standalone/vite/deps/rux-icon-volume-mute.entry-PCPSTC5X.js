import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-volume-mute.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 10V14C8 14.55 8.45 15 9 15H12L15.29 18.29C15.92 18.92 17 18.47 17 17.58V6.41002C17 5.52002 15.92 5.07002 15.29 5.70002L12 9.00002H9C8.45 9.00002 8 9.45002 8 10Z" fill="currentColor"/></svg>';
var RuxIconVolumeMute = class {
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
  RuxIconVolumeMute as rux_icon_volume_mute
};
//# sourceMappingURL=rux-icon-volume-mute.entry-PCPSTC5X.js.map
