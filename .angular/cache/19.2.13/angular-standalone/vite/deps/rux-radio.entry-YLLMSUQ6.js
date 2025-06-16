import {
  hasSlot
} from "./chunk-JU3STBHB.js";
import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-radio.entry.js
var ruxRadioCss = `:host{display:inline-block;box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:inherit}.rux-form-field{display:flex;flex-direction:column;font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);font-weight:var(--font-control-body-1-font-weight, 400);color:var(--color-text-primary, #ffffff)}.rux-radio{display:flex;position:relative;line-height:1.2}.rux-radio input[type=radio]{-webkit-appearance:none;appearance:none;margin:0}.rux-radio input[type=radio]+label{position:relative;display:flex;align-items:center;justify-content:flex-start;color:var(--color-text-primary, #ffffff);cursor:pointer}.rux-radio input[type=radio]+label::before{box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;content:"";align-self:start;height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));margin:calc(var(--spacing-1, 0.25rem) / 2);margin-right:calc( var(--spacing-2, 0.5rem) + (var(--spacing-1, 0.25rem) / 2) );border:1px solid var(--color-border-interactive-muted, #2b659b);border-radius:var(--radius-circle, 50%);background-color:var(--color-background-base-default, #101923)}.rux-radio input[type=radio]+label::after{position:absolute;top:5px;display:flex;content:""}.rux-radio input[type=radio]+.rux-radio--no-label::before{margin-right:calc(var(--spacing-1, 0.25rem) / 2)}.rux-radio input[type=radio]:checked+label::before{background-color:var(--color-background-base-default, #101923);border-color:var(--color-border-interactive-muted, #2b659b)}.rux-radio input[type=radio]:checked+label::after{position:absolute;top:var(--spacing-2, 0.5rem);display:flex;content:"";left:var(--spacing-2, 0.5rem);height:var(--spacing-2, 0.5rem);width:var(--spacing-2, 0.5rem);border-radius:var(--radius-circle, 50%);background-color:var(--color-background-interactive-default, #4dacff)}.rux-radio input[type=radio]:disabled+label{cursor:not-allowed;opacity:var(--opacity-disabled, 40%)}.rux-radio input[type=radio]:not(:disabled):hover+label::before,.rux-radio input[type=radio]:not(:disabled):checked:hover+label::before{border-color:var(--color-background-interactive-hover, #92cbff)}.rux-radio input[type=radio]:not(:disabled):hover+label::after,.rux-radio input[type=radio]:not(:disabled):checked:hover+label::after{background-color:var(--color-background-interactive-default, #4dacff)}.rux-radio input[type=radio]:not(:disabled):focus-visible+label,.rux-radio input[type=radio]:not(:disabled):checked:focus-visible+label{border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}:host([hidden]){display:none}`;
var id = 0;
var RuxRadio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.radioId = `rux-radio-${++id}`;
    this.radioGroup = null;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.hasLabelSlot = false;
    this.buttonTabindex = -1;
    this.name = "";
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.label = void 0;
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  /** @internal */
  setFocus(ev) {
    return __async(this, null, function* () {
      var _a;
      ev.stopPropagation();
      ev.preventDefault();
      (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
    });
  }
  /** @internal */
  setButtonTabindex(value) {
    return __async(this, null, function* () {
      this.buttonTabindex = value;
    });
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.radioGroup = this.el.closest("rux-radio-group");
    this._syncFromGroup = this._syncFromGroup.bind(this);
    if (this.radioGroup) {
      this._syncFromGroup();
      this.radioGroup.addEventListener("ruxchange", this._syncFromGroup);
    }
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  disconnectedCallback() {
    if (this.radioGroup) {
      this.radioGroup.removeEventListener("ruxchange", this._syncFromGroup);
    }
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el);
  }
  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  _syncFromGroup() {
    if (this.radioGroup && this.radioGroup.value) {
      this.checked = this.radioGroup.value === this.value;
    }
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  render() {
    const {
      label,
      radioId,
      checked,
      disabled,
      name,
      value,
      _onChange,
      _onBlur,
      hasLabel,
      buttonTabindex
    } = this;
    return h("div", {
      class: "rux-form-field",
      part: "form-field"
    }, h("div", {
      class: "rux-radio"
    }, h("input", {
      type: "radio",
      name,
      id: radioId,
      disabled,
      checked,
      value,
      tabindex: buttonTabindex,
      onChange: _onChange,
      onBlur: _onBlur,
      ref: (el) => this.inputEl = el
    }), h("label", {
      htmlFor: radioId,
      part: "label",
      class: {
        "rux-radio--no-label": !hasLabel
      }
    }, h("slot", null, label))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "label": ["handleLabelChange"]
    };
  }
};
RuxRadio.style = ruxRadioCss;
export {
  RuxRadio as rux_radio
};
//# sourceMappingURL=rux-radio.entry-YLLMSUQ6.js.map
