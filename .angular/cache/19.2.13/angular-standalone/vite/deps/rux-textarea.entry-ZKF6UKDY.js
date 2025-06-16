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
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-textarea.entry.js
var ruxTextareaCss = ".rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{display:block}.hidden,:host([hidden]){display:none}textarea{scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}textarea::-webkit-scrollbar{width:var(--spacing-4, 1rem);height:var(--spacing-4, 1rem);background-color:transparent}textarea::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:var(--spacing-2, 0.5rem);border:3px solid transparent;background-clip:padding-box}textarea::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg, 4px)}textarea::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg, 4px)}textarea::-webkit-scrollbar-thumb:active,textarea::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}textarea::-webkit-scrollbar-track{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}textarea::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e)}textarea::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}textarea::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal, inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5))}.rux-textarea{box-sizing:border-box;font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));color:var(--color-text-primary, #ffffff);background-color:var(--color-background-base-default, #101923);min-height:var(--spacing-16, 4rem);width:100%;padding:var(--spacing-2, 0.5rem);margin:var(--spacing-0, 0rem);border:1px solid var(--color-border-interactive-muted, #2b659b);border-radius:var(--radius-base, 3px)}.rux-textarea--invalid{border:1px solid var(--color-text-error, #ff3838)}.rux-textarea--disabled{opacity:0.4;opacity:var(--opacity-disabled, 40%);cursor:not-allowed}.rux-textarea--small{padding:var(--spacing-1, 0.25rem) var(--spacing-2, 0.5rem);min-height:var(--spacing-14, 3.5rem)}.rux-textarea--large{min-height:calc(var(--spacing-16, 4rem) + var(--spacing-2, 0.5rem));padding:var(--spacing-3, 0.75rem) var(--spacing-2, 0.5rem)}.rux-textarea:focus-visible{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-textarea:hover{border-color:var(--color-background-interactive-hover, #92cbff);outline:none}.rux-textarea--disabled:hover{border:1px solid var(--color-border-interactive-muted, #2b659b);color:var(--color-text-primary, #ffffff)}.rux-textarea--invalid:hover{border:1px solid var(--color-text-error, #ff3838)}.rux-textarea::placeholder{color:var(--color-text-placeholder, #a4abb6)}.rux-textarea-field{display:flex;flex-direction:column;color:var(--color-text-primary, #ffffff)}.rux-textarea-label{font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);margin-bottom:var(--spacing-2, 0.5rem);text-align:left}.rux-textarea-label__asterisk{margin-left:var(--spacing-1, 0.25rem)}::selection{background-color:var(--color-palette-brightblue-400, #92cbff)}";
var id = 0;
var RuxTextarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.inputId = `rux-textarea-${++id}`;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.label = void 0;
    this.placeholder = void 0;
    this.helpText = void 0;
    this.errorText = void 0;
    this.invalid = false;
    this.value = "";
    this.name = "";
    this.minLength = void 0;
    this.maxLength = void 0;
    this.rows = void 0;
    this.disabled = false;
    this.required = false;
    this.readonly = false;
    this.size = void 0;
  }
  /**
   * Sets element as focused
   */
  setFocus(options) {
    return __async(this, null, function* () {
      this.textareaEl.focus(options);
    });
  }
  handleLabelChange() {
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
  componentWillLoad() {
    this._handleSlotChange();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
    this.hasErrorSlot = hasSlot(this.el, "error-text");
    this.hasHelpSlot = hasSlot(this.el, "help-text");
  }
  _onChange(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    renderHiddenInput(true, this.el, this.name, this.value, this.disabled);
    return h(Host, null, h("div", {
      class: "rux-textarea-field",
      part: "form-field"
    }, this.hasLabel ? h("label", {
      class: {
        "rux-textarea-label": true
      },
      "aria-hidden": this.hasLabel ? "false" : "true",
      htmlFor: this.inputId,
      part: "label"
    }, h("span", {
      class: {
        hidden: !this.hasLabel
      }
    }, h("slot", {
      onSlotchange: this._handleSlotChange,
      name: "label"
    }, this.label, this.required && h("span", {
      part: "required",
      class: "rux-textarea-label__asterisk"
    }, "*")))) : null, h("textarea", {
      ref: (el) => this.textareaEl = el,
      name: this.name,
      disabled: this.disabled,
      "aria-invalid": this.invalid ? "true" : "false",
      placeholder: this.placeholder,
      required: this.required,
      readonly: this.readonly,
      minlength: this.minLength,
      maxlength: this.maxLength,
      value: this.value,
      class: {
        "rux-textarea": true,
        "rux-textarea--disabled": this.disabled,
        "rux-textarea--invalid": this.invalid,
        "rux-textarea--small": this.size === "small",
        "rux-textarea--large": this.size === "large"
      },
      id: this.inputId,
      rows: this.rows,
      onChange: this._onChange,
      onInput: this._onInput,
      onBlur: this._onBlur,
      part: "textarea"
    })), h("div", {
      class: {
        "rux-error-text": !!this.errorText || this.hasErrorSlot,
        hidden: !this.errorText && !this.hasErrorSlot
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
      onSlotchange: this._handleSlotChange
    }, this.errorText)), h("div", {
      class: {
        "rux-help-text": (!!this.helpText || this.hasHelpSlot) && (!this.errorText || !this.hasErrorSlot),
        hidden: !this.helpText && !this.hasHelpSlot || !!this.errorText || this.hasErrorSlot
      },
      part: "help-text"
    }, h("slot", {
      name: "help-text",
      onSlotchange: this._handleSlotChange
    }, this.helpText)));
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
RuxTextarea.style = ruxTextareaCss;
export {
  RuxTextarea as rux_textarea
};
//# sourceMappingURL=rux-textarea.entry-ZKF6UKDY.js.map
