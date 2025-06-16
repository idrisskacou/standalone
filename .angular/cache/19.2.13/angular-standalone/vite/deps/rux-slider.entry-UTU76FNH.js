import {
  hasSlot,
  renderHiddenInput,
  renderHiddenSliderInput
} from "./chunk-JU3STBHB.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-slider.entry.js
var ruxSliderCss = ".rux-help-text{margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-secondary, #d4d8dd);font-size:var(--font-body-2-font-size, 0.875rem);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--font-body-2-line-height, calc(20 / 14));text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2, 0.5rem);color:var(--color-text-error, #ff3838);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-2-bold-font-weight, 700);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));text-align:left}.rux-error-text svg{width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));color:var(--color-text-error, #ff3838);margin-right:var(--spacing-2, 0.5rem);cursor:default}:host{--slider-track-before-thumb-height:var(--spacing-1, 0.25rem);--_slider-thumb-size:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));--_slider-value-percent:50%;--_slider-top:calc(var(--_slider-thumb-size) / -2.4);--_start-value-percent:20%;position:relative;display:flex;flex-grow:1;flex-flow:column;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem)}.hidden,:host([hidden]){display:none}:host([disabled])>.rux-form-field>.rux-slider{opacity:var(--opacity-disabled, 40%);cursor:not-allowed}:host([disabled])>.rux-form-field>.rux-slider .rux-range-overlay{cursor:not-allowed}:host([disabled])>.rux-form-field>#steplist{opacity:var(--opacity-disabled, 40%);cursor:not-allowed}:host([disabled])>.rux-form-field>#steplist .tick-label .axis-label{cursor:not-allowed}.rux-form-field label{margin-bottom:var(--spacing-2, 0.5rem)}.rux-input-label{font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16))}.with-axis-labels{padding-bottom:var(--spacing-8, 2rem)}.rux-slider{display:flex;align-items:center;cursor:pointer;height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));position:relative;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em)}.rux-slider :hover{cursor:pointer}.rux-slider :disabled{cursor:not-allowed}.rux-slider--range input[type=range]{position:absolute;width:100%;height:var(--spacing-025, 0.0625rem);background-color:var(--color-background-interactive-default, #4dacff);pointer-events:none}#steplist{display:grid;padding:var(--spacing-0, 0rem) calc(var(--_slider-thumb-size) / 2);cursor:default}#steplist .tick-label{grid-row:1;width:0;display:flex;flex-direction:column;align-items:center;font-family:var(--font-body-3-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-3-font-size, 0.75rem);line-height:var(--font-body-3-line-height, calc(16 / 12));letter-spacing:var(--font-body-3-letter-spacing, 0.005em);font-weight:var(--font-body-3-font-weight, 400)}#steplist .tick-label .axis-label{padding-top:var(--spacing-1, 0.25rem);cursor:default}#steplist .tick{background:var(--color-background-interactive-default, #4dacff);height:var(--spacing-1, 0.25rem);width:var(--spacing-1, 0.25rem);border-radius:var(--radius-circle, 50%);cursor:default}#steplist .tick-label:not(:first-child):not(:last-child){padding:0}.rux-slider+#steplist{padding:var(--spacing-1, 0.25rem) calc(var(--_slider-thumb-size) / 2)}.rux-range{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;background:none;width:100%;height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));margin:var(--spacing-0, 0rem);color:transparent;position:relative}input[type=range]:focus{outline:none}.rux-range::-webkit-slider-runnable-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-050, 0.125rem);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff)), linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff)), radial-gradient(circle, var(--color-background-interactive-default, #4dacff) 70%, var(--color-background-interactive-default, #4dacff) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1, 0.25rem) var(--spacing-1, 0.25rem);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050, 0.125rem))}.rux-range--dual::-webkit-slider-runnable-track{background-image:none;z-index:1;min-block-size:auto}.rux-range-overlay{position:absolute;height:var(--spacing-1, 0.25rem);background-color:var(--color-background-interactive-default, #4dacff);left:var(--_start-value-percent);width:calc(var(--_slider-value-percent) - var(--_start-value-percent))}.rux-range-overlay:hover{cursor:default}.rux-range:disabled::-webkit-slider-runnable-track{cursor:not-allowed}.rux-range::-moz-range-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-1, 0.25rem);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff)), linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff)), radial-gradient(circle, var(--color-background-interactive-default, #4dacff) 70%, var(--color-background-interactive-default, #4dacff) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1, 0.25rem) var(--spacing-1, 0.25rem);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050, 0.125rem))}.rux-range:disabled::-moz-range-track,.rux-range:disabled::-moz-range-progress{cursor:not-allowed}.rux-input:disabled{cursor:not-allowed}.rux-range::-ms-track{display:flex;align-items:center;max-width:100%;cursor:pointer;border-radius:var(--radius-circle, 50%);min-height:var(--spacing-025, 0.0625rem);max-height:var(--spacing-1, 0.25rem);background-image:linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff)), linear-gradient(var(--color-background-interactive-default, #4dacff), var(--color-background-interactive-default, #4dacff));background-size:var(--_slider-value-percent) var(--slider-track-before-thumb-height), 100% 1px;background-repeat:no-repeat no-repeat;background-position:left, right}.rux-range::-ms-fill-lower{height:var(--spacing-050, 0.125rem);background-color:var(--color-background-interactive-default, #4dacff)}.rux-range::-ms-fill-upper{height:var(--spacing-050, 0.125rem);background-color:var(--color-background-interactive-default, #4dacff)}.rux-range::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923);cursor:pointer;z-index:6;pointer-events:all}.rux-range::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-hover, #92cbff);background-color:var(--color-background-base-default, #101923)}.rux-range:focus-visible::-webkit-slider-thumb{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-range:disabled::-webkit-slider-thumb{cursor:not-allowed}.rux-range:disabled::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-default, #4dacff)}.rux-range:not(:disabled)::-webkit-slider-thumb:active{border-color:var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923)}.rux-range:not(:disabled)::-webkit-slider-thumb:focus,.rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active){background-color:var(--color-background-base-default, #101923)}.rux-range::-moz-range-thumb{-moz-appearance:none;position:relative;box-sizing:border-box;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923);cursor:pointer;z-index:6}.rux-range:not(:disabled)::-moz-range-thumb:active{border-color:var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923)}.rux-range::-moz-range-thumb:hover{border-color:var(--color-background-interactive-hover, #92cbff)}.rux-range:focus-visible::-moz-range-thumb{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-range:disabled::-moz-range-thumb{cursor:not-allowed}.rux-range::-ms-thumb{position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-base-default, #101923);cursor:pointer;z-index:6}.rux-range:disabled::-ms-thumb{cursor:not-allowed}.rux-range:focus-visible::-ms-thumb{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}";
var id = 0;
var RuxSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxInput = createEvent(this, "ruxinput", 7);
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.ruxChange = createEvent(this, "ruxchange", 7);
    this.sliderId = `rux-slider-${++id}`;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.value = (this.max - this.min) / 2 + this.min;
    this.axisLabels = [];
    this.ticksOnly = false;
    this.disabled = false;
    this.name = "";
    this.label = void 0;
    this.helpText = void 0;
    this.errorText = void 0;
    this.minVal = void 0;
    this.strict = false;
  }
  componentWillLoad() {
    this._setValuePercent();
    this._getBrowser(navigator.userAgent.toLowerCase());
    this._handleSlotChange();
  }
  connectedCallback() {
    this._onInput = this._onInput.bind(this);
    this._onMinValInput = this._onMinValInput.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._onChange = this._onChange.bind(this);
    this._handleTrackClick = this._handleTrackClick.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  handleChange() {
    this._setValuePercent();
  }
  handleStep() {
    this.value = this._closestMultiple(this.value);
    if (this.minVal) this.minVal = this._closestMultiple(this.minVal);
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  /**
   * Returns the closest multiple of two given numbers.
   */
  _closestMultiple(x) {
    return Math.round(x / this.step) * this.step;
  }
  //Sets the --slider-value-percent CSS var.
  _setValuePercent() {
    if (this.minVal !== void 0) {
      if (this.minVal > this.value) {
        this.el.style.setProperty("--_slider-value-percent", `${this.minVal}%`);
        this.el.style.setProperty("--_start-value-percent", `${this.value}%`);
      } else {
        this.el.style.setProperty("--_start-value-percent", `${this.minVal}%`);
        this.el.style.setProperty("--_slider-value-percent", `${this.value}%`);
      }
    } else {
      const dif = (this.value - this.min) / (this.max - this.min) * 100;
      this.el.style.setProperty("--_slider-value-percent", `${dif}%`);
    }
  }
  _onInput(e) {
    const target = e.target;
    if (this.value !== void 0) {
      this.value = parseFloat(target.value);
      if (this.value <= this.minVal && this.strict) {
        this.value = this.minVal;
        target.value = this.value.toString();
      }
    }
    this._setValuePercent();
    this.ruxInput.emit();
  }
  _onMinValInput(e) {
    const target = e.target;
    this.minVal = parseFloat(target.value);
    if (this.minVal >= this.value && this.strict) {
      this.minVal = this.value;
      target.value = this.minVal.toString();
    }
    this._setValuePercent();
    this.ruxInput.emit();
  }
  _onChange() {
    this.ruxChange.emit();
  }
  _getBrowser(ua) {
    if (ua.indexOf("safari") > -1 && ua.indexOf("chrome") == -1) {
      this.el.style.setProperty("--_slider-top", "0px");
      this.el.style.setProperty("--slider-tick-padding-top", "7px");
    }
    if (ua.indexOf("firefox") > -1) {
      this.el.style.setProperty("--slider-tick-padding-top", "3px");
    }
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, "label");
    this.hasErrorSlot = hasSlot(this.el, "error-text");
    this.hasHelpSlot = hasSlot(this.el, "help-text");
  }
  _getTickWidths() {
    if (this.axisLabels) {
      const width = 100 / (this.axisLabels.length - 1);
      return width;
    }
  }
  /**
   * Given the position of the click on a dual range slider, move the appropiate thumb to that
   * postion.
   * @param e The click event. This is attatched to the .rux-slider div.
   * @returns Depnding on values and the click location, this will update either
   * minVal or value.
   */
  _handleTrackClick(e) {
    if (this.minVal === void 0 || this.disabled) return;
    const target = e.target;
    if (target.nodeName === "INPUT" || target.classList.contains("rux-range-overlay")) return;
    const currentTarget = e.currentTarget;
    const sliderWidth = currentTarget.offsetWidth;
    const sliderBounds = currentTarget.getBoundingClientRect();
    const clickPosition = e.clientX - sliderBounds.left;
    let percentFromLeft = Math.round(clickPosition / sliderWidth * 100);
    percentFromLeft = this._closestMultiple(percentFromLeft);
    if (percentFromLeft > this.max) percentFromLeft = this.max - this.step;
    let minValPercent = Math.round(this.minVal);
    let maxValPercent = Math.round(this.value);
    if (this.minVal > this.value) {
      minValPercent = Math.round(this.value);
      maxValPercent = Math.round(this.minVal);
    }
    if (percentFromLeft > minValPercent && percentFromLeft < maxValPercent) {
      return;
    }
    let counts = [minValPercent, maxValPercent];
    var closest = counts.reduce(function(prev, curr) {
      return Math.abs(curr - percentFromLeft) < Math.abs(prev - percentFromLeft) ? curr : prev;
    });
    if (this.value === this.minVal) {
      if (percentFromLeft > closest) {
        this.value = percentFromLeft;
      } else {
        this.minVal = percentFromLeft;
      }
    } else {
      if (closest === maxValPercent) {
        this.value = percentFromLeft;
      } else {
        this.minVal = percentFromLeft;
      }
    }
    this.ruxInput.emit();
  }
  render() {
    const {
      el,
      sliderId,
      label,
      errorText,
      helpText,
      hasLabel,
      hasErrorSlot,
      hasHelpSlot,
      _handleSlotChange,
      min,
      max,
      value,
      step,
      disabled,
      name,
      _onInput,
      _onBlur,
      _onChange,
      _handleTrackClick,
      axisLabels,
      _onMinValInput,
      minVal,
      ticksOnly
    } = this;
    renderHiddenInput(true, el, name, JSON.stringify(value), disabled);
    if (minVal !== void 0) {
      renderHiddenSliderInput(true, el, name ? `${name}-min-val` : "", JSON.stringify(minVal), disabled);
    }
    return h(Host, null, h("div", {
      class: "rux-form-field",
      part: "form-field"
    }, hasLabel ? h("label", {
      class: {
        "rux-input-label": true,
        hidden: !hasLabel
      },
      "aria-hidden": hasLabel ? "false" : "true",
      htmlFor: sliderId,
      part: "label"
    }, h("slot", {
      name: "label"
    }, label)) : null, h("div", {
      class: {
        "rux-slider": true,
        "rux-slider--range": minVal !== void 0 ? true : false
      },
      onClick: _handleTrackClick
    }, minVal !== void 0 ? h("input", {
      type: "range",
      class: "rux-range rux-range--dual",
      onInput: _onMinValInput,
      onChange: _onChange,
      disabled,
      min,
      max,
      step,
      value: minVal,
      onBlur: _onBlur
    }) : null, h("input", {
      id: sliderId,
      onInput: _onInput,
      onChange: _onChange,
      type: "range",
      class: {
        "rux-range": true,
        "rux-range--dual": minVal !== void 0 ? true : false
      },
      min,
      max,
      step,
      value,
      disabled,
      "aria-label": "slider",
      "aria-disabled": disabled ? "true" : "false",
      onBlur: _onBlur,
      part: "input"
    }), minVal !== void 0 ? h("div", {
      class: "rux-range-overlay"
    }) : null), axisLabels.length > 0 ? h("datalist", {
      id: "steplist",
      style: {
        gridTemplateColumns: `[tick] repeat(${axisLabels.length - 1}, ${this._getTickWidths()}%)`
      }
    }, axisLabels.map((label2) => {
      return h("div", {
        class: "tick-label",
        part: "tick-container"
      }, h("div", {
        class: "tick",
        part: "tick"
      }), ticksOnly ? null : h("div", {
        class: "axis-label",
        part: "axis-label"
      }, label2));
    })) : null), h("div", {
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
      "value": ["handleChange"],
      "min": ["handleChange"],
      "max": ["handleChange"],
      "minVal": ["handleChange"],
      "step": ["handleStep"]
    };
  }
};
RuxSlider.style = ruxSliderCss;
export {
  RuxSlider as rux_slider
};
//# sourceMappingURL=rux-slider.entry-UTU76FNH.js.map
