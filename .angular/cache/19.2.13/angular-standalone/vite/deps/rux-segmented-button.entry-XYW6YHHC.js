import {
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-segmented-button.entry.js
var ruxSegmentedButtonCss = ":host{display:block;box-sizing:border-box;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left}:host([disabled]){opacity:var(--opacity-disabled, 40%);cursor:not-allowed;pointer-events:none}:host([disabled]) label{border-color:var(--color-background-interactive-default, #4dacff)}:host([hidden]){display:none}*,*::before,*::after{box-sizing:inherit}.rux-segmented-button{display:inline-flex;padding:var(--spacing-0, 0rem);margin:var(--spacing-0, 0rem);list-style:none;border-radius:var(--radius-base, 3px);background-color:var(--color-background-base-default, #101923)}.rux-segmented-button__segment{width:auto;margin:var(--spacing-0, 0rem);padding:var(--spacing-0, 0rem)}.rux-segmented-button__segment:first-child{border-radius:var(--radius-base, 3px) 0 0 var(--radius-base, 3px)}.rux-segmented-button__segment:last-child{border-radius:0 var(--radius-base, 3px) var(--radius-base, 3px) 0}.rux-segmented-button__segment+.rux-segmented-button__segment label{border-right:none}.rux-segmented-button__segment:hover+.rux-segmented-button__segment label{border-left-color:var(--color-background-interactive-hover, #92cbff)}.rux-segmented-button__segment.--focused{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem);z-index:1}.rux-segmented-button__segment label{display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;width:100%;margin:var(--spacing-0, 0rem);border:1px solid var(--color-background-interactive-default, #4dacff);color:var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-segmented-button__segment label:hover{background-color:var(--color-background-surface-hover, #1c3851);border-color:var(--color-background-interactive-hover, #92cbff);color:var(--color-background-interactive-default, #4dacff);outline:none}.rux-segmented-button__segment .rux-segmented-button-label{height:calc(var(--spacing-8, 2rem) + var(--spacing-1, 0.25rem));padding:var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);cursor:pointer}.rux-segmented-button__segment .rux-segmented-button-label--small{height:calc(var(--spacing-6, 1.5rem) + var(--spacing-1, 0.25rem));padding:var(--spacing-1, 0.25rem) var(--spacing-4, 1rem)}.rux-segmented-button__segment .rux-segmented-button-label--large{height:calc(var(--spacing-10, 2.5rem) + var(--spacing-1, 0.25rem));padding:var(--spacing-3, 0.75rem) var(--spacing-4, 1rem)}.rux-segmented-button__segment input{position:absolute;opacity:0}.rux-segmented-button__segment input:checked+label{background-color:var(--color-background-surface-selected, #1c3f5e);color:var(--color-text-primary, #ffffff)}.rux-segmented-button__segment input:checked:hover+label{background-color:var(--color-background-surface-selected, #1c3f5e);color:var(--color-text-primary, #ffffff);border-color:var(--color-background-interactive-hover, #92cbff)}.rux-segmented-button__segment:first-child label{border-radius:var(--radius-base, 3px) 0 0 var(--radius-base, 3px);border-right:none}.rux-segmented-button__segment:first-child label:hover{border-color:var(--color-background-interactive-hover, #92cbff)}.rux-segmented-button__segment:last-child label{border-radius:0 var(--radius-base, 3px) var(--radius-base, 3px) 0;border-right:1px solid var(--color-background-interactive-default, #4dacff)}.rux-segmented-button__segment:last-child label:hover{border-right-color:var(--color-background-interactive-hover, #92cbff)}";
var name = 0;
var RuxSegmentedButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.segBtnName = `rux-segmented-button-${++name}`;
    this.data = [];
    this.selected = "";
    this.size = void 0;
    this.disabled = false;
  }
  onSelectedChange(newValue) {
    this._setSelected(newValue);
  }
  onDataChange(newValue) {
    if (newValue) {
      const initialSelection = this.data.find((segment) => segment.selected);
      if (initialSelection) {
        this._setSelected(initialSelection.label);
      } else {
        if (!this.selected) {
          this._setSelected(this.data[0].label);
        }
      }
    }
  }
  connectedCallback() {
    this._handleChange = this._handleChange.bind(this);
    const initialSelection = this.data.find((segment) => segment.selected) || this.data[0];
    if (initialSelection) {
      this._setSelected(initialSelection.label);
    }
  }
  _handleChange(e) {
    const el = e.target;
    this._setSelected(el.value);
    this.ruxChange.emit(el.value);
  }
  _setSelected(label) {
    this.data.map((item) => {
      item.selected = item.label === label;
    });
    this.selected = label;
  }
  _slugify(label) {
    label = label.replace(/^\s+|\s+$/g, "");
    label = label.toLowerCase();
    label = label.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
    return label;
  }
  _isSelected(label) {
    if (this.selected === label) {
      return true;
    }
    const selectedData = this.data.find((item) => item.label === label);
    if (selectedData && selectedData.selected) {
      return true;
    }
    return false;
  }
  _handleFocus(e) {
    var _a;
    const target = e.currentTarget;
    target.matches(":focus-visible") ? (_a = target.closest("li")) === null || _a === void 0 ? void 0 : _a.classList.add("--focused") : null;
  }
  _handleBlur(e) {
    var _a;
    const target = e.currentTarget;
    (_a = target.closest("li")) === null || _a === void 0 ? void 0 : _a.classList.remove("--focused");
  }
  render() {
    return h("ul", {
      class: {
        "rux-segmented-button": true,
        "rux-segmented-button--small": this.size === "small",
        "rux-segmented-button--large": this.size === "large"
      }
    }, this.data.map((item) => h("li", {
      class: "rux-segmented-button__segment"
    }, h("input", {
      type: "radio",
      name: this.segBtnName,
      id: this._slugify(item.label),
      value: item.label,
      checked: this._isSelected(item.label),
      "data-label": item.label,
      onChange: this._handleChange,
      disabled: this.disabled,
      onFocus: this._handleFocus,
      onBlur: this._handleBlur
    }), h("label", {
      htmlFor: this._slugify(item.label),
      part: "label",
      class: {
        "rux-segmented-button-label": true,
        "rux-segmented-button-label--small": this.size === "small",
        "rux-segmented-button-label--large": this.size === "large"
      }
    }, item.label))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selected": ["onSelectedChange"],
      "data": ["onDataChange"]
    };
  }
};
RuxSegmentedButton.style = ruxSegmentedButtonCss;
export {
  RuxSegmentedButton as rux_segmented_button
};
//# sourceMappingURL=rux-segmented-button.entry-XYW6YHHC.js.map
