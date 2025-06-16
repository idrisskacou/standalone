import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-breadcrumb-item.entry.js
var ruxBreadcrumbItemCss = ":host{display:flex}::slotted(rux-icon){color:inherit}a{font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);display:inline-flex;gap:var(--spacing-2, 0.5rem);align-items:center;text-decoration:none;white-space:nowrap}a[href]{color:var(--color-text-interactive-default, #4dacff)}a[href]:hover{color:var(--color-text-interactive-hover, #92cbff)}a:not([href]){color:inherit}a:focus-visible{border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}";
var RuxBreadcrumbItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = void 0;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  _handleSlotChange() {
    var _a, _b, _c;
    const slot = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("slot");
    if (slot) {
      const link = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('[part="link"]');
      const fontSize = window.getComputedStyle(link).getPropertyValue("font-size");
      const childEls = slot.assignedNodes({});
      if (childEls.length) {
        childEls.map((el) => {
          if (el.nodeName === "RUX-ICON") el.setAttribute("size", fontSize);
        });
      }
    }
  }
  render() {
    return h(Host, null, h("a", {
      href: this.href,
      part: "link"
    }, h("slot", {
      onSlotchange: this._handleSlotChange
    })));
  }
  get el() {
    return getElement(this);
  }
};
RuxBreadcrumbItem.style = ruxBreadcrumbItemCss;
export {
  RuxBreadcrumbItem as rux_breadcrumb_item
};
//# sourceMappingURL=rux-breadcrumb-item.entry-2LTUCAJG.js.map
