import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-option-group.entry.js
var ruxOptionGroupCss = ":host{display:block;background:var(--color-background-base-default, #101923)}";
var RuxOptionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.groupChanged = createEvent(this, "rux-option-group-changed", 7);
    this.label = void 0;
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.groupChanged.emit();
  }
  render() {
    return h(Host, null, h("slot", {
      onSlotchange: this._handleSlotChange
    }));
  }
  get el() {
    return getElement(this);
  }
};
RuxOptionGroup.style = ruxOptionGroupCss;
export {
  RuxOptionGroup as rux_option_group
};
//# sourceMappingURL=rux-option-group.entry-AI3MVDFP.js.map
