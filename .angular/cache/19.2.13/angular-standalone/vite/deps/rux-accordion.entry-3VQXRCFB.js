import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-accordion.entry.js
var ruxAccordionCss = ":host{display:block}:host([disabled]){cursor:not-allowed;opacity:var(--opacity-disabled, 40%)}:host([disabled]) ::slotted(*){pointer-events:none}";
var RuxAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
    this.disallowMultiple = false;
  }
  updatedExpanded(event) {
    if (this.disallowMultiple === true) {
      event.preventDefault();
      const items = this.el.querySelectorAll("rux-accordion-item");
      const isExpanded = this.el.hasAttribute("expanded");
      items.forEach((item) => {
        item.removeAttribute("expanded");
      });
      !isExpanded && this.el.setAttribute("expanded", "");
    }
  }
  render() {
    return h(Host, {
      tabindex: this.disabled ? "-1" : null
    }, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
RuxAccordion.style = ruxAccordionCss;
export {
  RuxAccordion as rux_accordion
};
//# sourceMappingURL=rux-accordion.entry-3VQXRCFB.js.map
