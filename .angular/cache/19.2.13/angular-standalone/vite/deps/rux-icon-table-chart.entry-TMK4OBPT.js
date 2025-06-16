import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-table-chart.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3H5C3.9 3 3 3.9 3 5V8H22V5C22 3.9 21.1 3 20 3ZM20 21H17V10H22V19C22 20.1 21.1 21 20 21ZM15 10.02H10V21H15V10.02ZM5 21C3.9 21 3 20.1 3 19V10H8V21H5Z" fill="currentColor"/></svg>';
var RuxIconTableChart = class {
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
  RuxIconTableChart as rux_icon_table_chart
};
//# sourceMappingURL=rux-icon-table-chart.entry-TMK4OBPT.js.map
