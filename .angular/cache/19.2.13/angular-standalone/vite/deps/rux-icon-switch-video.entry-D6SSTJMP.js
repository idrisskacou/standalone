import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-switch-video.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 6V9.5L20.29 7.2C20.92 6.57 22 7.02 22 7.91V16.08C22 16.97 20.92 17.42 20.29 16.79L18 14.5V18C18 18.55 17.55 19 17 19H3C2.45 19 2 18.55 2 18V6C2 5.45 2.45 5 3 5H17C17.55 5 18 5.45 18 6ZM13 13V15.5L16.15 12.36C16.35 12.16 16.35 11.85 16.15 11.65L13 8.5V11H7V8.5L3.85 11.64C3.65 11.84 3.65 12.15 3.85 12.35L7 15.5V13H13Z" fill="currentColor"/></svg>';
var RuxIconSwitchVideo = class {
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
  RuxIconSwitchVideo as rux_icon_switch_video
};
//# sourceMappingURL=rux-icon-switch-video.entry-D6SSTJMP.js.map
