import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-check.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.00001 16.1698L5.53001 12.6998C5.14001 12.3098 4.51001 12.3098 4.12001 12.6998C3.73001 13.0898 3.73001 13.7198 4.12001 14.1098L8.30001 18.2898C8.69001 18.6798 9.32001 18.6798 9.71001 18.2898L20.29 7.70982C20.68 7.31982 20.68 6.68982 20.29 6.29982C19.9 5.90982 19.27 5.90982 18.88 6.29982L9.00001 16.1698Z" fill="currentColor"/></svg>';
var RuxIconCheck = class {
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
  RuxIconCheck as rux_icon_check
};
//# sourceMappingURL=rux-icon-check.entry-ZHVJ57PN.js.map
