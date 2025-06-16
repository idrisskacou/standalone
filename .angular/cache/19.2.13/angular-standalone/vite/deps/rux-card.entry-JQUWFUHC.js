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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-card.entry.js
var ruxCardCss = ":host{--card-header-padding:var(--spacing-2, 0.5rem);--card-footer-padding:var(--spacing-2, 0.5rem);--body-padding:var(--card-footer-padding, 0.5rem);display:block}.hidden,:host([hidden]){display:none}.rux-card{border:1px solid var(--card-color-border, #51555b);border-radius:var(--radius-base, 3px);background:var(--color-background-base-default, #101923);box-shadow:var(--shadow-overlay,  0px 4px 4px 1px rgba(0, 0, 0, 0.45))}.rux-card__header{padding:var(--card-header-padding);font-family:var(--font-heading-3-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-3-font-size, 1.25rem);font-weight:var(--font-heading-3-font-weight, 500);letter-spacing:var(--font-heading-3-letter-spacing, 0.0015em);line-height:var(--font-heading-3-line-height, calc(24 / 20));box-sizing:border-box;text-align:left}.rux-card__body{padding:var(--body-padding);box-sizing:border-box;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);line-height:var(--font-body-1-line-height, calc(24 / 16));letter-spacing:var(--font-body-1-letter-spacing, 0.005em);text-align:left}.rux-card__footer{padding-left:var(--card-footer-padding, 0.5rem);padding-right:var(--card-footer-padding, 0.5rem);padding-top:var(--card-footer-padding, 0.5rem);padding-bottom:var(--card-footer-padding, 0.5rem);box-sizing:border-box;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);line-height:var(--font-body-1-line-height, calc(24 / 16));letter-spacing:var(--font-body-1-letter-spacing, 0.005em);text-align:left}";
var RuxCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeSlots = {
      header: false,
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
      class: "rux-card",
      part: "container"
    }, h("div", {
      class: {
        "rux-card__header": true,
        hidden: !this.activeSlots.header
      },
      part: "header"
    }, h("slot", {
      name: "header",
      onSlotchange: () => this._handleSlotChange("header")
    })), h("div", {
      class: "rux-card__body",
      part: "body"
    }, h("slot", null)), h("div", {
      class: {
        "rux-card__footer": true,
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
RuxCard.style = ruxCardCss;
export {
  RuxCard as rux_card
};
//# sourceMappingURL=rux-card.entry-JQUWFUHC.js.map
