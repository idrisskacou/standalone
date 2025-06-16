import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-short-text.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9ZM13 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15H13C13.55 15 14 14.55 14 14C14 13.45 13.55 13 13 13Z" fill="currentColor"/></svg>';
var RuxIconShortText = class {
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
  RuxIconShortText as rux_icon_short_text
};
//# sourceMappingURL=rux-icon-short-text.entry-TSQKRIXX.js.map
