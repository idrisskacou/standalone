import {
  hasSlot
} from "./chunk-JU3STBHB.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-toast.entry.js
var ruxToastCss = ":host{display:contents;--height:auto}.rux-toast{display:flex;align-items:center;align-content:center;box-sizing:border-box;width:calc((var(--spacing-20, 5rem) * 3) + (var(--spacing-10, 2.5rem)));border-radius:var(--radius-base, 3px);background:var(--color-background-base-default, #101923);padding:calc(var(--spacing-4, 1rem) + var(--spacing-050, 0.125rem)) var(--spacing-2, 0.5rem) calc(var(--spacing-4, 1rem) + var(--spacing-050, 0.125rem)) var(--spacing-4, 1rem);margin-block-start:var(--spacing-3, 0.75rem);min-height:calc(var(--spacing-14, 3.5rem) + var(--spacing-1, 0.25rem));height:var(--height);border:var(--border-width-xs, 1px) solid var(--color-border-interactive-default, #4dacff);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);opacity:inherit}.rux-toast__actions{margin-left:auto;margin-bottom:auto;display:flex}.rux-toast__close:focus-visible{border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-toast__close{cursor:pointer}";
var RuxToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxToastOpen = createEvent(this, "ruxtoastopen", 7);
    this.ruxToastClosed = createEvent(this, "ruxtoastclosed", 7);
    this._timeoutRef = null;
    this.hasMessageSlot = false;
    this.message = "";
    this.closeAfter = void 0;
    this.hideClose = false;
  }
  watchHandler() {
    this._updated();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._updated();
    this.hasMessageSlot = hasSlot(this.el);
    this._onClick = this._onClick.bind(this);
    this._onKeyPress = this._onKeyPress.bind(this);
  }
  componentDidLoad() {
    this._handleOpen();
  }
  _handleOpen() {
    this.ruxToastOpen.emit();
  }
  _handleClose() {
    this.ruxToastClosed.emit();
    this.el.remove();
  }
  _updated() {
    if (this._closeAfter) {
      this._timeoutRef = window.setTimeout(() => {
        this._handleClose();
      }, this._closeAfter);
    }
  }
  _onClick() {
    if (this._timeoutRef) {
      clearTimeout(this._timeoutRef);
    }
    this._handleClose();
  }
  _onKeyPress(e) {
    if (e.key === "Enter") {
      this._onClick();
    }
  }
  get _closeAfter() {
    if (this.closeAfter && this.closeAfter <= 999) {
      this.closeAfter *= 1e3;
    }
    if (this.closeAfter && this.closeAfter > 1e4 || this.closeAfter && this.closeAfter < 2e3) {
      this.closeAfter = 2e3;
    }
    return this.closeAfter;
  }
  _handleSlotChange() {
    this.hasMessageSlot = hasSlot(this.el);
  }
  render() {
    return h(Host, null, h("div", {
      class: {
        "rux-toast": true
      },
      part: "container"
    }, h("div", {
      class: {
        "rux-toast__content": true
      },
      part: "message"
    }, h("slot", {
      onSlotchange: this._handleSlotChange
    }), !this.hasMessageSlot && this.message ? h("span", null, this.message) : null), !this.hideClose ? h("div", {
      class: "rux-toast__actions"
    }, h("rux-icon", {
      role: "button",
      tabindex: "1",
      class: "rux-toast__close",
      onClick: this._onClick,
      onKeyDown: this._onKeyPress,
      icon: "clear",
      exportparts: "icon",
      size: "16px"
    })) : null));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "closeAfter": ["watchHandler"]
    };
  }
};
RuxToast.style = ruxToastCss;
export {
  RuxToast as rux_toast
};
//# sourceMappingURL=rux-toast.entry-NGEXN3XO.js.map
