import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-cloud-circle.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM8 16H16.5C17.88 16 19 14.88 19 13.5C19 12.12 17.88 11 16.5 11H16C16 8.79 14.21 7 12 7C10.13 7 8.58 8.27 8.14 10H8C6.34 10 5 11.34 5 13C5 14.66 6.34 16 8 16Z" fill="currentColor"/></svg>';
var RuxIconCloudCircle = class {
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
  RuxIconCloudCircle as rux_icon_cloud_circle
};
//# sourceMappingURL=rux-icon-cloud-circle.entry-4TE7NRMD.js.map
