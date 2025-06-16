import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-assistant-photo.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.4 6L14.16 4.8C14.07 4.34 13.66 4 13.18 4H6C5.45 4 5 4.45 5 5V20C5 20.55 5.45 21 6 21C6.55 21 7 20.55 7 20V14H12.6L12.84 15.2C12.93 15.67 13.34 16 13.82 16H19C19.55 16 20 15.55 20 15V7C20 6.45 19.55 6 19 6H14.4Z" fill="currentColor"/></svg>';
var RuxIconAssistantPhoto = class {
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
  RuxIconAssistantPhoto as rux_icon_assistant_photo
};
//# sourceMappingURL=rux-icon-assistant-photo.entry-4WE4FJGD.js.map
