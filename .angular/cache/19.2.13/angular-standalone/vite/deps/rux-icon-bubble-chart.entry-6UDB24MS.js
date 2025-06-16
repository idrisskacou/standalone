import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon-bubble-chart.entry.js
var svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 8.8C10.4 11.451 12.549 13.6 15.2 13.6C17.851 13.6 20 11.451 20 8.8C20 6.14903 17.851 4 15.2 4C12.549 4 10.4 6.14903 10.4 8.8ZM7.2 17.6C5.43269 17.6 4 16.1673 4 14.4C4 12.6327 5.43269 11.2 7.2 11.2C8.96731 11.2 10.4 12.6327 10.4 14.4C10.4 16.1673 8.96731 17.6 7.2 17.6ZM14.8 20C13.6954 20 12.8 19.1046 12.8 18C12.8 16.8954 13.6954 16 14.8 16C15.9046 16 16.8 16.8954 16.8 18C16.8 19.1046 15.9046 20 14.8 20Z" fill="currentColor"/></svg>';
var RuxIconBubbleChart = class {
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
  RuxIconBubbleChart as rux_icon_bubble_chart
};
//# sourceMappingURL=rux-icon-bubble-chart.entry-6UDB24MS.js.map
