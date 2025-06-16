import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-swap-vertical-circle.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.5 9L9.65 5.85C9.85 5.65 10.16 5.65 10.36 5.85L13.5 9H11V13H9V9H6.5ZM13.64 18.15C13.84 18.35 14.15 18.35 14.35 18.15L17.5 15H15V11H13V15H10.5L13.64 18.15Z" fill="currentColor"/></svg>';
var RuxIconSwapVerticalCircle = class {
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
  RuxIconSwapVerticalCircle as rux_icon_swap_vertical_circle
};
//# sourceMappingURL=rux-icon-swap-vertical-circle.entry-MAYCNNUS.js.map
