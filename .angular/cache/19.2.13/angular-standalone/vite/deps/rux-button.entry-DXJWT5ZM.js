import {
  hasShadowDom
} from "./chunk-JU3STBHB.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-button.entry.js
var ruxButtonCss = ":host{display:inline-block;width:auto}:host([hidden]){display:none}:host([disabled]){pointer-events:none}.rux-button{border:none;display:flex;position:relative;margin:var(--spacing-0, 0rem);width:inherit;padding:var(--spacing-2, 0.5rem) var(--spacing-4, 1rem);border-radius:var(--radius-base, 3px);color:var(--color-text-inverse, #080c11);font-family:var(--font-control-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-control-body-1-font-size, 1rem);font-weight:var(--font-control-body-1-font-weight, 400);line-height:var(--font-control-body-1-line-height, calc(20 / 16));letter-spacing:var(--font-control-body-1-letter-spacing, 0.005em);white-space:nowrap;text-overflow:ellipsis;justify-content:center;align-items:center;user-select:none}.rux-button rux-icon,.rux-button ::slotted(rux-icon){height:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));width:calc(var(--spacing-4, 1rem) + var(--spacing-1, 0.25rem));margin-right:var(--spacing-1, 0.25rem);color:var(--color-text-inverse, #080c11)}.rux-button:disabled{opacity:var(--opacity-disabled, 40%);cursor:not-allowed;pointer-events:none}.rux-button:focus-visible{outline:var(--border-width-focus-default, 1px) solid var(--color-border-focus-default, #da9ce7);outline-offset:var(--spacing-focus-default, 0.125rem)}.rux-button:hover:not([disabled]){cursor:pointer}.rux-button--default{background-color:var(--color-background-interactive-default, #4dacff)}.rux-button--default:hover:not([disabled]){border-color:transparent;background-color:var(--color-background-interactive-hover, #92cbff)}.rux-button--default:active:not([disabled]){border-color:var(--color-background-interactive-default, #4dacff);background-color:var(--color-background-interactive-default, #4dacff)}.rux-button--secondary{color:var(--color-background-interactive-default, #4dacff);background-color:transparent;box-shadow:var(--color-border-interactive-default, #4dacff) 0 0 0 1px inset}.rux-button--secondary:hover:not([disabled]){color:var(--color-background-interactive-hover, #92cbff);background-color:transparent;box-shadow:var(--color-background-interactive-hover, #92cbff) 0 0 0 1px inset}.rux-button--secondary:hover:not([disabled]) rux-icon,.rux-button--secondary:hover:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-hover, #92cbff)}.rux-button--secondary:active:not([disabled]){box-shadow:var(--color-background-interactive-default, #4dacff) 0 0 0 1px inset;background-color:transparent;color:var(--color-background-interactive-default, #4dacff)}.rux-button--secondary:active:not([disabled]) rux-icon,.rux-button--secondary:active:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-default, #4dacff)}.rux-button--secondary rux-icon,.rux-button--secondary ::slotted(rux-icon){color:var(--color-background-interactive-default, #4dacff)}.rux-button--borderless{color:var(--color-background-interactive-default, #4dacff);box-shadow:none;background:none}.rux-button--borderless:hover:not([disabled]){color:var(--color-background-interactive-hover, #92cbff);background:none}.rux-button--borderless:hover:not([disabled]) rux-icon,.rux-button--borderless:hover:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-hover, #92cbff)}.rux-button--borderless:active:not([disabled]){color:var(--color-background-interactive-default, #4dacff)}.rux-button--borderless:active:not([disabled]) rux-icon,.rux-button--borderless:active:not([disabled]) ::slotted(rux-icon){color:var(--color-background-interactive-default, #4dacff)}.rux-button--borderless rux-icon,.rux-button--borderless ::slotted(rux-icon){color:var(--color-background-interactive-default, #4dacff)}.rux-button--small{padding:var(--spacing-1, 0.25rem) var(--spacing-4, 1rem)}.rux-button--small.rux-button--icon-only{padding:var(--spacing-1, 0.25rem)}.rux-button--large{padding:var(--spacing-3, 0.75rem) var(--spacing-4, 1rem)}.rux-button--large.rux-button--icon-only{padding:var(--spacing-3, 0.75rem)}.rux-button--icon-only{font-size:0;padding:var(--spacing-2, 0.5rem)}.rux-button--icon-only ::slotted(rux-icon),.rux-button--icon-only rux-icon{margin:0}";
var RuxButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleClick = (ev) => {
      if (hasShadowDom(this.el)) {
        const form = this.el.closest("form");
        if (form) {
          ev.preventDefault();
          const fakeButton = document.createElement("button");
          fakeButton.type = this.type;
          fakeButton.style.display = "none";
          form.appendChild(fakeButton);
          fakeButton.click();
          fakeButton.remove();
        }
      }
    };
    this.icon = void 0;
    this.iconOnly = false;
    this.secondary = false;
    this.disabled = false;
    this.borderless = false;
    this.size = void 0;
    this.type = "button";
  }
  render() {
    const {
      size,
      iconOnly,
      secondary,
      disabled,
      icon,
      borderless
    } = this;
    return h(Host, null, h("button", {
      type: "button",
      onClick: this.handleClick,
      class: {
        "rux-button": true,
        "rux-button--secondary": secondary,
        "rux-button--default": !secondary,
        "rux-button--small": size === "small",
        "rux-button--large": size === "large",
        "rux-button--icon-only": iconOnly,
        "rux-button--borderless": borderless
      },
      "aria-disabled": disabled ? "true" : null,
      disabled,
      part: "container"
    }, icon ? h("rux-icon", {
      size: "auto",
      icon,
      exportparts: "icon",
      color: secondary ? "primary" : "dark"
    }) : null, h("slot", null)));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
};
RuxButton.style = ruxButtonCss;
export {
  RuxButton as rux_button
};
//# sourceMappingURL=rux-button.entry-DXJWT5ZM.js.map
