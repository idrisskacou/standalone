import {
  hasSlot,
  renderHiddenSelect
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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-select.entry.js
var ruxSelectCss = `.rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{display:block;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left;scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}:host ::-webkit-scrollbar{width:var(--spacing-4, 1rem);height:var(--spacing-4, 1rem);background-color:transparent}:host ::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:var(--spacing-2, 0.5rem);border:3px solid transparent;background-clip:padding-box}:host ::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg, 4px)}:host ::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg, 4px)}:host ::-webkit-scrollbar-thumb:active,:host ::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}:host ::-webkit-scrollbar-track,:host ::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}:host ::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}:host ::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal, inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5))}.hidden,:host([hidden]){display:none}label{display:inline-block;margin-bottom:calc(var(--spacing-3, 0.75rem) - 2px);color:var(--color-text-primary, #ffffff);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);line-height:var(--font-control-body-1-line-height, calc(20 / 16))}label .rux-label__asterisk{margin-left:var(--spacing-1, 0.25rem)}.rux-select:not(.rux-select--multiple):not(.rux-select--inline){background-image:var(--dropdown-arrow, url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6875 14.6375L14.925 17.875C15.4125 18.3625 16.2 18.3625 16.6875 17.875L19.925 14.6375C20.7125 13.85 20.15 12.5 19.0375 12.5H12.5625C11.45 12.5 10.9 13.85 11.6875 14.6375Z' fill='%234DACFF'/%3E%3C/svg%3E%0A")), linear-gradient(to left, var(--color-background-surface-selected, #1c3f5e) var(--spacing-8, 2rem), var(--color-background-base-default, #101923) var(--spacing-8, 2rem));background-position:center right var(--spacing-025, 0.0625rem), center left var(--spacing-0, 0rem);background-repeat:no-repeat}.rux-select:not(.rux-select--multiple):not(.rux-select--inline):active:not(:disabled){background-image:var(--dropdown-arrow, url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6875 14.6375L14.925 17.875C15.4125 18.3625 16.2 18.3625 16.6875 17.875L19.925 14.6375C20.7125 13.85 20.15 12.5 19.0375 12.5H12.5625C11.45 12.5 10.9 13.85 11.6875 14.6375Z' fill='%234DACFF'/%3E%3C/svg%3E%0A")), linear-gradient(to left, var(--color-background-surface-selected, #1c3f5e) var(--spacing-8, 2rem), var(--color-background-base-default, #101923) var(--spacing-8, 2rem))}.rux-select:not(.rux-select--multiple):not(.rux-select--inline):hover:not(:disabled){cursor:pointer}.rux-select{box-sizing:border-box;position:relative;background:var(--color-background-base-default, #101923);appearance:none;-webkit-appearance:none;-moz-appearance:none;width:100%;border:1px solid var(--color-border-interactive-muted, #2b659b);border-radius:var(--radius-base, 3px);color:var(--color-background-interactive-default, #4dacff);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);user-select:none}.rux-select--small{padding:calc(var(--spacing-1, 0.25rem) - 1px) var(--spacing-2, 0.5rem);padding-right:calc(var(--spacing-2, 0.5rem) + var(--spacing-8, 2rem))}.rux-select--medium{padding:calc(var(--spacing-2, 0.5rem) - 1px) var(--spacing-2, 0.5rem);padding-right:calc(var(--spacing-2, 0.5rem) + var(--spacing-8, 2rem))}.rux-select--large{padding:calc(var(--spacing-3, 0.75rem) - 1px) var(--spacing-2, 0.5rem);padding-right:calc(var(--spacing-2, 0.5rem) + var(--spacing-8, 2rem))}.rux-select--inline:not(.rux-select--multiple){color:var(--color-text-primary, #ffffff);background:transparent;border:1px solid transparent;background-image:var(--dropdown-arrow, url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6875 14.6375L14.925 17.875C15.4125 18.3625 16.2 18.3625 16.6875 17.875L19.925 14.6375C20.7125 13.85 20.15 12.5 19.0375 12.5H12.5625C11.45 12.5 10.9 13.85 11.6875 14.6375Z' fill='%234DACFF'/%3E%3C/svg%3E%0A"));background-position:center right var(--spacing-025, 0.0625rem), center left var(--spacing-0, 0rem);background-repeat:no-repeat;padding-right:1.875rem}.rux-select--inline:not(.rux-select--multiple):disabled:hover{border:1px solid transparent}.rux-select--multiple{background:var(--color-background-base-default, #101923);padding:0}.rux-select--multiple:disabled{cursor:not-allowed}.rux-select--multiple:disabled option:hover{cursor:not-allowed}.rux-select--multiple option{padding:calc(var(--spacing-2, 0.5rem) - 1px) var(--spacing-0, 0rem) calc(var(--spacing-2, 0.5rem) - 1px) var(--spacing-4, 1rem);text-indent:var(--spacing-4, 1rem)}.rux-select--multiple option:hover{color:var(--color-background-interactive-hover, #92cbff);background-color:var(--color-background-surface-hover, #1c3851);cursor:pointer}.rux-select--multiple option:checked{background:var(--color-background-surface-selected, #1c3f5e);color:var(--color-text-primary, #ffffff)}.rux-select--multiple option:disabled{cursor:not-allowed}.rux-select--multiple option:disabled:hover{color:var(--color-background-interactive-default, #4dacff);opacity:var(--opacity-disabled, 40%);background-color:linear-gradient(to left, var(--color-background-surface-selected, #1c3f5e) var(--spacing-8, 2rem), var(--color-background-base-default, #101923) var(--spacing-8, 2rem));cursor:not-allowed}.rux-select:hover{border:1px solid var(--color-background-interactive-hover, #92cbff)}.rux-select:focus-visible{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem);border:1px solid var(--color-background-interactive-default, #4dacff)}.rux-select:disabled{opacity:0.4;cursor:not-allowed}.rux-select:disabled:hover:not(.rux-select--inline){border:1px solid var(--color-border-interactive-muted, #2b659b)}.rux-select:disabled:hover:not(.rux-select--inline) option{background:var(--color-background-base-default, #101923);color:var(--color-background-interactive-default, #4dacff)}.rux-select::-ms-expand{display:none}.rux-select:focus::-ms-value{background:transparent}.rux-select option{opacity:1;color:var(--color-background-interactive-default, #4dacff);border-radius:0}.rux-select option:hover{color:var(--color-background-interactive-hover, #92cbff);background-color:var(--color-background-surface-hover, #1c3851)}.rux-select option:focus{color:var(--color-text-primary, #ffffff);background-color:var(--color-background-surface-selected, #1c3f5e)}.rux-select option:disabled{cursor:not-allowed;color:#4dacff66}.rux-select optgroup{text-indent:var(--spacing-4, 1rem);color:var(--select-menu-text-color);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);font-style:normal}.rux-select.rux-select--invalid{border:1px solid var(--color-text-error, #ff3838)}.rux-select.rux-select--invalid:disabled:hover{border:1px solid var(--color-text-error, #ff3838)}.rux-select.rux-select--invalid:hover{border:1px solid var(--color-background-interactive-hover, #92cbff)}`;
var RuxSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxSelectChanged = createEvent(this, "ruxchange", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.disabled = false;
    this.required = false;
    this.label = void 0;
    this.inputId = void 0;
    this.labelId = void 0;
    this.invalid = false;
    this.multiple = false;
    this.name = "";
    this.value = void 0;
    this.helpText = void 0;
    this.errorText = void 0;
    this.size = "medium";
    this.inline = false;
  }
  onValueChange() {
    this._syncOptionsFromValue();
  }
  handleLabelChange() {
    this._handleLabelSlotChange();
  }
  handleGroupChange() {
    this._syncOptionsToNativeSelect();
    this._syncOptionsFromValue();
  }
  handleOptionChange() {
    this._syncOptionsToNativeSelect();
  }
  /**
   * Sets element as focused
   */
  setFocus(options) {
    return __async(this, null, function* () {
      this.selectEl.focus(options);
    });
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleLabelSlotChange = this._handleLabelSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleLabelSlotChange();
    if (this.value) {
      this._handleSlotChange();
    }
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleLabelSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
  }
  _handleSlotChange() {
    return __async(this, null, function* () {
      yield this._syncOptionsToNativeSelect();
      yield this._syncOptionsFromValue();
      this.hasErrorSlot = hasSlot(this.el, "error-text");
      this.hasHelpSlot = hasSlot(this.el, "help-text");
    });
  }
  /**
   * The native select element doesn't play nicely with slots. If an <option> isn't a direct child element, it won't render properly.
   * As a solution, we expose a slot outside the shadow-DOMed <select> and then manually copy the contents inside the shadow DOM.
   *
   * A RuxOptionGroup component is required because onSlotchange won't fire if we use the native <optgroup> and we change just its options.
   * RuxOptionGroup exists only to fire a change event that we can listen to.
   */
  _syncOptionsToNativeSelect() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector("slot");
    if (slot) {
      this.selectEl.innerHTML = "";
      const assignedElements = slot.assignedElements({
        flatten: true
      });
      assignedElements.map((item) => {
        const option = item;
        if (option.tagName.toLowerCase() === "rux-option") {
          this._appendOptionToNativeSelect(option.label, option.value, option.disabled, this.selectEl, option.title);
        }
        if (option.tagName.toLowerCase() === "rux-option-group") {
          const children = [...Array.from(option.querySelectorAll("rux-option"))];
          this._appendOptGroupToNativeSelect(option.label ? option.label : "Group", children, option.title);
        }
      });
    }
    return Promise.resolve();
  }
  _appendOptGroupToNativeSelect(groupName, children, title) {
    const group = Object.assign(document.createElement("optgroup"), {
      label: groupName,
      title
    });
    children.map((option) => {
      this._appendOptionToNativeSelect(option.label, option.value, option.disabled, group, option.title);
      this.selectEl.appendChild(group);
    });
    this.selectEl.appendChild(group);
  }
  _appendOptionToNativeSelect(label, value, disabled, target, title) {
    const item = Object.assign(document.createElement("option"), {
      innerHTML: label ? label : "",
      value,
      disabled,
      title
    });
    target.appendChild(item);
  }
  _syncOptionsFromValue() {
    if (this.selectEl) {
      const options = [...Array.from(this.selectEl.querySelectorAll("option"))];
      options.map((option) => {
        if (Array.isArray(this.value)) {
          option.selected = this.value.includes(option.value);
        } else {
          option.selected = option.value === this.value;
        }
      });
    }
    return Promise.resolve();
  }
  _onChange(e) {
    const target = e.target;
    const values = [...target.options].filter((option) => {
      return option.selected;
    }).map((option) => {
      return option.value;
    });
    if (values.length === 1) {
      this.value = values[0];
    } else {
      this.value = values;
    }
    this.ruxSelectChanged.emit();
  }
  render() {
    const {
      disabled,
      required,
      label,
      inputId,
      labelId,
      invalid,
      name,
      multiple,
      errorText,
      helpText,
      hasHelpSlot,
      hasErrorSlot,
      _handleSlotChange
    } = this;
    renderHiddenSelect(true, this.el, this.name, this.value, this.disabled);
    return h(Host, null, h("label", {
      id: labelId,
      htmlFor: inputId,
      "aria-hidden": this.hasLabel ? "false" : "true",
      part: "label"
    }, h("span", {
      class: {
        hidden: !this.hasLabel
      }
    }, h("slot", {
      onSlotchange: this._handleLabelSlotChange,
      name: "label"
    }, label, this.required && h("span", {
      part: "required",
      class: "rux-label__asterisk"
    }, "*")))), h("select", {
      class: {
        "rux-select": true,
        "rux-select--small": this.size === "small",
        "rux-select--medium": this.size === "medium",
        "rux-select--large": this.size === "large",
        "rux-select--invalid": invalid,
        "rux-select--multiple": multiple,
        "rux-select--inline": this.inline === true
      },
      ref: (el) => this.selectEl = el,
      id: inputId,
      disabled,
      required,
      multiple,
      name,
      onChange: (e) => this._onChange(e),
      onBlur: this._onBlur,
      part: "select"
    }), h("div", {
      "aria-hidden": "true",
      class: "hidden",
      ref: (el) => this.slotContainer = el
    }, h("slot", {
      onSlotchange: this._handleSlotChange
    })), h("div", {
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
      "value": ["onValueChange"],
      "label": ["handleLabelChange"]
    };
  }
};
RuxSelect.style = ruxSelectCss;
export {
  RuxSelect as rux_select
};
//# sourceMappingURL=rux-select.entry-C6IPQ2CM.js.map
