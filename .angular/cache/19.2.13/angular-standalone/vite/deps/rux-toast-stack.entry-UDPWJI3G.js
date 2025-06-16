import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-toast-stack.entry.js
var ruxToastStackCss = ":host{position:fixed;z-index:100;max-width:100%;max-height:100%;margin:var(--spacing-3, 0.75rem);margin-block-start:var(--spacing-0, 0rem);overflow:hidden}:host([position=top-right]){top:0;right:0}:host([position=top-left]){top:0;left:0}:host([position=bottom-right]){bottom:0;right:0}:host([position=bottom-left]){bottom:0;left:0}";
var RuxToastStack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.position = "top-right";
  }
  /**
   * adds an individual toast to the stack with the set props passed in as an object
   */
  addToast(props) {
    return __async(this, null, function* () {
      var _a;
      const toast = document.createElement("rux-toast");
      toast.style.transition = "opacity 800ms ease-in 1s";
      for (const key in props) {
        if (props.hasOwnProperty(key)) {
          switch (key) {
            case "message":
              toast.message = props[key];
              break;
            case "hideClose":
              toast.hideClose = props[key];
              break;
            case "closeAfter":
              toast.closeAfter = props[key];
              break;
          }
        }
      }
      (_a = this.el) === null || _a === void 0 ? void 0 : _a.insertBefore(toast, this.el.firstChild);
    });
  }
  get _toastsArray() {
    const toasts = Array.from(this.el.querySelectorAll("rux-toast"));
    return toasts;
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-toast-stack"
    }, h("slot", null)));
  }
  get el() {
    return getElement(this);
  }
};
RuxToastStack.style = ruxToastStackCss;
export {
  RuxToastStack as rux_toast_stack
};
//# sourceMappingURL=rux-toast-stack.entry-UDPWJI3G.js.map
