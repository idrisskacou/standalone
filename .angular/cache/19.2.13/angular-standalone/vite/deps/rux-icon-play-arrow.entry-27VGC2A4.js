import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-play-arrow.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 6.82001V17.18C7 17.97 7.87 18.45 8.54 18.02L16.68 12.84C17.3 12.45 17.3 11.55 16.68 11.15L8.54 5.98001C7.87 5.55001 7 6.03001 7 6.82001Z" fill="currentColor"/></svg>';
var RuxIconPlayArrow = class {
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
  RuxIconPlayArrow as rux_icon_play_arrow
};
//# sourceMappingURL=rux-icon-play-arrow.entry-27VGC2A4.js.map
