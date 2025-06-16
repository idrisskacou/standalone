import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-option.entry.js
var ruxOptionCss = ":host{display:block}";
var RuxOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.optionChanged = createEvent(this, "rux-option-changed", 7);
    this.value = void 0;
    this.label = void 0;
    this.disabled = false;
  }
  handleValueChange() {
    this.optionChanged.emit();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.optionChanged.emit();
  }
  render() {
    return h(Host, {
      class: "rux-option",
      disabled: this.disabled
    }, this.label ? this.label : "");
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["handleValueChange"],
      "label": ["handleValueChange"],
      "disabled": ["handleValueChange"]
    };
  }
};
RuxOption.style = ruxOptionCss;
export {
  RuxOption as rux_option
};
//# sourceMappingURL=rux-option.entry-HMRFC5G6.js.map
