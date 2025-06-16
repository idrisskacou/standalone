import {
  Host,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-icon.entry.js
var ruxIconCss = ":host{display:inline-flex;color:var(--color-background-interactive-default, #4dacff)}:host([hidden]){display:none}svg,svg>svg{height:100%;width:auto}.icon{display:inline-flex}";
var RuxIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.svg = "";
    this.size = "normal";
    this.icon = void 0;
  }
  render() {
    const SVG = `rux-icon-${this.icon}`;
    return h(Host, null, h(SVG, {
      class: "icon",
      part: "icon",
      size: this.size
    }));
  }
};
RuxIcon.style = ruxIconCss;
export {
  RuxIcon as rux_icon
};
//# sourceMappingURL=rux-icon.entry-7HYELQ2M.js.map
