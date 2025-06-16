import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-status.entry.js
var caution = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="8" height="8" fill="var(--caution-fill, #fce83a)" stroke="var(--caution-border, #fce83a)"/></svg>';
var critical = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00012 10.9558L0.842393 1.5L11.1579 1.5L6.00012 10.9558Z" fill="var(--critical-fill, #ff3838)" stroke="var(--critical-border, #ff3838)"/></svg>';
var normal = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="4" fill="var(--normal-fill, #56f000)" stroke="var(--normal-border, #56f000)"/></svg>';
var off = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3" fill="var(--off-fill, #a4abb6)" stroke="var(--off-border, #a4abb6)"/></svg>';
var serious = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.05029" y="6" width="7.3" height="7.3" transform="rotate(-45 1.05029 6)" fill="var(--serious-fill, #ffb302)" stroke="var(--serious-border, #ffb302)"/></svg>';
var standby = '<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99988 10C8.20902 10 9.99988 8.20914 9.99988 6C9.99988 3.79086 8.20902 2 5.99988 2C3.79074 2 1.99988 3.79086 1.99988 6C1.99988 8.20914 3.79074 10 5.99988 10ZM5.99996 7.99999C7.10453 7.99999 7.99996 7.10456 7.99996 5.99999C7.99996 4.89542 7.10453 3.99999 5.99996 3.99999C4.89539 3.99999 3.99996 4.89542 3.99996 5.99999C3.99996 7.10456 4.89539 7.99999 5.99996 7.99999Z" fill="var(--standby-fill, #2dccff)"/><path d="M10 6C10 8.20914 8.20914 10 6 10V11C8.76142 11 11 8.76142 11 6H10ZM6 2C8.20914 2 10 3.79086 10 6H11C11 3.23858 8.76142 1 6 1V2ZM2 6C2 3.79086 3.79086 2 6 2V1C3.23858 1 1 3.23858 1 6H2ZM6 10C3.79086 10 2 8.20914 2 6H1C1 8.76142 3.23858 11 6 11V10ZM7 6C7 6.55228 6.55228 7 6 7V8C7.10457 8 8 7.10457 8 6H7ZM6 5C6.55228 5 7 5.44772 7 6H8C8 4.89543 7.10457 4 6 4V5ZM5 6C5 5.44772 5.44772 5 6 5V4C4.89543 4 4 4.89543 4 6H5ZM6 7C5.44772 7 5 6.55228 5 6H4C4 7.10457 4.89543 8 6 8V7Z" fill="var(--standby-border, #2dccff)" fill-opacity="var(--standby-fill-opacity, 0)"/></svg>';
var StatusSVG = {
  caution,
  critical,
  normal,
  off,
  serious,
  standby
};
var ruxStatusCss = ":host{display:block}:host([hidden]){display:none}*,*::before,*::after{box-sizing:border-box}.status-wrapper{width:var(--spacing-3, 0.75rem);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);line-height:var(--line-height-base, 1.5rem)}";
var RuxStatus = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.status = "normal";
  }
  validateStatus(newValue) {
    const statusTypes = {
      off: true,
      standby: true,
      normal: true,
      caution: true,
      serious: true,
      critical: true
    };
    if (!statusTypes[newValue]) {
      throw new Error(`rux-status: status of ${this.status} is not valid. Please use a valid status.`);
    }
  }
  connectedCallback() {
    if (this.status) this.validateStatus(this.status);
  }
  render() {
    return h(Host, {
      status: this.status
    }, h("div", {
      part: "status",
      class: "status-wrapper",
      innerHTML: this.status && StatusSVG[this.status]
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "status": ["validateStatus"]
    };
  }
};
RuxStatus.style = ruxStatusCss;
export {
  RuxStatus as rux_status
};
//# sourceMappingURL=rux-status.entry-2VZ66NUJ.js.map
