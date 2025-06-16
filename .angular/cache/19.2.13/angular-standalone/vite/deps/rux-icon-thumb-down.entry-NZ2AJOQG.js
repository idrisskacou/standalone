import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-thumb-down.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.41 16.4L10.88 21.94C10.3 22.53 9.36002 22.53 8.77002 21.95C8.41002 21.59 8.26002 21.08 8.36002 20.58L9.31002 16H3.66002C1.51002 16 0.0600216 13.8 0.910022 11.82L4.17002 4.21C4.48002 3.48 5.20002 3 6.00002 3H14.99C16.09 3 16.99 3.9 16.99 5V14.99C16.99 15.52 16.78 16.03 16.41 16.4ZM19 5C19 3.9 19.9 3 21 3C22.1 3 23 3.9 23 5V13C23 14.1 22.1 15 21 15C19.9 15 19 14.1 19 13V5Z" fill="currentColor"/></svg>';
var RuxIconThumbDown = class {
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
  RuxIconThumbDown as rux_icon_thumb_down
};
//# sourceMappingURL=rux-icon-thumb-down.entry-NZ2AJOQG.js.map
