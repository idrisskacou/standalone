import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-photo-size-select-actual.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22 3 23 4 23 5V19C23 20 22 21 21 21H3C1.9 21 1 20.1 1 19V5C1 4 2 3 3 3ZM8.12 12.99L5.63 16.19C5.37 16.52 5.61 17 6.02 17.01H18.01C18.42 17.01 18.66 16.54 18.41 16.21L14.9 11.53C14.7 11.26 14.3 11.26 14.1 11.52L11 15.51L8.9 12.98C8.7 12.73 8.32 12.74 8.12 12.99Z" fill="currentColor"/></svg>';
var RuxIconPhotoSizeSelectActual = class {
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
  RuxIconPhotoSizeSelectActual as rux_icon_photo_size_select_actual
};
//# sourceMappingURL=rux-icon-photo-size-select-actual.entry-4PE4P5ZC.js.map
