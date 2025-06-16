import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-plus-one.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.58 7.68002C15.02 7.79002 14.5 7.36002 14.5 6.79002C14.5 6.38002 14.79 6.01002 15.2 5.92002L17.77 5.30002C18.4 5.15002 19 5.62002 19 6.27002V17C19 17.55 18.55 18 18 18C17.45 18 17 17.55 17 17V7.40002L15.58 7.68002ZM8 9.00002C8 8.45002 8.45 8.00002 9 8.00002C9.55 8.00002 10 8.45002 10 9.00002V12H13C13.55 12 14 12.45 14 13C14 13.55 13.55 14 13 14H10V17C10 17.55 9.55 18 9 18C8.45 18 8 17.55 8 17V14H5C4.45 14 4 13.55 4 13C4 12.45 4.45 12 5 12H8V9.00002Z" fill="currentColor"/></svg>';
var RuxIconPlusOne = class {
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
  RuxIconPlusOne as rux_icon_plus_one
};
//# sourceMappingURL=rux-icon-plus-one.entry-3H5BBWWX.js.map
