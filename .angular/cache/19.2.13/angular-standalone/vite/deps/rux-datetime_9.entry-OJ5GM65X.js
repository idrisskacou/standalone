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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-datetime_9.entry.js
var RuxDatetime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.date = /* @__PURE__ */ new Date();
    this.locale = "default";
    this.weekday = void 0;
    this.era = void 0;
    this.year = void 0;
    this.month = void 0;
    this.day = void 0;
    this.hour = void 0;
    this.minute = void 0;
    this.second = void 0;
    this.timeZoneName = void 0;
    this.timeZone = void 0;
    this.hour12 = false;
  }
  render() {
    const date = new Date(this.date);
    const {
      day,
      era,
      hour,
      hour12,
      locale,
      minute,
      month,
      second,
      timeZone,
      timeZoneName,
      weekday,
      year
    } = this;
    return new Intl.DateTimeFormat(locale, {
      day,
      era,
      hour,
      hour12,
      minute,
      month,
      second,
      timeZone,
      timeZoneName,
      weekday,
      year
    }).format(date);
  }
};
var ruxInputCss = `.rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{display:block;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem)}:host .rux-form-field{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;color:var(--color-text-primary, #ffffff)}:host rux-icon{cursor:pointer}:host input[type=date i]::-webkit-calendar-picker-indicator{cursor:pointer;--webkit-appearance:none;background:var(--color-background-base-default, #101923) url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM9 13V11H7V13H9ZM11 11H13V13H11V11ZM17 13V11H15V13H17Z' fill='%234dacff'/%3E%3C/svg%3E%0A");background-position:center}:host input[type=datetime-local i]::-webkit-calendar-picker-indicator{cursor:pointer;--webkit-appearance:none;background:var(--color-background-base-default, #101923) url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM9 13V11H7V13H9ZM11 11H13V13H11V11ZM17 13V11H15V13H17Z' fill='%234dacff'/%3E%3C/svg%3E%0A");background-position:center}:host input[type=time i]::-webkit-calendar-picker-indicator{background:var(--color-background-base-default, #101923) url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11.72 7H11.78C12.18 7 12.5 7.32 12.5 7.72V12.26L16.37 14.56C16.72 14.76 16.83 15.21 16.62 15.55C16.42 15.89 15.98 15.99 15.64 15.79L11.49 13.3C11.18 13.12 11 12.79 11 12.44V7.72C11 7.32 11.32 7 11.72 7Z' fill='%234dacff'/%3E%3C/svg%3E");cursor:pointer;background-position:center}:host input::placeholder{color:var(--color-text-placeholder, #a4abb6)}:host .rux-input{width:100%;overflow:hidden;flex:1 1 auto;display:inline-flex;align-items:center;justify-content:start;position:relative;box-sizing:border-box;order:2;box-shadow:var(--color-border-interactive-muted, #2b659b) 0 0 0 1px inset;border-radius:var(--radius-base, 3px);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);color:var(--color-text-primary, #ffffff);background-color:var(--color-background-base-default, #101923)}:host .rux-input input{border:none;background:none;box-shadow:none;padding:var(--spacing-0, 0rem);margin:var(--spacing-0, 0rem);color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;-webkit-appearance:none;height:var(--line-height-sm, 1.25rem);appearance:none;outline:none;width:100%}:host .rux-input input:disabled{cursor:not-allowed}:host .rux-input--invalid{box-shadow:var(--color-border-error, #ff3838) 0 0 0 1px inset}:host .rux-input--disabled{opacity:var(--opacity-disabled, 40%);cursor:not-allowed}:host .rux-input--small{padding:var(--spacing-1, 0.25rem) var(--spacing-2, 0.5rem)}:host .rux-input--medium{padding:var(--spacing-2, 0.5rem)}:host .rux-input--large{padding:var(--spacing-3, 0.75rem) var(--spacing-2, 0.5rem)}:host .rux-input--search{-webkit-appearance:none;-moz-appearance:none;padding-left:var(--spacing-8, 2rem);background-color:var(--color-background-base-default, #101923);background-image:url("data:image/svg+xml,%3Csvg width='20' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.71 14H15.5L19.74 18.26C20.15 18.67 20.15 19.34 19.74 19.75C19.33 20.16 18.66 20.16 18.25 19.75L14 15.5V14.71L13.73 14.43C12.33 15.63 10.42 16.25 8.39002 15.91C5.61002 15.44 3.39002 13.12 3.05002 10.32C2.53002 6.09 6.09002 2.53 10.32 3.05C13.12 3.39 15.44 5.61 15.91 8.39C16.25 10.42 15.63 12.33 14.43 13.73L14.71 14ZM5.00002 9.5C5.00002 11.99 7.01002 14 9.50002 14C11.99 14 14 11.99 14 9.5C14 7.01 11.99 5 9.50002 5C7.01002 5 5.00002 7.01 5.00002 9.5Z' fill='%234dacff' fill-rule='evenodd'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:8px center;background-size:1.05rem}:host .rux-input--focused{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}:host .rux-input:hover{box-shadow:var(--color-background-interactive-hover, #92cbff) 0 0 0 1px inset;outline:2px solid transparent}:host .rux-input--disabled:hover{box-shadow:var(--color-border-interactive-muted, #2b659b) 0 0 0 1px inset;color:var(--color-text-primary, #ffffff)}:host .rux-input--invalid:hover{box-shadow:var(--color-border-error, #ff3838) 0 0 0 1px inset}:host .rux-input .rux-input-prefix,:host .rux-input .rux-input-suffix{display:inline-flex;flex:0 0 auto;align-items:center;cursor:default}:host .rux-input .rux-input-prefix ::slotted(*){padding-right:var(--spacing-1, 0.25rem)}:host .rux-input .rux-input-suffix ::slotted(*){padding-left:var(--spacing-1, 0.25rem)}:host .rux-input-label{font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);margin-bottom:var(--spacing-2, 0.5rem)}:host .rux-input-label__asterisk{margin-left:var(--spacing-1, 0.25rem)}:host ::selection{background-color:var(--color-palette-brightblue-400, #92cbff)}.pw-button::part(container){display:flex;flex-direction:column;align-items:flex-end;justify-content:center}.pw-button{border:none;background:transparent;height:calc(var(--spacing-6, 1.5rem) - var(--spacing-1, 0.25rem));width:var(--spacing-4, 1rem);padding:var(--spacing-0, 0rem);line-height:var(--line-height-sm, 1.25rem);width:calc(var(--spacing-6, 1.5rem) - var(--spacing-1, 0.25rem))}.pw-button:focus-visible{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.hidden,:host([hidden]){display:none}`;
var id = 0;
var RuxInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.ruxFocus = createEvent(this, "ruxfocus", 7);
    this.inputId = `rux-input-${++id}`;
    this._onBlur = () => {
      this.ruxBlur.emit();
      this.hasFocus = false;
    };
    this._onFocus = () => {
      this.ruxFocus.emit();
      this.hasFocus = true;
    };
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.togglePassword = false;
    this.isPasswordVisible = false;
    this.hasFocus = false;
    this.label = void 0;
    this.placeholder = void 0;
    this.helpText = void 0;
    this.errorText = void 0;
    this.invalid = false;
    this.value = "";
    this.name = "";
    this.type = "text";
    this.min = void 0;
    this.max = void 0;
    this.disabled = false;
    this.required = false;
    this.size = "medium";
    this.step = void 0;
    this.spellcheck = false;
    this.readonly = false;
    this.autocomplete = "off";
  }
  /**
   * Sets element as focused
   */
  setFocus(options) {
    return __async(this, null, function* () {
      this.inputEl.focus(options);
    });
  }
  /**
   * Returns the native input element used in the shadow dom.
   */
  getInput() {
    return __async(this, null, function* () {
      return this.inputEl;
    });
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  handleTypeChange() {
    this._setTogglePassword();
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleTogglePassword = this._handleTogglePassword.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  componentWillLoad() {
    this._handleSlotChange();
    this._setTogglePassword();
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
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
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
    this.hasErrorSlot = hasSlot(this.el, "error-text");
    this.hasHelpSlot = hasSlot(this.el, "help-text");
  }
  _setTogglePassword() {
    this.type === "password" ? this.togglePassword = true : this.togglePassword = false;
    if (this.type === "password") this.autocomplete = "off";
  }
  _handleTogglePassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  render() {
    const {
      disabled,
      el,
      errorText,
      helpText,
      hasHelpSlot,
      hasErrorSlot,
      inputId,
      invalid,
      label,
      max,
      min,
      name,
      _onChange,
      _onInput,
      _onBlur,
      _onFocus,
      _handleSlotChange,
      _handleTogglePassword,
      placeholder,
      required,
      step,
      type,
      value,
      hasLabel,
      size,
      spellcheck,
      readonly,
      togglePassword,
      isPasswordVisible,
      autocomplete
    } = this;
    renderHiddenInput(true, el, name, value, disabled);
    return h(Host, null, h("div", {
      class: "rux-form-field",
      part: "form-field"
    }, hasLabel ? h("label", {
      class: {
        "rux-input-label": true
      },
      part: "label",
      "aria-hidden": hasLabel ? "false" : "true",
      htmlFor: inputId
    }, h("span", {
      class: {
        hidden: !hasLabel
      }
    }, h("slot", {
      name: "label",
      onSlotchange: _handleSlotChange
    }, label, required && h("span", {
      part: "required",
      class: "rux-input-label__asterisk"
    }, "*")))) : null, h("div", {
      part: "input-field",
      class: {
        "rux-input": true,
        "rux-input--focused": this.hasFocus,
        "rux-input--disabled": disabled,
        "rux-input--invalid": invalid,
        "rux-input--search": type === "search",
        "rux-input--small": size === "small",
        "rux-input--medium": size === "medium",
        "rux-input--large": size === "large"
      }
    }, h("span", {
      part: "prefix",
      class: "rux-input-prefix"
    }, h("slot", {
      name: "prefix"
    })), h("input", {
      name,
      disabled,
      ref: (el2) => this.inputEl = el2,
      type: type === "password" && this.isPasswordVisible ? "text" : type,
      "aria-invalid": invalid ? "true" : "false",
      placeholder,
      required,
      step,
      min,
      max,
      value,
      class: "native-input",
      id: inputId,
      spellcheck,
      readonly,
      onChange: _onChange,
      onInput: _onInput,
      onBlur: _onBlur,
      onFocus: _onFocus,
      part: "input",
      autocomplete
    }), togglePassword ? h("button", {
      onClick: _handleTogglePassword,
      class: "pw-button"
    }, h("rux-icon", {
      exportparts: "icon",
      icon: isPasswordVisible ? "visibility-off" : "visibility",
      size: "22px"
    })) : null, h("span", {
      part: "suffix",
      class: "rux-input-suffix"
    }, h("slot", {
      name: "suffix"
    })))), h("div", {
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
      "label": ["handleLabelChange"],
      "type": ["handleTypeChange"]
    };
  }
};
RuxInput.style = ruxInputCss;
var ruxTableCss = ":host{display:table;width:100%;border-collapse:separate;border-spacing:0;color:var(--color-text-primary, #ffffff);border-bottom:1px solid var(--color-background-base-default, #101923);background:var(--color-background-surface-default, #1b2d3e);text-align:left;overflow:scroll}:host([hidden]){display:none}";
var RuxTable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTable.style = ruxTableCss;
var ruxTableBodyCss = ":host{display:table-row-group}:host([hidden]){display:none}";
var RuxTableBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTableBody.style = ruxTableBodyCss;
var ruxTableCellCss = ":host{display:table-cell;vertical-align:middle;border-width:0 0 1px 0;border-style:solid;border-color:var(--color-background-base-default, #101923);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--font-body-1-line-height, calc(24 / 16));padding:var(--spacing-0, 0rem) var(--spacing-2, 0.5rem);height:calc(var(--spacing-8, 2rem) - 1px);white-space:nowrap}::slotted(*){vertical-align:middle}:host([hidden]){display:none}";
var RuxTableCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTableCell.style = ruxTableCellCss;
var ruxTableHeaderCss = ":host{display:table-header-group;box-shadow:0 0.25rem 0.5rem rgba(0, 0, 0, 0.45);border-top-width:1px;border-top-style:solid;border-top-color:var(--color-background-surface-default, #1b2d3e)}:host([hidden]){display:none}";
var RuxTableHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTableHeader.style = ruxTableHeaderCss;
var ruxTableHeaderCellCss = ":host{display:table-cell;vertical-align:middle;background:var(--color-background-surface-header, #172635);color:var(--color-text-primary, #ffffff);font-family:var(--font-heading-5-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-5-font-size, 1.125rem);font-weight:var(--font-heading-5-font-weight, 400);letter-spacing:var(--font-heading-5-letter-spacing, 0em);line-height:var(--font-heading-5-line-height, calc(24 / 18));padding:var(--spacing-0, 0rem) var(--spacing-2, 0.5rem);height:var(--spacing-10, 2.5rem);white-space:nowrap}:host([hidden]){display:none}";
var RuxTableHeaderCell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTableHeaderCell.style = ruxTableHeaderCellCss;
var ruxTableHeaderRowCss = ":host{display:table-row}:host([hidden]){display:none}";
var RuxTableHeaderRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
RuxTableHeaderRow.style = ruxTableHeaderRowCss;
var ruxTableRowCss = ":host{display:table-row}:host([hidden]){display:none}:host(.is-selected){background:var(--color-background-surface-selected, #1c3f5e)}:host(.is-selected) ::slotted(rux-table-cell){border-color:var(--color-background-base-default, #101923)}:host(:hover:not(.is-selected)){background:var(--color-background-surface-hover, #1c3851);color:var(--color-text-primary, #ffffff)}";
var RuxTableRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = false;
  }
  render() {
    return h(Host, {
      class: {
        "is-selected": this.selected
      }
    }, h("slot", null));
  }
};
RuxTableRow.style = ruxTableRowCss;
export {
  RuxDatetime as rux_datetime,
  RuxInput as rux_input,
  RuxTable as rux_table,
  RuxTableBody as rux_table_body,
  RuxTableCell as rux_table_cell,
  RuxTableHeader as rux_table_header,
  RuxTableHeaderCell as rux_table_header_cell,
  RuxTableHeaderRow as rux_table_header_row,
  RuxTableRow as rux_table_row
};
//# sourceMappingURL=rux-datetime_9.entry-OJ5GM65X.js.map
