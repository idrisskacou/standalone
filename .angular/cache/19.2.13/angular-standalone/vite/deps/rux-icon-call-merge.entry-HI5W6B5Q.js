import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-call-merge.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.99996H8.71C8.26 7.99996 8.04 7.45996 8.35 7.14996L11.64 3.85996C11.84 3.65996 12.15 3.65996 12.35 3.85996L15.64 7.14996C15.96 7.45996 15.74 7.99996 15.29 7.99996H13V14.4L7.7 19.7C7.31 20.09 6.68 20.09 6.29 19.7C5.9 19.31 5.9 18.68 6.29 18.29L11 13.59V7.99996ZM17.7 18.29C18.09 18.68 18.09 19.31 17.7 19.7C17.32 20.09 16.68 20.09 16.29 19.7L13.59 17L15 15.59L17.7 18.29Z" fill="currentColor"/></svg>';
var RuxIconCallMerge = class {
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
  RuxIconCallMerge as rux_icon_call_merge
};
//# sourceMappingURL=rux-icon-call-merge.entry-HI5W6B5Q.js.map
