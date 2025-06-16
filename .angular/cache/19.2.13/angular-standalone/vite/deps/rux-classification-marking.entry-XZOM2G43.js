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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-classification-marking.entry.js
var ruxClassificationMarkingCss = ":host{display:block;font-size:var(--font-body-1-bold-font-size, 1rem);line-height:var(--line-height-base, 1.5rem);text-align:center}:host([tag]){display:inline-block;font-size:var(--font-body-2-bold-font-size, 0.875rem);line-height:var(--line-height-base, 1.5rem);text-align:left}:host([hidden]){display:none}.rux-classification{padding:0 var(--spacing-2, 0.5rem);font-family:var(--font-body-1-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-bold-font-size, 1rem);font-weight:var(--font-body-1-bold-font-weight, 700);letter-spacing:var(--font-body-1-bold-letter-spacing, 0.005em);line-height:var(--font-body-1-bold-line-height, calc(24 / 16));color:var(--color-text-white, #ffffff);background-color:var(--classification-banner-color-background-unclassified, #007a33);text-transform:uppercase}.rux-classification--banner{z-index:1000;display:flex;justify-content:center;align-items:center;min-height:var(--spacing-6, 1.5rem);overflow-wrap:anywhere;color:var(--color-text-white, #ffffff);background-color:var(--classification-banner-color-background-unclassified, #007a33);position:sticky;top:0;left:0;flex-wrap:nowrap;flex-grow:1}.rux-classification--banner__footer{bottom:0;top:inherit;position:sticky}.rux-classification--tag{width:fit-content;display:inline-flex;align-items:center;padding:var(--spacing-1, 0.25rem) var(--spacing-3, 0.75rem);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));border-radius:var(--radius-base, 3px);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em)}:host([classification=top-secret-sci]) .rux-classification{background-color:var(--classification-banner-color-background-topsecretsci, #fce83a);color:var(--color-text-black, #000000)}:host([classification=top-secret]) .rux-classification{background-color:var(--classification-banner-color-background-topsecret, #ff8c00);color:var(--color-text-black, #000000)}:host([classification=secret]) .rux-classification{background-color:var(--classification-banner-color-background-secret, #c8102e)}:host([classification=confidential]) .rux-classification{background-color:var(--classification-banner-color-background-confidential, #0033a0)}:host([classification=cui]) .rux-classification,:host([classification=controlled]) .rux-classification{background-color:var(--classification-banner-color-background-cui, #502b85)}:host([classification=unclassified]) .rux-classification{background-color:var(--classification-banner-color-background-unclassified, #007a33)}";
var RuxClassificationMarking = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.classification = "unclassified";
    this.label = void 0;
    this.tag = false;
    this.isWrapper = hasSlot(this.el);
  }
  _handleSlotChange() {
    this.isWrapper = hasSlot(this.el);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  get type() {
    return this.tag ? "tag" : "banner";
  }
  _getDisplayData() {
    const markings = {
      banner: {
        cui: "cui",
        controlled: "controlled",
        confidential: "confidential",
        secret: "secret",
        "top-secret": "top secret",
        "top-secret-sci": "top secret//sci",
        unclassified: "unclassified"
      },
      tag: {
        cui: "cui",
        controlled: "cui",
        confidential: "c",
        secret: "s",
        "top-secret": "ts",
        "top-secret-sci": "TS//SCI",
        unclassified: "u"
      }
    };
    let text;
    this.type === "tag" ? text = markings[this.type][this.classification] ? markings[this.type][this.classification] : "u" : text = markings[this.type][this.classification] ? markings[this.type][this.classification] : "unclassified";
    return text;
  }
  render() {
    const {
      isWrapper,
      label,
      tag,
      type
    } = this;
    return h(Host, null, h("div", {
      class: {
        "rux-classification": true,
        "rux-classification--tag": type === "tag",
        "rux-classification--banner": type === "banner"
      },
      part: "tag header"
    }, this._getDisplayData(), label), h("slot", null), isWrapper && !tag && h("div", {
      class: {
        "rux-classification": true,
        "rux-classification--banner": type === "banner",
        "rux-classification--banner__footer": isWrapper === true
      },
      part: "footer"
    }, this._getDisplayData(), label));
  }
  get el() {
    return getElement(this);
  }
};
RuxClassificationMarking.style = ruxClassificationMarkingCss;
export {
  RuxClassificationMarking as rux_classification_marking
};
//# sourceMappingURL=rux-classification-marking.entry-XZOM2G43.js.map
