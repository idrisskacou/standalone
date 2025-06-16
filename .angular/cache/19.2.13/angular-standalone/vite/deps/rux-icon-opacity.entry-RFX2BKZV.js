import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-opacity.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.71 3.06002L17.66 8.00002C19.22 9.56002 20 11.64 20 13.64C20 15.64 19.22 17.75 17.66 19.31C16.1 20.87 14.05 21.66 12 21.66C9.95 21.66 7.9 20.87 6.34 19.31C4.78 17.75 4 15.64 4 13.64C4 11.64 4.78 9.56002 6.34 8.00002L11.3 3.06002C11.69 2.67002 12.32 2.67002 12.71 3.06002ZM7.76 9.60002C6.62 10.73 6.01 12 6 14H18C17.99 12 17.38 10.77 16.24 9.65002L12 5.27002L7.76 9.60002Z" fill="currentColor"/></svg>';
var RuxIconOpacity = class {
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
  RuxIconOpacity as rux_icon_opacity
};
//# sourceMappingURL=rux-icon-opacity.entry-RFX2BKZV.js.map
