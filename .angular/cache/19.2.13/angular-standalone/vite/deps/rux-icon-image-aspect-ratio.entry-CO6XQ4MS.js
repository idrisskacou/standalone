import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-image-aspect-ratio.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM8 10H6V12H8V10ZM14 10H16V12H14V10ZM14 14H16V16H14V14ZM10 10H12V12H10V10ZM5 18H19C19.55 18 20 17.55 20 17V7C20 6.45 19.55 6 19 6H5C4.45 6 4 6.45 4 7V17C4 17.55 4.45 18 5 18Z" fill="currentColor"/></svg>';
var RuxIconImageAspectRatio = class {
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
  RuxIconImageAspectRatio as rux_icon_image_aspect_ratio
};
//# sourceMappingURL=rux-icon-image-aspect-ratio.entry-CO6XQ4MS.js.map
