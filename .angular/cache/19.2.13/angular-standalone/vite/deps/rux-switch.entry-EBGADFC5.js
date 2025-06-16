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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-switch.entry.js
var ruxSwitchCss = `.rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{display:block}.rux-switch{position:relative;display:flex;height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));white-space:nowrap}.rux-switch__button{display:flex;align-items:center;cursor:pointer}.rux-switch__button::before{position:relative;display:flex;content:"";border-radius:var(--switch-radius-track, 10px);border:0;box-shadow:var(--color-border-interactive-muted, #2b659b) 0 0 0 1px inset;background-color:var(--color-background-base-default, #101923);height:var(--spacing-3, 0.75rem);width:var(--spacing-8, 2rem);margin:var(--spacing-1, 0.25rem);z-index:2;transition:0.1s background-color linear}.rux-switch__button::after{position:absolute;content:"";left:0;z-index:3;height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));border-radius:var(--radius-circle, 50%);box-shadow:var(--color-background-interactive-default, #4dacff) 0 0 0 1px inset;background-color:var(--color-background-base-default, #101923);transition:0.1s left linear, 0.1s border-color linear}.rux-switch__input{appearance:none;-webkit-appearance:none;margin:0}.rux-switch__input:checked+.rux-switch__button::before{box-shadow:var(--color-background-interactive-default, #4dacff) 0 0 0 1px inset;background-color:var(--color-background-interactive-default, #4dacff)}.rux-switch__input:checked+.rux-switch__button::after{left:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));background-color:var(--color-background-base-default, #101923);box-shadow:var(--color-background-interactive-default, #4dacff) 0 0 0 1px inset}.rux-switch__input:focus-visible+.rux-switch__button{border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-switch__input:disabled+.rux-switch__button{cursor:not-allowed;opacity:var(--opacity-disabled, 40%)}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::before,.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::before{border-color:var(--color-background-interactive-default, #4dacff)}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::after,.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::after{box-shadow:var(--color-background-interactive-hover, #92cbff) 0 0 0 1px inset}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::before{background-color:var(--color-background-base-default, #101923)}.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::before{background-color:var(--color-background-interactive-default, #4dacff)}.rux-switch__label{font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);margin-left:0.75rem;color:var(--color-text-primary, #ffffff)}.rux-form-field{display:flex;flex-direction:column;color:var(--color-text-primary, #ffffff)}.hidden,:host([hidden]){display:none}`;
var id = 0;
var RuxSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.switchId = `rux-switch-${++id}`;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.hasLabelSlot = false;
    this.name = "";
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.label = void 0;
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    const {
      switchId,
      checked,
      disabled,
      name,
      value
    } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : "on", this.disabled, this.checked);
    return h(Host, {
      class: "rux-form-field",
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? "true" : null,
      role: "switch"
    }, h("div", {
      class: {
        "rux-switch": true
      }
    }, h("input", {
      role: "switch",
      type: "checkbox",
      class: "rux-switch__input",
      name,
      id: switchId,
      disabled,
      checked,
      value,
      "aria-checked": `${checked}`,
      onChange: this._onChange,
      onInput: this._onInput,
      onBlur: this._onBlur
    }), h("label", {
      class: "rux-switch__button",
      htmlFor: switchId,
      part: "switch"
    }, h("span", {
      class: {
        "rux-switch__label": true,
        hidden: !this.hasLabel
      },
      part: "label"
    }, h("slot", {
      onSlotchange: this._handleSlotChange,
      name: "label"
    }, this.label)))));
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
RuxSwitch.style = ruxSwitchCss;
export {
  RuxSwitch as rux_switch
};
//# sourceMappingURL=rux-switch.entry-EBGADFC5.js.map
