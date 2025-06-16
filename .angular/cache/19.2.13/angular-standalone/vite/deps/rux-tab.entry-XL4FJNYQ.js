import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-tab.entry.js
var ruxTabCss = ":host{display:contents}.rux-tab{box-sizing:border-box;display:flex;align-items:center;justify-content:center;margin:0;min-width:5rem;text-decoration:none;color:var(--color-background-interactive-default, #4dacff);border-bottom:var(--border-width-lg, 4px) solid transparent;cursor:pointer}.rux-tab:hover{color:var(--color-background-interactive-hover, #92cbff)}.rux-tab:focus-visible{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem);border-radius:var(--radius-base, 3px)}:host([hidden]){display:none}:host span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.rux-tab--large{font-family:var(--font-heading-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-2-font-size, 1.5rem);letter-spacing:var(--font-heading-2-letter-spacing, 0em);font-weight:var(--font-heading-2-font-weight, 400);line-height:var(--font-heading-2-line-height, calc(28 / 24));padding:var(--spacing-6, 1.5rem) var(--spacing-3, 0.75rem);height:var(--spacing-20, 5rem)}.rux-tab--small{font-family:var(--font-heading-5-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-5-font-size, 1.125rem);letter-spacing:var(--font-heading-5-letter-spacing, 0em);font-weight:var(--font-heading-5-font-weight, 400);line-height:var(--font-heading-5-line-height, calc(24 / 18));padding:var(--spacing-4, 1rem) var(--spacing-3, 0.75rem);height:calc(var(--spacing-16, 4rem) - var(--spacing-1, 0.25rem));min-width:5rem}.rux-tab--large.rux-tab--selected{border-color:var(--color-border-interactive-default, #4dacff)}.rux-tab--small.rux-tab--selected{border-bottom:var(--border-width-lg, 4px) solid var(--color-border-interactive-default, #4dacff)}.rux-tab--selected{color:var(--color-text-primary, #ffffff)}.rux-tab--disabled{color:var(--color-text-interactive-default, #4dacff);opacity:var(--opacity-disabled, 40%);cursor:not-allowed}.rux-tab--disabled:hover{color:var(--color-text-interactive-default, #4dacff);opacity:var(--opacity-disabled, 40%)}";
var RuxTab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxTabSelected = createEvent(this, "ruxtabselected", 7);
    this.selected = false;
    this.disabled = false;
    this.small = false;
  }
  connectedCallback() {
    var _a, _b;
    if ((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.getAttributeNode("small")) {
      this.el.setAttribute("small", "");
    }
  }
  handleSelected() {
    if (this.selected) this.ruxTabSelected.emit(this.el);
  }
  _clickHandler(e) {
    if (this.disabled) {
      e.stopImmediatePropagation();
    }
  }
  render() {
    return h(Host, {
      onClick: this._clickHandler,
      selected: this.selected
    }, h("div", {
      part: "container",
      class: {
        "rux-tab": true,
        "rux-tab--selected": this.selected,
        "rux-tab--small": this.small,
        "rux-tab--large": !this.small,
        "rux-tab--disabled": this.disabled
      },
      role: "tab",
      tabindex: this.disabled || !this.selected ? "-1" : "0"
    }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["handleSelected"]
    };
  }
};
RuxTab.style = ruxTabCss;
export {
  RuxTab as rux_tab
};
//# sourceMappingURL=rux-tab.entry-XL4FJNYQ.js.map
