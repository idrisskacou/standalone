import {
  hasSlot,
  renderHiddenInput
} from "./chunk-JU3STBHB.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-radio-group.entry.js
var ruxRadioGroupCss = ".rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{display:block}.hidden,:host([hidden]){display:none}::slotted(rux-radio){display:block;margin-bottom:var(--spacing-2, 0.5rem)}::slotted(rux-radio:last-of-type){margin-bottom:var(--spacing-0, 0rem)}.rux-radio-group{padding:var(--spacing-4, 1rem);box-shadow:var(--color-border-interactive-muted, #2b659b) 0 0 0 1px inset;border-radius:var(--radius-base, 3px);width:fit-content}.rux-radio-group--invalid{box-shadow:var(--color-border-error, #ff3838) 0 0 0 1px inset}.rux-label{color:var(--color-text-primary, #ffffff);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);line-height:var(--font-control-body-1-line-height, calc(20 / 16));margin-bottom:var(--spacing-2, 0.5rem);text-align:left}.rux-label__asterisk{margin-left:var(--spacing-1, 0.25rem)}";
var RuxRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this._setRadioTabindex = (value) => {
      const radios = this._getRadios();
      const first = radios.find((radio) => !radio.disabled);
      const checked = radios.find((radio) => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.label = void 0;
    this.invalid = false;
    this.required = false;
    this.name = "";
    this.value = void 0;
    this.helpText = void 0;
    this.errorText = void 0;
  }
  emitChange(value) {
    this._setRadioTabindex(value);
    this.ruxChange.emit(this.value);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this._handleClick = this._handleClick.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentDidLoad() {
    this._setRadioTabindex(this.value);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  componentWillLoad() {
    const radios = Array.from(this.el.querySelectorAll("rux-radio"));
    if (radios.length > 1 && !this.value) {
      this.value = radios[0].getAttribute("value");
    }
    this._setRadioValueIfNone();
    this._handleSlotChange();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleClick(e) {
    const selectedRadio = e.target && e.target.closest("rux-radio");
    if (selectedRadio && !selectedRadio.disabled) {
      const oldValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== oldValue) {
        this.value = newValue;
      }
    }
  }
  _selectedRadioIsDisabled() {
    const radio = this.el.querySelector(`rux-radio[value="${this.value}"]`);
    return radio && radio.disabled;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
    this.hasErrorSlot = hasSlot(this.el, "error-text");
    this.hasHelpSlot = hasSlot(this.el, "help-text");
  }
  _getRadios() {
    return Array.from(this.el.querySelectorAll("rux-radio"));
  }
  _setRadioValueIfNone() {
    const radios = this._getRadios();
    radios.forEach((radio, index) => {
      if (!radio.value) radio.value = (index + 1).toString();
    });
  }
  onKeydown(ev) {
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    const radios = this._getRadios().filter((radio) => !radio.disabled);
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);
      let next;
      if (["ArrowDown", "ArrowRight"].includes(ev.code)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      if (["ArrowUp", "ArrowLeft"].includes(ev.code)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        radios.forEach((radio) => {
          radio.checked = false;
        });
        next.setFocus(ev);
        this.value = next.value;
        next.checked = true;
      }
    }
  }
  render() {
    const {
      errorText,
      helpText,
      hasHelpSlot,
      hasErrorSlot,
      _handleSlotChange
    } = this;
    if (this.value) {
      renderHiddenInput(true, this.el, this.name, this.value, this._selectedRadioIsDisabled());
    }
    return h(Host, {
      onClick: this._handleClick
    }, h("div", {
      class: "rux-form-field",
      part: "form-field"
    }, h("div", {
      class: {
        "rux-label": true,
        hidden: !this.hasLabel
      },
      part: "label"
    }, h("slot", {
      onSlotchange: this._handleSlotChange,
      name: "label"
    }, this.label, this.required && h("span", {
      part: "required",
      class: "rux-label__asterisk"
    }, "*"))), h("div", {
      class: {
        "rux-radio-group": true,
        "rux-radio-group--invalid": this.invalid
      },
      role: "radiogroup",
      part: "radiogroup"
    }, h("slot", null))), h("div", {
      class: {
        "rux-error-text": !!errorText || hasErrorSlot,
        hidden: !errorText && !hasErrorSlot
      },
      part: "error-text"
    }, h("svg", {
      fill: "none",
      width: "14",
      height: "14",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 14 14"
    }, h("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z",
      fill: "currentColor"
    })), h("slot", {
      name: "error-text",
      onSlotchange: _handleSlotChange
    }, errorText)), h("div", {
      class: {
        "rux-help-text": (!!helpText || hasHelpSlot) && (!errorText || !hasErrorSlot),
        hidden: !helpText && !hasHelpSlot || !!errorText || hasErrorSlot
      },
      part: "help-text"
    }, h("slot", {
      name: "help-text",
      onSlotchange: _handleSlotChange
    }, helpText)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["emitChange"],
      "label": ["handleLabelChange"]
    };
  }
};
RuxRadioGroup.style = ruxRadioGroupCss;
export {
  RuxRadioGroup as rux_radio_group
};
//# sourceMappingURL=rux-radio-group.entry-3VRXLKIU.js.map
