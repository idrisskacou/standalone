import {
  arrow,
  autoPlacement,
  autoUpdate,
  computePosition,
  flip,
  offset
} from "./chunk-RT6NQ22I.js";
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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-pop-up.entry.js
var ruxPopUpCss = ":host{display:block;width:min-content}.hidden,:host([hidden]){display:none}.hidden{display:none !important}::slotted(*[slot=trigger]){cursor:pointer}::slotted(*[slot=trigger]:focus-visible){border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-popup{font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem);text-align:left}.rux-popup__content{position:absolute;padding:var(--spacing-0, 0rem);border-radius:var(--radius-base, 3px);background:var(--color-background-base-default, #101923);border:1px solid var(--color-border-interactive-muted, #2b659b);transform-style:preserve-3d;z-index:100}.rux-popup__trigger{display:contents}.rux-popup__content--menu{padding:0}.rux-popup__arrow-left{border-right:2px solid var(--color-border-interactive-muted, #2b659b)}.rux-popup__arrow-top{border-bottom:2px solid var(--color-border-interactive-muted, #2b659b)}.rux-popup__arrow-right{border-left:2px solid var(--color-border-interactive-muted, #2b659b)}.rux-popup__arrow-bottom{border-top:2px solid var(--color-border-interactive-muted, #2b659b)}.rux-popup-arrow{position:absolute;background:var(--color-border-interactive-muted, #2b659b);width:var(--spacing-4, 1rem);height:var(--spacing-4, 1rem);transform:translateZ(-1px) rotate(45deg)}";
var RuxPopUp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxPopUpOpened = createEvent(this, "ruxpopupopened", 7);
    this.ruxPopUpClosed = createEvent(this, "ruxpopupclosed", 7);
    this._assignedOutsideClickEvent = false;
    this.open = false;
    this.placement = "auto";
    this.disableAutoUpdate = false;
    this.enableAnimationFrame = false;
    this.strategy = "absolute";
    this.closeOnSelect = false;
    this.arrowPosition = void 0;
  }
  handleOpen() {
    if (this.open) {
      this.content.style.display = "block";
      this._startPositioner();
      this.ruxPopUpOpened.emit();
      if (!this._assignedOutsideClickEvent) {
        window.addEventListener("mousedown", this._handleOutsideClick);
        this._assignedOutsideClickEvent = true;
      }
    } else {
      this.content.style.display = "";
      this._stopPositioner();
      this.ruxPopUpClosed.emit();
      if (this._assignedOutsideClickEvent) {
        window.removeEventListener("mousedown", this._handleOutsideClick);
        this._assignedOutsideClickEvent = false;
      }
    }
  }
  /**
   * Opens the pop up and returns true.
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
   * Closes the pop up and returns false.
   */
  hide() {
    return __async(this, null, function* () {
      if (!this.open) {
        return this.open;
      } else this.open = false;
      return this.open;
    });
  }
  connectedCallback() {
    this._handleTriggerClick = this._handleTriggerClick.bind(this);
    this._handleTriggerKeyPress = this._handleTriggerKeyPress.bind(this);
    this._handleOutsideClick = this._handleOutsideClick.bind(this);
    this._setTriggerTabIndex = this._setTriggerTabIndex.bind(this);
    if (this.open && !this._assignedOutsideClickEvent) {
      window.addEventListener("mousedown", this._handleOutsideClick);
      this._assignedOutsideClickEvent = true;
    }
  }
  componentWillLoad() {
    this._setTriggerTabIndex();
  }
  componentDidRender() {
    if (this.open) {
      this._startPositioner();
    }
  }
  _handleTriggerClick(event) {
    return __async(this, null, function* () {
      if (event.detail > 0) {
        this.open = !this.open;
      }
    });
  }
  //part of focus + accessible keyboard events
  _handleTriggerKeyPress(event) {
    return __async(this, null, function* () {
      if (event.key === "Enter") {
        this.open = !this.open;
      }
    });
  }
  _position() {
    if (!this.open || !this.triggerSlot || !this.content) {
      return;
    }
    const placementCheck = () => {
      if (!this.disableAutoUpdate) {
        return [offset(12), this.placement === "auto" ? autoPlacement({
          alignment: "start"
        }) : flip(), arrow({
          element: this.arrowEl
        })];
      } else if (this.placement === "auto") {
        this.placement = "top";
        return [offset(12), arrow({
          element: this.arrowEl
        })];
      } else {
        return [offset(12), arrow({
          element: this.arrowEl
        })];
      }
    };
    computePosition(this.triggerSlot, this.content, {
      //@ts-ignore
      placement: this.placement,
      strategy: this.strategy,
      middleware: placementCheck()
    }).then(({
      x,
      y,
      placement,
      middlewareData
    }) => {
      Object.assign(this.content.style, {
        left: `${x}px`,
        top: `${y}px`,
        position: `${this.strategy}`
      });
      const {
        x: arrowX,
        y: arrowY
      } = middlewareData.arrow;
      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[placement.split("-")[0]];
      Object.assign(this.arrowEl.style, {
        left: arrowX != null ? `${arrowX}px` : "",
        top: arrowY != null ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        //@ts-ignore
        [staticSide]: "-6px"
      });
    });
    this._setArrowPosition();
  }
  //set a tabindex if the trigger element does not have one, necessary for items that can not natively receive focus
  _setTriggerTabIndex() {
    const triggerEl = this.el.querySelector(`[slot='trigger']`);
    triggerEl.hasAttribute("tabindex") ? null : triggerEl.setAttribute("tabindex", "0");
  }
  _startPositioner() {
    this._stopPositioner();
    if (this.open) {
      this._position();
      this._positionerCleanup = autoUpdate(this.triggerSlot, this.content, this._position.bind(this), {
        animationFrame: this.enableAnimationFrame
      });
    }
  }
  _setArrowPosition() {
    return __async(this, null, function* () {
      const arrowPos = yield this._determineArrowPosition();
      if (this.arrowPosition === arrowPos) {
        return;
      } else this.arrowPosition = arrowPos;
    });
  }
  _determineArrowPosition() {
    return __async(this, null, function* () {
      if (!this.open) {
        return;
      }
      const triggerElRect = yield this.getTriggerRect();
      const arrowDivRect = yield this.getArrowRect();
      if (triggerElRect.bottom > arrowDivRect.bottom && triggerElRect.top < arrowDivRect.top) {
        if (triggerElRect.right > arrowDivRect.right) {
          return "left";
        } else {
          return "right";
        }
      } else {
        if (triggerElRect.bottom > arrowDivRect.bottom) {
          return "top";
        } else {
          return "bottom";
        }
      }
    });
  }
  getTriggerRect() {
    return __async(this, null, function* () {
      return this.triggerSlot.getBoundingClientRect();
    });
  }
  getArrowRect() {
    return __async(this, null, function* () {
      var _a;
      return (_a = this.arrowEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    });
  }
  _stopPositioner() {
    if (this._positionerCleanup) {
      this._positionerCleanup();
      this._positionerCleanup = void 0;
    }
  }
  _handleOutsideClick(e) {
    const menuClick = e.composedPath().includes(this.contentSlot);
    const triggerClick = e.composedPath().includes(this.triggerSlot);
    const popUpClick = e.composedPath().includes(this.el);
    if (!menuClick && !triggerClick && !popUpClick) {
      this.open = false;
    }
  }
  handleSelection() {
    if (this.closeOnSelect) {
      this.open = false;
    }
  }
  get contentSlot() {
    var _a;
    return (_a = this.content) === null || _a === void 0 ? void 0 : _a.querySelector("slot").assignedElements({
      flatten: true
    })[0];
  }
  get triggerSlot() {
    var _a;
    return (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.querySelector("slot").assignedElements({
      flatten: true
    })[0];
  }
  get hasMenu() {
    var _a;
    return !!((_a = this.content) === null || _a === void 0 ? void 0 : _a.querySelector("slot").assignedElements({
      flatten: true
    }).filter((el) => el.tagName.toLowerCase() === "rux-menu")[0]);
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-popup",
      part: "container"
    }, h("div", {
      onClick: this._handleTriggerClick,
      onKeyPress: this._handleTriggerKeyPress,
      class: "rux-popup__trigger",
      ref: (el) => this.trigger = el,
      part: "trigger-container"
    }, h("slot", {
      name: "trigger"
    })), h("div", {
      class: {
        "rux-popup__arrow-left": this.arrowPosition === "left",
        "rux-popup__arrow-top": this.arrowPosition === "top",
        "rux-popup__arrow-right": this.arrowPosition === "right",
        "rux-popup__arrow-bottom": this.arrowPosition === "bottom",
        "rux-popup__content": true,
        "rux-popup__content--menu": this.hasMenu,
        hidden: this.open === false
      },
      "aria-hidden": this.open ? "false" : "true",
      part: "popup-content",
      ref: (el) => this.content = el
    }, h("div", {
      class: "rux-popup-arrow",
      ref: (el) => this.arrowEl = el,
      part: "arrow"
    }), h("slot", null))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["handleOpen"]
    };
  }
};
RuxPopUp.style = ruxPopUpCss;
export {
  RuxPopUp as rux_pop_up
};
//# sourceMappingURL=rux-pop-up.entry-QCHMUONR.js.map
