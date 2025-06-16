import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-menu.entry.js
var ruxMenuCss = ":host{display:block}";
var RuxMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxMenuSelected = createEvent(this, "ruxmenuselected", 7);
  }
  connectedCallback() {
    this.el.addEventListener("click", (e) => {
      this._handleSelected(e.target);
    });
  }
  _handleSelected(item) {
    if (item.disabled) return;
    const menuItems = Array.from(this.el.querySelectorAll("rux-menu-item"));
    menuItems.forEach((el) => {
      el.selected = false;
      if (el === item && !el.disabled) {
        item.selected = true;
        this.ruxMenuSelected.emit(item);
      }
    });
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-menu"
    }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
};
RuxMenu.style = ruxMenuCss;
export {
  RuxMenu as rux_menu
};
//# sourceMappingURL=rux-menu.entry-D4CVZM3C.js.map
