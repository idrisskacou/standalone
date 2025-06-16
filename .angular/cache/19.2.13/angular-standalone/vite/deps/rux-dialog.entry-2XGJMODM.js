import {
  hasSlot
} from "./chunk-JU3STBHB.js";
import {
  Fragment,
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-dialog.entry.js
var ruxDialogCss = ":host{display:contents}*,*::before,*::after{box-sizing:inherit}:host([hidden]){display:none}.rux-button-group{margin-left:auto}.rux-button-group rux-button:first-of-type{margin-right:var(--spacing-2, 0.5rem)}.rux-dialog__wrapper{position:fixed;top:var(--spacing-0, 0rem);left:var(--spacing-0, 0rem);height:100vh;width:100vw;display:flex;justify-content:center;align-items:center;z-index:1100;background-color:rgba(0, 0, 0, 0.5);animation:fadeIn 0.5s;-webkit-animation:fadeIn 0.5s;-moz-animation:fadeIn 0.5s;-o-animation:fadeIn 0.5s;-ms-animation:fadeIn 0.5s}.rux-dialog__dialog{position:relative;display:flex;flex-direction:column;justify-content:space-between;background-color:var(--color-background-surface-default, #1b2d3e);width:28rem;border:var(--spacing-0, 0rem);margin:auto;padding:var(--spacing-0, 0rem);user-select:none;box-shadow:var(--shadow-outer-dialog);max-height:100%}.rux-dialog__header{box-sizing:border-box;display:flex;flex-grow:var(--spacing-0, 0rem);flex-shrink:var(--spacing-0, 0rem);align-items:center;width:100%;padding:var(--spacing-4, 1rem);background-color:var(--color-background-surface-header, #172635);color:var(--color-text-primary, #ffffff);user-select:none;font-family:var(--font-heading-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-2-font-size, 1.5rem);line-height:var(--font-heading-2-line-height, calc(28 / 24));font-weight:var(--font-heading-2-font-weight, 400);letter-spacing:var(--font-heading-2-letter-spacing, 0em)}.rux-dialog__header ::slotted(h6),.rux-dialog__header ::slotted(h5),.rux-dialog__header ::slotted(h4),.rux-dialog__header ::slotted(h3),.rux-dialog__header ::slotted(h2),.rux-dialog__header ::slotted(h1){margin-block-start:var(--spacing-0, 0rem);margin-block-end:var(--spacing-0, 0rem)}.rux-dialog__content{display:flex;flex-direction:column;flex-grow:1;color:var(--color-text-primary, #ffffff);overflow:auto;scrollbar-color:var(--color-border-interactive-muted, #2b659b) var(--color-background-surface-default, #1b2d3e);}.rux-dialog__content::-webkit-scrollbar{width:var(--spacing-4, 1rem);height:var(--spacing-4, 1rem);background-color:transparent}.rux-dialog__content::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}.rux-dialog__content::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg, 4px)}.rux-dialog__content::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg, 4px)}.rux-dialog__content::-webkit-scrollbar-thumb:active,.rux-dialog__content::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}.rux-dialog__content::-webkit-scrollbar-track,.rux-dialog__content::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}.rux-dialog__content::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}.rux-dialog__content::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}.rux-dialog__footer{display:flex;flex-direction:column;flex-grow:1;padding:var(--spacing-4, 1rem);color:var(--color-text-primary, #ffffff)}.rux-dialog__message{padding:var(--spacing-4, 1rem) var(--spacing-4, 1rem) var(--spacing-1, 0.25rem) var(--spacing-4, 1rem);font-size:var(--font-body-1-font-size, 1rem);line-height:var(--font-body-1-line-height, calc(24 / 16));text-align:left}.rux-dialog .rux-button{box-shadow:none !important}.rux-dialog__header.hidden{display:none}.rux-dialog__message.hidden{display:none}rux-icon{margin-right:var(--spacing-3, 0.75rem)}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@-ms-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}";
var RuxDialog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxDialogOpened = createEvent(this, "ruxdialogopened", 7);
    this.ruxDialogClosed = createEvent(this, "ruxdialogclosed", 7);
    this._userInput = null;
    this.open = false;
    this.message = void 0;
    this.header = void 0;
    this.confirmText = "Confirm";
    this.denyText = "Cancel";
    this.clickToClose = false;
    this.hasFooter = hasSlot(this.element, "footer");
    this.hasHeader = hasSlot(this.element, "header");
    this.hasMessage = hasSlot(this.element);
  }
  /**
   * Toggles the dialog's open prop.
   */
  toggle() {
    return __async(this, null, function* () {
      this.open = !this.open;
    });
  }
  /**
   * Opens the dialog
   */
  show() {
    return __async(this, null, function* () {
      this.open = true;
    });
  }
  /**
   * Closes the dialog
   */
  hide() {
    return __async(this, null, function* () {
      this.open = false;
    });
  }
  // confirm dialog if Enter key is pressed
  handleKeyDown(ev) {
    var _a;
    if (this.open && !this.hasFooter) {
      const btns = this.element.shadowRoot.querySelectorAll("rux-button");
      if (ev.key === "Enter") {
        let activeEl = (_a = this.element.shadowRoot) === null || _a === void 0 ? void 0 : _a.activeElement;
        if (activeEl && activeEl === btns[0]) {
          this._userInput = false;
          btns[0].click();
        } else {
          const button = this._getDefaultButton();
          if (button) {
            this._userInput = true;
            button.click();
          }
        }
      }
      if (ev.key === "Escape") {
        this._userInput = false;
        btns[0].click();
      }
    }
  }
  // close dialog if click happens outside of dialog
  handleClick(ev) {
    if (this.clickToClose) {
      const wrapper = this._getWrapper();
      if (ev.composedPath()[0] === wrapper) {
        this.open = false;
      }
    }
  }
  handleOpen(isOpen) {
    if (isOpen && !this.hasFooter) {
      setTimeout(() => {
        const button = this._getDefaultButton();
        if (button) {
          button.focus();
        }
      }, 0);
    }
    if (this.open) {
      setTimeout(() => {
        this.ruxDialogOpened.emit();
      }, 20);
    } else {
      this.ruxDialogClosed.emit(this._userInput);
    }
    this._userInput = null;
  }
  _handleDialogChoice(e) {
    const target = e.currentTarget;
    const choice = target.dataset.value === "true";
    this._userInput = choice;
    this.open = false;
  }
  _getDefaultButton() {
    var _a, _b, _c;
    const buttonSet = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll("rux-button:not([hidden])");
    if (buttonSet.length > 0) {
      const defaultButton = buttonSet[buttonSet.length - 1];
      const shadow = (_c = defaultButton.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("button");
      if (shadow) return shadow;
    }
    return null;
  }
  _getWrapper() {
    var _a, _b;
    const wrapper = (_b = (_a = this.element) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector(".rux-dialog__wrapper");
    if (wrapper) {
      return wrapper;
    }
    return null;
  }
  connectedCallback() {
    this._handleDialogChoice = this._handleDialogChoice.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.hasMessage = hasSlot(this.element);
  }
  componentDidRender() {
    const button = this._getDefaultButton();
    button && button.focus();
  }
  _handleSlotChange() {
    this.hasHeader = hasSlot(this.element, "header");
    this.hasMessage = hasSlot(this.element);
    this.hasFooter = hasSlot(this.element, "footer");
  }
  render() {
    const {
      open,
      message,
      header,
      confirmText,
      denyText,
      _handleDialogChoice
    } = this;
    return open && h(Host, null, h("div", {
      part: "container",
      class: "rux-dialog__wrapper"
    }, h("dialog", {
      class: "rux-dialog__dialog",
      role: "dialog",
      part: "dialog"
    }, h("header", {
      class: {
        hidden: !this.hasHeader && header === void 0,
        "rux-dialog__header": true
      },
      part: "header"
    }, h("slot", {
      name: "header",
      onSlotchange: this._handleSlotChange
    }, header)), h("div", {
      class: "rux-dialog__content"
    }, h("div", {
      class: {
        hidden: !this.hasMessage && message === void 0,
        "rux-dialog__message": true
      },
      part: "message"
    }, h("slot", {
      onSlotchange: this._handleSlotChange
    }), !this.hasMessage && message ? h("div", null, message) : null)), h("footer", {
      class: {
        "rux-dialog__footer": true
      },
      part: "footer"
    }, this.hasFooter ? h("slot", {
      name: "footer",
      onSlotchange: this._handleSlotChange
    }) : h(Fragment, null, h("div", {
      class: "rux-button-group"
    }, h("rux-button", {
      secondary: confirmText.length > 0,
      onClick: _handleDialogChoice,
      "data-value": "false",
      hidden: !denyText,
      tabindex: "0",
      exportparts: "container:deny-button",
      id: "rux-dialog-deny-button"
    }, denyText), h("rux-button", {
      onClick: _handleDialogChoice,
      hidden: !confirmText,
      "data-value": "true",
      tabindex: "1",
      exportparts: "container:confirm-button"
    }, confirmText)), h("slot", {
      name: "footer",
      onSlotchange: this._handleSlotChange
    }))))));
  }
  static get delegatesFocus() {
    return true;
  }
  get element() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["handleOpen"]
    };
  }
};
RuxDialog.style = ruxDialogCss;
export {
  RuxDialog as rux_dialog
};
//# sourceMappingURL=rux-dialog.entry-2XGJMODM.js.map
