import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-crop-16-9.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 6H19C20.1 6 21 6.9 21 8V16C21 17.1 20.1 18 19 18H5C3.9 18 3 17.1 3 16V8C3 6.9 3.9 6 5 6ZM6 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H6C5.45 8 5 8.45 5 9V15C5 15.55 5.45 16 6 16Z" fill="currentColor"/></svg>';
var RuxIconCrop169 = class {
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
  RuxIconCrop169 as rux_icon_crop_16_9
};
//# sourceMappingURL=rux-icon-crop-16-9.entry-LNAAS5PK.js.map
