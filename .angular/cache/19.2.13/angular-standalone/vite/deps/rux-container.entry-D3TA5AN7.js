import {
  hasSlot
} from "./chunk-JU3STBHB.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-container.entry.js
var ruxContainerCss = ":host{--container-header-padding:var(--spacing-4, 1rem);--container-footer-padding:var(--spacing-4, 1rem);--container-header-background-color:var(--color-background-surface-header, #172635);--body-padding:var(--spacing-4, 1rem);display:block}*{scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}*::-webkit-scrollbar{width:var(--spacing-4, 1rem);height:var(--spacing-4, 1rem);background-color:transparent}*::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}*::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg, 4px)}*::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg, 4px)}*::-webkit-scrollbar-thumb:active,*::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}*::-webkit-scrollbar-track,*::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}*::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}*::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}.hidden,:host([hidden]){display:none}.rux-container{background:var(--color-background-surface-default, #1b2d3e);border:1px solid var(--container-color-border, #000000)}.rux-container__header{padding:var(--container-header-padding);background:var(--color-background-surface-header, #172635);font-family:var(--font-heading-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-2-font-size, 1.5rem);font-weight:var(--font-heading-2-font-weight, 400);letter-spacing:var(--font-heading-2-letter-spacing, 0em);line-height:var(--font-heading-2-line-height, calc(28 / 24));text-align:left}.rux-container__tab-bar{background:var(--color-background-surface-header, #172635);padding:0 var(--spacing-4, 1rem) calc(var(--spacing-1, 0.25rem) + 2px) var(--spacing-4, 1rem)}.rux-container__toolbar{background:var(--color-background-surface-header, #172635);padding:var(--container-header-padding)}.rux-container__body{padding:var(--body-padding);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);line-height:var(--font-body-1-line-height, calc(24 / 16));letter-spacing:var(--font-body-1-letter-spacing, 0.005em);text-align:left}.rux-container__footer{background:var(--color-background-surface-default, #1b2d3e);padding:var(--container-footer-padding);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);line-height:var(--font-body-1-line-height, calc(24 / 16));letter-spacing:var(--font-body-1-letter-spacing, 0.005em);text-align:left}";
var RuxContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeSlots = {
      header: false,
      "tab-bar": false,
      toolbar: false,
      footer: false
    };
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange(slotName) {
    const show = hasSlot(this.el, slotName);
    this.activeSlots = Object.assign(Object.assign({}, this.activeSlots), {
      [slotName]: show
    });
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-container",
      part: "container"
    }, h("div", {
      class: {
        "rux-container__header": true,
        hidden: !this.activeSlots.header
      },
      part: "header"
    }, h("slot", {
      name: "header",
      onSlotchange: () => this._handleSlotChange("header")
    })), h("div", {
      class: {
        "rux-container__tab-bar": true,
        hidden: !this.activeSlots["tab-bar"]
      },
      part: "tab-bar"
    }, h("slot", {
      name: "tab-bar",
      onSlotchange: () => this._handleSlotChange("tab-bar")
    })), h("div", {
      class: {
        "rux-container__toolbar": true,
        hidden: !this.activeSlots.toolbar
      },
      part: "toolbar"
    }, h("slot", {
      name: "toolbar",
      onSlotchange: () => this._handleSlotChange("toolbar")
    })), h("div", {
      class: "rux-container__body",
      part: "body"
    }, h("slot", null)), h("div", {
      class: {
        "rux-container__footer": true,
        hidden: !this.activeSlots.footer
      },
      part: "footer"
    }, h("slot", {
      name: "footer",
      onSlotchange: () => this._handleSlotChange("footer")
    }))));
  }
  get el() {
    return getElement(this);
  }
};
RuxContainer.style = ruxContainerCss;
export {
  RuxContainer as rux_container
};
//# sourceMappingURL=rux-container.entry-D3TA5AN7.js.map
