import {
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  offset
} from "./chunk-RT6NQ22I.js";
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
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-tooltip.entry.js
var ruxTooltipCss = ":host{--delay:800ms}*{box-sizing:border-box}span{display:contents}.tooltip{display:inline-block;background:var(--tooltip-color-background, #3c3e42);padding:calc(var(--spacing-1, 0.25rem) / 2) var(--spacing-2, 0.5rem);color:var(--tooltip-color-text, #ffffff);width:fit-content;border-radius:var(--tooltip-radius, 1px);z-index:100;width:max-content;position:absolute;top:0;left:0;opacity:1;visibility:visible;transition:opacity 200ms ease-in;font-size:var(--font-body-2-font-size, 0.875rem);line-height:var(--font-body-2-line-height, calc(20 / 14));-webkit-user-select:none;user-select:none}.rux-tooltip__trigger{display:inline;flex-basis:100%}:host([open]) .tooltip{transition-delay:var(--delay);transition-property:opacity}.hidden{opacity:0 !important;visibility:hidden}";
var RuxTooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxTooltipOpened = createEvent(this, "ruxtooltipopened", 7);
    this.ruxTooltipClosed = createEvent(this, "ruxtooltipclosed", 7);
    this.currentSlotted = void 0;
    this.hasTriggerSlot = false;
    this.delegatedFocus = false;
    this.message = "";
    this.open = false;
    this.delay = 800;
    this.offset = 8;
    this.placement = "auto";
    this.disableAutoUpdate = false;
    this.strategy = "absolute";
  }
  handleDelay() {
    !isNaN(Number(this.delay)) && this.el.style.setProperty("--delay", `${Number(this.delay)}ms`);
  }
  handleOpen() {
    if (this.open) {
      this.content.style.display = "block";
      this._startPositioner();
      this.ruxTooltipOpened.emit();
    } else {
      this.content.style.display = "";
      this._stopPositioner();
      this.ruxTooltipClosed.emit();
    }
  }
  handlePlacement() {
    this._startPositioner();
  }
  handleKeypress(e) {
    if (e.key !== "Escape") return;
    const hovered = this.trigger.matches(":hover");
    const focused = this.triggerSlot.contains(document.activeElement);
    if (!hovered && !focused) return;
    if (this.open) {
      this.hide();
    }
  }
  /**
   * Opens the tooltip and returns true.
   */
  show() {
    return __async(this, null, function* () {
      if (this.open) {
        return this.open;
      } else this.open = true;
      return this.open;
    });
  }
  /**
   * Closes the tooltip and returns false.
   */
  hide() {
    return __async(this, null, function* () {
      if (!this.open) {
        return !this.open;
      } else this.open = false;
      return !this.open;
    });
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleTooltipShow = this._handleTooltipShow.bind(this);
    this._handleTooltipHide = this._handleTooltipHide.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener("slotchange", this._handleSlotChange);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  componentDidLoad() {
    this.handleDelay();
    this.handleOpen();
  }
  _position() {
    if (!this.open || !this.triggerSlot || !this.content) {
      return;
    }
    const placementCheck = () => {
      if (!this.disableAutoUpdate) {
        return [offset(this.offset), this.placement === "auto" ? autoPlacement({
          alignment: "start"
        }) : flip()];
      } else if (this.placement === "auto") {
        return [offset(this.offset), autoPlacement({
          alignment: "start"
        })];
      } else {
        return [offset(this.offset)];
      }
    };
    computePosition(this.triggerSlot, this.content, {
      //@ts-ignore
      placement: this.placement,
      strategy: this.strategy,
      middleware: placementCheck()
    }).then(({
      x,
      y
    }) => {
      Object.assign(this.content.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: `${this.strategy}`
      });
    });
  }
  _startPositioner() {
    this._stopPositioner();
    if (this.open) {
      this._position();
      if (!this.disableAutoUpdate) {
        this._positionerCleanup = autoUpdate(this.triggerSlot, this.content, this._position.bind(this));
      }
    }
  }
  _stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = void 0;
    }
  }
  get triggerSlot() {
    var _a, _b;
    if (((_a = this.trigger) === null || _a === void 0 ? void 0 : _a.querySelector("slot").assignedElements({
      flatten: true
    })[0]) !== void 0) {
      return (_b = this.trigger) === null || _b === void 0 ? void 0 : _b.querySelector("slot").assignedElements({
        flatten: true
      })[0];
    }
    return this.trigger;
  }
  get hasTrigger() {
    return this.trigger ? true : this.hasTriggerSlot;
  }
  _handleSlotChange() {
    this.hasTriggerSlot = hasSlot(this.el);
  }
  _handleTooltipShow() {
    if (this.open) return;
    this.open = true;
  }
  _handleTooltipHide() {
    if (!this.open) return;
    this.open = false;
  }
  render() {
    const {
      _handleSlotChange,
      _handleTooltipShow,
      _handleTooltipHide
    } = this;
    return h(Host, null, h("span", {
      onMouseEnter: _handleTooltipShow,
      onMouseLeave: _handleTooltipHide,
      onFocusin: _handleTooltipShow,
      onFocusout: _handleTooltipHide
    }, h("span", {
      class: "rux-tooltip__trigger",
      part: "trigger-container",
      ref: (el) => this.trigger = el,
      "aria-describedby": "tooltip"
    }, h("slot", {
      onSlotchange: _handleSlotChange
    })), h("span", {
      "aria-hidden": this.open ? "false" : "true",
      class: {
        tooltip: true,
        hidden: !this.open
      },
      id: "tooltip",
      role: "tooltip",
      part: "container",
      ref: (el) => this.content = el
    }, this.message)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "delay": ["handleDelay"],
      "open": ["handleOpen"],
      "placement": ["handlePlacement"]
    };
  }
};
RuxTooltip.style = ruxTooltipCss;
export {
  RuxTooltip as rux_tooltip
};
//# sourceMappingURL=rux-tooltip.entry-WOPBB7VX.js.map
