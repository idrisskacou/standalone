import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-button-group.entry.js
var ruxButtonGroupCss = ":host{display:inline}:host([hidden]){display:none}.rux-button-group{display:flex}.rux-button-group ::slotted(rux-button:not(:last-child)){margin-right:var(--spacing-2, 0.5rem)}.rux-button-group--left{justify-content:flex-start}.rux-button-group--right{justify-content:flex-end}.rux-button-group--center{justify-content:center}";
var RuxButtonGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hAlign = "left";
  }
  render() {
    const {
      hAlign
    } = this;
    return h("div", {
      class: {
        "rux-button-group": true,
        "rux-button-group--left": hAlign === "left",
        "rux-button-group--right": hAlign === "right",
        "rux-button-group--center": hAlign === "center"
      },
      part: "container"
    }, h("slot", null));
  }
};
RuxButtonGroup.style = ruxButtonGroupCss;
export {
  RuxButtonGroup as rux_button_group
};
//# sourceMappingURL=rux-button-group.entry-IYL6LQ2O.js.map
