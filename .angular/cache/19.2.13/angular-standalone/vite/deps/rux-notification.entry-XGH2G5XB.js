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

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-notification.entry.js
var StatusSymbol;
(function(StatusSymbol2) {
  StatusSymbol2["CRITICAL"] = "critical";
  StatusSymbol2["SERIOUS"] = "serious";
  StatusSymbol2["CAUTION"] = "caution";
  StatusSymbol2["NORMAL"] = "normal";
  StatusSymbol2["STANDBY"] = "standby";
  StatusSymbol2["OFF"] = "off";
})(StatusSymbol || (StatusSymbol = {}));
var ruxNotificationCss = ":host{--notification-banner-color-border:var(--color-border-interactive-default, #4dacff);--notification-banner-color-background:var(\n      --color-background-base-default\n  );--notification-banner-border-width-left:calc(\n      var(--spacing-3, 0.75rem) - var(--spacing-025, 0.0625rem)\n  );--notification-banner-radius-outer:var(--radius-base, 3px);--notification-banner-radius-inner:calc(var(--radius-base, 3px) / 3 * 2);--notification-banner-border-width-large:var(--spacing-1, 0.25rem);--notification-banner-padding:0 var(--spacing-2, 0.5rem) 0 var(--spacing-4, 1rem);--notification-banner-border-width-small:var(--spacing-050, 0.125rem);--notification-banner-border-outer-width:1px;--notifcation-banner-border-inner-width:3px;--height:var(--spacing-20, 5rem)}:host([open]){display:contents}:host(:not([open])){display:none}.rux-notification-banner{display:flex;align-items:stretch;align-content:center;border-radius:var(--notification-banner-radius-outer, 3px);background:var(--notification-banner-color-border);width:100%;box-sizing:border-box;min-height:var(--height);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem)}.rux-notification-banner__inner{display:flex;align-items:center;align-content:center;box-sizing:border-box;width:100%;border-radius:var(--notification-banner-radius-inner, 2px);background:var(--color-background-base-default, #101923);padding:var(--notification-banner-padding);border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-default, #4dacff);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner__prefix:not(.hidden){display:flex;align-items:center;margin-right:var(--spacing-4, 1rem)}.rux-notification-banner__status.rux-notification-banner--hasPrefixLabel{margin-left:var(--spacing-4, 1rem)}.rux-notification-banner__status{margin-right:var(--spacing-4, 1rem)}.rux-notification-banner__status rux-status{margin:var(--spacing-0, 0rem)}.rux-notification-banner__actions{margin-left:auto;display:flex}.rux-notification-banner__close:focus-visible{border-radius:var(--radius-base, 3px);outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-notification-banner__close{cursor:pointer}.rux-notification-banner--large{border:1px solid var(--notification-banner-color-border-outer-default, #4dacff)}.rux-notification-banner--large .rux-notification-banner__inner{border-color:var(--notification-banner-color-border)}.rux-notification-banner__content{padding:2px 3px 2px 0px}.rux-notification-banner--large .rux-notification-banner__content{font-family:var(--font-heading-5-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-5-font-size, 1.125rem);font-weight:var(--font-heading-5-font-weight, 400);letter-spacing:var(--font-heading-5-letter-spacing, 0em);line-height:var(--font-heading-5-line-height, calc(24 / 18))}.rux-notification-banner--small{min-height:calc(var(--spacing-12, 3rem) + var(--spacing-1, 0.25rem));border:1px solid var(--notification-banner-color-border-outer-default, #4dacff);--notifcation-banner-border-inner-width:1px}.rux-notification-banner--small .rux-notification-banner__inner{border-color:var(--notification-banner-color-border)}.rux-notification-banner--small .rux-notification-banner__content{font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--font-body-1-line-height, calc(24 / 16))}.rux-notification-banner__content{overflow-x:hidden;white-space:nowrap;text-overflow:ellipsis}.rux-notification-banner--critical{border-color:var(--notification-banner-color-border-outer-critical, #ff3838);background:var(--color-status-critical, #ff3838)}.rux-notification-banner--critical .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-critical, #ff3838);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--caution{border-color:var(--notification-banner-color-border-outer-caution, #fce83a);background:var(--color-status-caution, #fce83a)}.rux-notification-banner--caution .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-caution, #fce83a);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--serious{border-color:var(--notification-banner-color-border-outer-serious, #ffb302);background:var(--color-status-serious, #ffb302)}.rux-notification-banner--serious .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-serious, #ffb302);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--normal{border-color:var(--notification-banner-color-border-outer-normal, #56f000);background:var(--color-status-normal, #56f000)}.rux-notification-banner--normal .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-normal, #56f000);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--standby{border-color:var(--notification-banner-color-border-outer-standby, #2dccff);background:var(--color-status-standby, #2dccff)}.rux-notification-banner--standby .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-standby, #2dccff);border-left-width:var(--notification-banner-border-width-left)}.rux-notification-banner--off{border-color:var(--notification-banner-color-border-outer-off, #a4abb6);background:var(--color-status-off, #a4abb6)}.rux-notification-banner--off .rux-notification-banner__inner{border:var(--notifcation-banner-border-inner-width) solid var(--notification-banner-color-border-inner-off, #a4abb6);border-left-width:var(--notification-banner-border-width-left)}";
var RuxNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxClosed = createEvent(this, "ruxclosed", 7);
    this._timeoutRef = null;
    this.hasPrefixSlot = false;
    this.hasMessageSlot = false;
    this.open = false;
    this.message = "";
    this.status = void 0;
    this.closeAfter = void 0;
    this.small = false;
    this.hideClose = false;
  }
  watchHandler() {
    this._updated();
    if (!this.open) {
      this.ruxClosed.emit();
    }
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._updated();
    this.hasMessageSlot = hasSlot(this.el);
  }
  _updated() {
    if (this._closeAfter && this.open) {
      this._timeoutRef = window.setTimeout(() => {
        this.open = false;
      }, this._closeAfter);
    }
  }
  _onClick() {
    if (this._timeoutRef) {
      clearTimeout(this._timeoutRef);
    }
    this.open = false;
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
    this.hasPrefixSlot = hasSlot(this.el, "prefix");
    this.hasMessageSlot = hasSlot(this.el);
  }
  render() {
    return h(Host, null, h("div", {
      class: {
        "rux-notification-banner": true,
        "rux-notification-banner--open": this.open,
        "rux-notification-banner--small": this.small,
        "rux-notification-banner--large": !this.small,
        "rux-notification-banner--caution": this.status === StatusSymbol.CAUTION,
        "rux-notification-banner--critical": this.status === StatusSymbol.CRITICAL,
        "rux-notification-banner--serious": this.status === StatusSymbol.SERIOUS,
        "rux-notification-banner--standby": this.status === StatusSymbol.STANDBY,
        "rux-notification-banner--off": this.status === StatusSymbol.OFF,
        "rux-notification-banner--normal": this.status === StatusSymbol.NORMAL,
        "rux-notification-banner--hasPrefixSlot": this.hasPrefixSlot
      }
    }, h("div", {
      class: {
        "rux-notification-banner__inner": true
      },
      part: "container"
    }, h("div", {
      class: {
        "rux-notification-banner__prefix": true,
        hidden: !this.hasPrefixSlot
      }
    }, h("slot", {
      name: "prefix",
      onSlotchange: this._handleSlotChange
    })), this.status ? h("div", {
      class: "rux-notification-banner__status",
      part: "status"
    }, h("rux-status", {
      status: this.status
    })) : null, h("div", {
      class: {
        "rux-notification-banner__content": true
      },
      part: "message"
    }, h("slot", {
      onSlotchange: this._handleSlotChange
    }), !this.hasMessageSlot && this.message ? h("span", null, this.message) : null), !this.hideClose ? h("div", {
      class: "rux-notification-banner__actions"
    }, h("slot", {
      name: "actions"
    }, h("rux-icon", {
      role: "button",
      tabindex: "1",
      class: "rux-notification-banner__close",
      onClick: () => this._onClick(),
      onKeyDown: (e) => this._onKeyPress(e),
      icon: "clear",
      size: this.small ? "24px" : "32px",
      exportparts: "icon"
    }))) : null)));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["watchHandler"],
      "closeAfter": ["watchHandler"]
    };
  }
};
RuxNotification.style = ruxNotificationCss;
export {
  RuxNotification as rux_notification
};
//# sourceMappingURL=rux-notification.entry-XGH2G5XB.js.map
