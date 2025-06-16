import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-view-agenda.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H20C20.55 3 21 3.45 21 4V10C21 10.55 20.55 11 20 11H3C2.45 11 2 10.55 2 10V4C2 3.45 2.45 3 3 3ZM3 13H20C20.55 13 21 13.45 21 14V20C21 20.55 20.55 21 20 21H3C2.45 21 2 20.55 2 20V14C2 13.45 2.45 13 3 13Z" fill="currentColor"/></svg>';
var RuxIconViewAgenda = class {
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
  RuxIconViewAgenda as rux_icon_view_agenda
};
//# sourceMappingURL=rux-icon-view-agenda.entry-FVAW5DUF.js.map
