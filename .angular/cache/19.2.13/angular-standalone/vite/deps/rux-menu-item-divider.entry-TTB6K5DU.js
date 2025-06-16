import {
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-menu-item-divider.entry.js
var ruxMenuItemDividerCss = ":host{display:block}:host([hidden]){display:none}li{list-style:none;pointer-events:none;border-top:1px solid var(--menu-divider-color-fill, #51555b)}.wrapper{padding:var(--spacing-1, 0.25rem) var(--spacing-2, 0.5rem)}";
var RuxMenuItemDivider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", {
      class: "wrapper"
    }, h("li", {
      role: "separator",
      part: "container"
    }));
  }
};
RuxMenuItemDivider.style = ruxMenuItemDividerCss;
export {
  RuxMenuItemDivider as rux_menu_item_divider
};
//# sourceMappingURL=rux-menu-item-divider.entry-TTB6K5DU.js.map
