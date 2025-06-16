import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-skip-next.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 17V7C16 6.45 16.45 6 17 6C17.55 6 18 6.45 18 7V17C18 17.55 17.55 18 17 18C16.45 18 16 17.55 16 17ZM13.35 12.82L7.58 16.89C6.91 17.35 6 16.88 6 16.07V7.93C6 7.12 6.91 6.65 7.58 7.11L13.35 11.19C13.91 11.58 13.91 12.42 13.35 12.82Z" fill="currentColor"/></svg>';
var RuxIconSkipNext = class {
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
  RuxIconSkipNext as rux_icon_skip_next
};
//# sourceMappingURL=rux-icon-skip-next.entry-QBZUF3CI.js.map
