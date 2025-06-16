import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-change-history.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.95002 18.47L11.15 5.36C11.54 4.73 12.46 4.73 12.85 5.36L21.05 18.47C21.46 19.14 20.99 20 20.2 20H3.80002C3.02002 20 2.54002 19.14 2.95002 18.47ZM18.39 18L12 7.77L5.61002 18H18.39Z" fill="currentColor"/></svg>';
var RuxIconChangeHistory = class {
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
  RuxIconChangeHistory as rux_icon_change_history
};
//# sourceMappingURL=rux-icon-change-history.entry-S5FXJKBQ.js.map
