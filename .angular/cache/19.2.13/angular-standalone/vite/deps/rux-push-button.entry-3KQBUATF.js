import {
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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-push-button.entry.js
var ruxPushButtonCss = ":host{display:block;margin:--spacing-0 --spacing-050;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left}:host[disabled]{opacity:var(--opacity-disabled, 40%);cursor:not-allowed}:host input{appearance:none;-webkit-appearance:none;position:absolute}:host input:focus-visible+.rux-push-button__button{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}:host .rux-push-button__button{cursor:pointer;font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);display:inline-flex;justify-content:center;align-items:center;color:var(--color-text-interactive-default, #4dacff);border-radius:var(--radius-base, 3px);box-shadow:var(--color-border-interactive-default, #4dacff) 0 0 0 1px inset;padding:var(--spacing-2, 0.5rem) var(--spacing-4, 1rem)}:host .rux-push-button__button:hover{cursor:pointer;color:var(--color-background-interactive-hover, #92cbff);box-shadow:var(--color-background-interactive-hover, #92cbff) 0 0 0 1px inset}:host .rux-push-button__button:hover rux-icon{color:var(--color-background-interactive-hover, #92cbff)}:host .rux-push-button__button--small{padding:var(--spacing-1, 0.25rem) var(--spacing-4, 1rem)}:host .rux-push-button__button--small.rux-push-button__button--icon-only{padding:var(--spacing-1, 0.25rem)}:host .rux-push-button__button--large{padding:var(--spacing-3, 0.75rem) var(--spacing-4, 1rem)}:host .rux-push-button__button--large.rux-push-button__button--icon-only{padding:var(--spacing-3, 0.75rem)}:host .rux-push-button__button rux-icon{height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));margin-right:var(--spacing-1, 0.25rem)}:host .rux-push-button__button--icon-only{font-size:0 !important;padding:var(--spacing-2, 0.5rem)}:host .rux-push-button__button--icon-only rux-icon{margin-right:var(--spacing-0, 0rem)}:host .rux-push-button__input:checked+.rux-push-button__button{display:inline-flex;color:var(--color-text-black, #000000);background-color:var(--color-palette-green-500, #56f000);box-shadow:var(--color-palette-green-500, #56f000) 0 0 0 1px inset}:host .rux-push-button__input:checked+.rux-push-button__button rux-icon{color:var(--color-text-black, #000000)}:host .rux-push-button__input:checked+.rux-push-button__button:hover{background-color:var(--color-palette-green-400, #99f666)}:host .rux-push-button__input:checked:disabled+.rux-push-button__button:hover{color:var(--color-text-black, #000000);background-color:var(--color-palette-green-500, #56f000);box-shadow:var(--color-palette-green-500, #56f000) 0 0 0 1px inset}:host .rux-push-button__input:checked:disabled+.rux-push-button__button:hover rux-icon{color:var(--color-text-black, #000000)}:host .rux-push-button__input:disabled+.rux-push-button__button{opacity:var(--opacity-disabled, 40%);cursor:not-allowed}:host .rux-push-button__input:disabled+.rux-push-button__button:hover{box-shadow:var(--color-border-interactive-default, #4dacff) 0 0 0 1px inset;color:var(--color-text-interactive-default, #4dacff)}:host .rux-push-button__input:disabled+.rux-push-button__button:hover rux-icon{color:var(--color-text-interactive-default, #4dacff)}:host([hidden]){display:none}";
var RuxPushButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.pushButtonId = `rux-push-button-${id++}`;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.icon = void 0;
    this.iconOnly = false;
    this.disabled = false;
    this.checked = false;
    this.label = "";
    this.name = "";
    this.value = "";
    this.size = void 0;
  }
  componentWillLoad() {
    this._onChange = this._onChange.bind(this);
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  render() {
    const {
      disabled,
      checked,
      label,
      size,
      _onChange,
      value,
      _onBlur,
      icon,
      iconOnly
    } = this;
    renderHiddenInput(true, this.el, this.name, this.value ? this.value : "on", this.disabled, this.checked);
    return h(Host, {
      "aria-checked": `${checked}`,
      "aria-hidden": disabled ? "true" : null,
      role: "switch"
    }, h("input", {
      class: "rux-push-button__input",
      id: this.pushButtonId,
      type: "checkbox",
      disabled,
      checked,
      onChange: _onChange,
      onBlur: _onBlur,
      value
    }), h("label", {
      part: "container",
      class: {
        "rux-push-button__button": true,
        "rux-push-button__button--small": size === "small",
        "rux-push-button__button--large": size === "large",
        "rux-push-button__button--icon-only": iconOnly
      },
      htmlFor: this.pushButtonId
    }, icon ? h("rux-icon", {
      size: "auto",
      exportparts: "icon",
      icon
    }) : null, label), h("slot", null));
  }
  get el() {
    return getElement(this);
  }
};
var id = 0;
RuxPushButton.style = ruxPushButtonCss;
export {
  RuxPushButton as rux_push_button
};
//# sourceMappingURL=rux-push-button.entry-3KQBUATF.js.map
