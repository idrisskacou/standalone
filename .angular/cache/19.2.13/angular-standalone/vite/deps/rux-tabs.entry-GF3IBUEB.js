import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-tabs.entry.js
var ruxTabsCss = ":host{box-sizing:border-box;display:flex;justify-content:flex-start;height:100%;width:auto;margin:0;padding:0;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}:host(:not(:focus-within)){contain:content;}:host([hidden]){display:none}";
var RuxTabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ruxSelected = createEvent(this, "ruxselected", 7);
    this._panels = [];
    this._tabs = [];
    this.small = void 0;
  }
  // This allows us to hear the selected prop change on tab.
  // Once we hear it, we need to update the related panels visibilty accordingly.
  handleTabselected(e) {
    const target = e.target;
    const children = Array.from(this.el.children);
    if (target.selected && children.includes(target)) {
      const selectedPanel = this._panels.find((panel) => panel.getAttribute("aria-labelledby") === target.getAttribute("id"));
      this._panels.forEach((panel) => panel.classList.add("hidden"));
      selectedPanel === null || selectedPanel === void 0 ? void 0 : selectedPanel.classList.remove("hidden");
    }
    this._checkSelected();
  }
  handleListen(e) {
    const sourcePanel = e.target;
    const sourcePanelLabelId = sourcePanel.getAttribute("aria-labelledby");
    if (sourcePanelLabelId === this.el.id) {
      this._registerPanels(e);
    }
  }
  handleSmallChange() {
    if (this.small) {
      this._tabs.forEach((tab) => tab.setAttribute("small", ""));
    } else {
      this._tabs.forEach((tab) => {
        if (tab.hasAttribute("small")) {
          tab.removeAttribute("small");
        }
      });
    }
  }
  onKeydown(e) {
    var _a;
    const tabs = this._tabs.filter((tab) => !tab.disabled);
    if (e.target && tabs.includes(e.target)) {
      const index = tabs.findIndex((tab) => tab === e.target);
      let next;
      if (["ArrowDown", "ArrowRight"].includes(e.code)) {
        next = index === tabs.length - 1 ? tabs[0] : tabs[index + 1];
      }
      if (["ArrowUp", "ArrowLeft"].includes(e.code)) {
        next = index === 0 ? tabs[tabs.length - 1] : tabs[index - 1];
      }
      if (next && tabs.includes(next)) {
        const nextFocus = (_a = next.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(".rux-tab");
        nextFocus.focus();
      }
    }
  }
  connectedCallback() {
    this._addTabs();
  }
  componentWillUpdate() {
    this._checkSelected();
  }
  _addTabs() {
    var _a;
    this._tabs = Array.from((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll("rux-tab"));
  }
  _checkSelected() {
    const firstTab = this._tabs[0].shadowRoot.querySelector('[part="container"]');
    if (firstTab) {
      firstTab.tabIndex = !this._tabs.find((tab) => tab.selected) || this._tabs[0].hasAttribute("selected") ? 0 : -1;
    }
  }
  _registerPanels(e) {
    this._panels = [];
    e.detail.forEach((panel) => {
      this._panels.push(panel);
    });
    this._addTabs();
    const selectedTab = this._tabs.find((tab) => tab.selected) || this._tabs[0];
    this._setTab(selectedTab);
  }
  _onPress(e) {
    e.key === "Enter" ? this._onClick(e) : null;
  }
  _onClick(e) {
    const target = e.target;
    const tab = target.closest("rux-tab");
    if (tab !== null) {
      this.ruxSelected.emit(tab);
      if (tab.getAttribute("disabled") === null) {
        this._setTab(tab);
      }
    }
  }
  _reset() {
    this._tabs.forEach((tab) => {
      if (tab.parentElement === this.el) tab.selected = false;
    });
    this._panels.forEach((panel) => {
      var _a;
      if (((_a = panel.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute("aria-labelledby")) === this.el.id) panel.classList.add("hidden");
    });
  }
  _setTab(selectedTab) {
    this._reset();
    const selectedPanel = this._panels.find((panel) => panel.getAttribute("aria-labelledby") === selectedTab.getAttribute("id"));
    if (selectedTab) selectedTab.selected = true;
    if (selectedPanel) selectedPanel.classList.remove("hidden");
  }
  render() {
    return h(Host, {
      onClick: (e) => this._onClick(e),
      onKeyPress: (e) => this._onPress(e),
      role: "tablist"
    }, h("slot", {
      onSlotchange: this._addTabs.bind(this)
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "small": ["handleSmallChange"]
    };
  }
};
RuxTabs.style = ruxTabsCss;
export {
  RuxTabs as rux_tabs
};
//# sourceMappingURL=rux-tabs.entry-GF3IBUEB.js.map
