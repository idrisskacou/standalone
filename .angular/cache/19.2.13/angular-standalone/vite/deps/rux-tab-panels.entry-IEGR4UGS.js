import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-tab-panels.entry.js
var ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";
var RuxTabPanels = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxRegisterPanels = createEvent(this, "ruxregisterpanels", 7);
  }
  connectedCallback() {
    this.el.setAttribute("style", "position: relative; width: 100%;");
    this._getSlottedChildren = this._getSlottedChildren.bind(this);
  }
  _getSlottedChildren() {
    var _a, _b;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("slot");
    if (slot) {
      const childNodes = slot.assignedNodes({
        flatten: true
      });
      const children = Array.prototype.filter.call(childNodes, (node) => node.nodeType == Node.ELEMENT_NODE);
      this._registerTabPanels(children);
      return children;
    } else {
      return [];
    }
  }
  _registerTabPanels(children) {
    this.ruxRegisterPanels.emit(children);
  }
  render() {
    return h(Host, null, h("slot", {
      onSlotchange: this._getSlottedChildren
    }));
  }
  get el() {
    return getElement(this);
  }
};
RuxTabPanels.style = ruxTabPanelCss;
export {
  RuxTabPanels as rux_tab_panels
};
//# sourceMappingURL=rux-tab-panels.entry-IEGR4UGS.js.map
