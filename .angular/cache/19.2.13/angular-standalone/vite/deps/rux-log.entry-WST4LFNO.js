import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-log.entry.js
var ruxLogCss = ":host{display:block;overflow:hidden}:host([hidden]){display:none}.rux-log{border:1px solid var(--log-color-border, #000000)}.rux-log__header-event-cell{width:80%}.header-event-container{display:flex;align-items:center}.rux-log__filter{margin-left:auto;width:170px}rux-datetime{min-width:calc(var(--spacing-20, 5rem) - var(--spacing-050, 0.125rem));display:inline-block}rux-status{margin:var(--spacing-0, 0rem) var(--spacing-1, 0.25rem)}rux-table-header-cell{width:1%;border-width:1px;border-style:solid;border-color:var(--color-background-base-default, #101923);height:calc( var(--spacing-10, 2.5rem) + var(--spacing-1, 0.25rem) - 2px )}rux-table-cell{height:calc(var(--spacing-8, 2rem) - 1px)}.rux-log__notification{width:2000%;align-content:center;color:var(--color-text-inverse, #080c11);background-color:var(--color-background-interactive-default, #4dacff);padding:var(--spacing-2, 0.5rem)}";
var RuxLog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.data = [];
    this.timezone = "UTC";
    this.filter = void 0;
  }
  syncFilter() {
    if (this.inputEl.value !== this.filter) {
      this.inputEl.value = this.filter || "";
    }
  }
  _setFilter(e) {
    this.filter = e.target.value;
  }
  get filteredData() {
    if (this.filter) {
      const filter = this.filter;
      return this.data.filter((row) => row.message.toLowerCase().includes(filter.toLowerCase()));
    } else {
      return this.data;
    }
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-log"
    }, h("slot", {
      name: "table"
    }, h("rux-table", null, h("slot", {
      name: "table-header"
    }, h("rux-table-header", {
      class: "relative"
    }, h("slot", {
      name: "table-header-row"
    }, h("rux-table-header-row", null, h("rux-table-header-cell", null, "Time"), h("rux-table-header-cell", null), h("rux-table-header-cell", {
      class: "rux-log__header-event-cell"
    }, h("div", {
      class: "header-event-container"
    }, "Event", h("rux-input", {
      size: "small",
      class: "rux-log__filter",
      type: "search",
      placeholder: "Search...",
      ref: (el) => this.inputEl = el,
      onRuxinput: (event) => this._setFilter(event)
    }))))))), this.filter && h("div", {
      class: "rux-log__notification",
      part: "log-notification"
    }, "A filter with ", h("b", null, this.filter), " is enabled.", " ", this.data.length - this.filteredData.length, " ", "of ", this.data.length, " records are currently hidden."), h("slot", {
      name: "table-body"
    }, h("rux-table-body", null, this.filteredData.map((row) => h("rux-table-row", null, h("rux-table-cell", null, h("rux-datetime", {
      hour: "2-digit",
      "time-zone": this.timezone,
      minute: "2-digit",
      second: "2-digit",
      date: row.timestamp
    })), h("rux-table-cell", null, h("rux-status", {
      status: row.status
    })), h("rux-table-cell", null, row.message)))))))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "filter": ["syncFilter"]
    };
  }
};
RuxLog.style = ruxLogCss;
export {
  RuxLog as rux_log
};
//# sourceMappingURL=rux-log.entry-WST4LFNO.js.map
