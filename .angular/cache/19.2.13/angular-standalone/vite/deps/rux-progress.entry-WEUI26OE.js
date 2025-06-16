import {
  Host,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-progress.entry.js
var ruxProgressCss = ":host{position:relative;display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-0, 0rem);height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem))}:host([hidden]){display:none}.rux-progress[value]{appearance:none;background-color:var(--color-background-surface-default, #1b2d3e);border:1px solid var(--color-background-surface-default, #1b2d3e);border-radius:var(--progress-radius-outer, 10px);box-shadow:0 0 0 1px var(--color-background-interactive-default, #4dacff);height:calc(var(--spacing-4, 1rem) + var(--spacing-050, 0.125rem));width:100%;box-sizing:border-box;overflow:hidden}.rux-progress[value]::-webkit-progress-bar{background-color:transparent}.rux-progress[value]::-webkit-progress-value{border-radius:0 var(--spacing-4, 1rem) var(--spacing-4, 1rem) 0;height:var(--spacing-4, 1rem);max-width:100%;background:var(--color-background-interactive-default, #4dacff);transition:width 0.3s ease;-moz-transition:width 0.3s ease;-webkit-transition:width 0.3s ease;-o-transition:width 0.3s ease}.rux-progress[value]::-ms-fill{border-radius:0 var(--spacing-4, 1rem) var(--spacing-4, 1rem) 0;border:none;height:var(--spacing-4, 1rem);max-width:100%;background-color:var(--color-background-interactive-default, #4dacff)}.rux-progress[value]::-moz-progress-bar{border-radius:0 var(--spacing-4, 1rem) var(--spacing-4, 1rem) 0;height:var(--spacing-4, 1rem);max-width:100%;background:var(--color-background-interactive-default, #4dacff)}.rux-progress__value{font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-weight:var(--font-body-1-font-weight, 400);font-size:var(--font-body-1-font-size, 1rem);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--font-body-1-line-height, calc(24 / 16));margin-left:var(--spacing-2, 0.5rem);text-align:right;color:var(--color-text-primary, #ffffff)}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}";
var RuxProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.value = 0;
    this.max = 100;
    this.hideLabel = false;
  }
  connectedCallback() {
    if (this.value) {
      this._checkValueNotOverMax(this.max, this.value);
    }
  }
  watchHandler() {
    if (this.value) {
      this._checkValueNotOverMax(this.max, this.value);
    }
  }
  _getProgressAsString() {
    if (!this.max) {
      return this.value;
    }
    if (this.value === void 0 || isNaN(this.value)) {
      return "0%";
    } else {
      return this.max === 100 ? `${this.value}%` : `${this.value}/${this.max}`;
    }
  }
  _checkValueNotOverMax(max, value) {
    if (max && max < value) {
      value = max;
      this.value = max;
    }
  }
  render() {
    return h(Host, null, h("progress", {
      class: "rux-progress",
      value: this.value,
      max: this.max,
      part: "progress"
    }), h("output", {
      class: "rux-progress__value",
      hidden: this.hideLabel,
      part: "output"
    }, this._getProgressAsString()), h("slot", null));
  }
  static get watchers() {
    return {
      "value": ["watchHandler"]
    };
  }
};
RuxProgress.style = ruxProgressCss;
export {
  RuxProgress as rux_progress
};
//# sourceMappingURL=rux-progress.entry-WEUI26OE.js.map
