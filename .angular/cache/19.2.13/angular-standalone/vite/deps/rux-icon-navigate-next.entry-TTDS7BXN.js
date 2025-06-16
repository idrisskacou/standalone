import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-navigate-next.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.31002 6.70978C8.92002 7.09978 8.92002 7.72978 9.31002 8.11978L13.19 11.9998L9.31002 15.8798C8.92002 16.2698 8.92002 16.8998 9.31002 17.2898C9.70002 17.6798 10.33 17.6798 10.72 17.2898L15.31 12.6998C15.7 12.3098 15.7 11.6798 15.31 11.2898L10.72 6.69978C10.34 6.31978 9.70002 6.31978 9.31002 6.70978Z" fill="currentColor"/></svg>';
var RuxIconNavigateNext = class {
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
  RuxIconNavigateNext as rux_icon_navigate_next
};
//# sourceMappingURL=rux-icon-navigate-next.entry-TTDS7BXN.js.map
