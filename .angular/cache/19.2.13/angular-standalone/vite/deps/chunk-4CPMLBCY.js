import {
  h
} from "./chunk-2AKL2EQZ.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/MonitoringLabel-4addcddf.js
var collapseNotifications = (value) => {
  const n = Math.floor(value);
  if (n <= 0) return null;
  const thousand = Math.floor(n / 1e3 % 1e3);
  const million = n / 1e6 % 1e6;
  const billion = n / 1e9 % 1e9;
  const trillion = n / 1e12 % 1e12;
  let _shorthand = n.toString();
  if (value > 1e12) {
    _shorthand = "∞";
  } else {
    if (trillion >= 1) {
      _shorthand = "∞";
    } else if (billion >= 1) {
      _shorthand = `${billion.toFixed(1).toString()}B`;
    } else if (million >= 1) {
      _shorthand = `${million.toFixed(1).toString()}M`;
    } else if (thousand >= 1) {
      _shorthand = `${thousand}K`;
    }
  }
  return _shorthand;
};
var MonitoringBadge = ({
  notifications
}) => h("div", {
  class: `rux-advanced-status__badge ${notifications > 0 ? "" : "rux-advanced-status__hidden"}`,
  part: "monitoring-badge"
}, notifications && collapseNotifications(notifications));
var MonitoringLabel = ({
  label,
  sublabel
}) => h("div", {
  class: "rux-advanced-status__label",
  part: "monitoring-label"
}, h("span", null, label), h("span", {
  class: `rux-advanced-status__sublabel ${!sublabel ? "rux-advanced-status__hidden" : ""}`,
  part: "monitoring-sublabel"
}, sublabel));

export {
  MonitoringBadge,
  MonitoringLabel
};
//# sourceMappingURL=chunk-4CPMLBCY.js.map
