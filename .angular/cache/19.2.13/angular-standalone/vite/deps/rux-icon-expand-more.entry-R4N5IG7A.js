import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-expand-more.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.88 9.29006L12 13.1701L8.11998 9.29006C7.72998 8.90006 7.09998 8.90006 6.70998 9.29006C6.31998 9.68006 6.31998 10.3101 6.70998 10.7001L11.3 15.2901C11.69 15.6801 12.32 15.6801 12.71 15.2901L17.3 10.7001C17.69 10.3101 17.69 9.68006 17.3 9.29006C16.91 8.91006 16.27 8.90006 15.88 9.29006Z" fill="currentColor"/></svg>';
var RuxIconExpandMore = class {
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
  RuxIconExpandMore as rux_icon_expand_more
};
//# sourceMappingURL=rux-icon-expand-more.entry-R4N5IG7A.js.map
