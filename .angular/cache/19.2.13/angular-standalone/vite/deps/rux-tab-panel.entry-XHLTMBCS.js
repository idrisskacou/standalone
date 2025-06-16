import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-tab-panel.entry.js
var ruxTabPanelCss = ":host{display:block;position:relative;visibility:visible;z-index:1;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left}:host([hidden]){display:none}:host(.hidden){display:none;position:absolute;visibility:hidden;z-index:-1}";
var RuxTabPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  connectedCallback() {
    this.el.setAttribute("role", "tabpanel");
  }
  render() {
    return h(Host, null, h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
RuxTabPanel.style = ruxTabPanelCss;
export {
  RuxTabPanel as rux_tab_panel
};
//# sourceMappingURL=rux-tab-panel.entry-XHLTMBCS.js.map
