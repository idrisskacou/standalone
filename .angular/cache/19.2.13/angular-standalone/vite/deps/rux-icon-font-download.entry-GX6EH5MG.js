import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-font-download.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM14.07 13.5L12 7.98L9.93 13.5H14.07ZM14.81 15.5L15.71 17.88C15.86 18.25 16.22 18.5 16.62 18.5C17.3 18.5 17.77 17.81 17.52 17.18L13.27 6.37C13.06 5.84 12.56 5.5 12 5.5C11.44 5.5 10.94 5.84 10.72 6.37L6.47 17.18C6.22 17.81 6.69 18.5 7.37 18.5C7.78 18.5 8.14 18.25 8.28 17.87L9.17 15.5H14.81Z" fill="currentColor"/></svg>';
var RuxIconFontDownload = class {
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
  RuxIconFontDownload as rux_icon_font_download
};
//# sourceMappingURL=rux-icon-font-download.entry-GX6EH5MG.js.map
