import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-settings-cell.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0.01L8 0C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 0.9 17.1 0.01 16 0.01ZM9 24V22H7V24H9ZM11 24H13V22H11V24ZM15 24V22H17V24H15ZM8 16H16V4H8V16Z" fill="currentColor"/></svg>';
var RuxIconSettingsCell = class {
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
  RuxIconSettingsCell as rux_icon_settings_cell
};
//# sourceMappingURL=rux-icon-settings-cell.entry-C37SHPTP.js.map
