// node_modules/@astrouxds/astro-web-components/dist/esm/utils-ef146867.js
var hasShadowDom = (el) => {
  return !!el.shadowRoot && !!el.attachShadow;
};
function hasSlot(el, name) {
  if (name) {
    return el.querySelector(`[slot="${name}"]`) !== null;
  }
  return [...el.childNodes].some((node) => {
    var _a;
    if (node.nodeType === node.TEXT_NODE && ((_a = node === null || node === void 0 ? void 0 : node.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== "") {
      return true;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
      const el2 = node;
      if (!el2.hasAttribute("slot") && /*
       * This condition is specifically for checkbox because
       * the hidden input becomes slotted content
       */
      el2.getAttribute("type") !== "hidden") {
        return true;
      }
    }
    return false;
  });
}
var renderHiddenInput = (always, container, name, value, disabled, checked) => {
  let input = container.querySelector("input.aux-input");
  if (always || hasShadowDom(container)) {
    if (checked || checked == void 0) {
      if (!input) {
        input = container.ownerDocument.createElement("input");
        input.type = "hidden";
        input.classList.add("aux-input");
        container.appendChild(input);
      }
      input.disabled = disabled;
      input.name = name;
      input.value = value || "";
    } else {
      if (input) {
        input.remove();
      }
    }
  }
};
var renderHiddenSliderInput = (always, container, name, value, disabled) => {
  let input = container.querySelector(`input[name="${name}"]`);
  if (input) {
    input.value = value;
    input.disabled = disabled;
    input.name = name;
  } else {
    if (always || hasShadowDom(container)) {
      input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add("aux-input");
      input.value = value || "";
      input.disabled = disabled;
      input.name = name;
      container.appendChild(input);
    }
  }
};
var renderHiddenSelect = (always, container, name, value, disabled) => {
  let inputs = container.querySelectorAll("input.aux-select");
  if (inputs) {
    for (const elem of inputs) {
      elem.remove();
    }
  }
  if (always || hasShadowDom(container)) {
    if (Array.isArray(value)) {
      for (const el in value) {
        let input = container.ownerDocument.createElement("input");
        input.type = "hidden";
        input.classList.add("aux-select");
        input.classList.add(`aux-select-${el}`);
        input.disabled = disabled;
        input.name = name;
        if (value[el]) {
          input.value = value[el];
        }
        container.appendChild(input);
      }
    } else {
      let input = container.ownerDocument.createElement("input");
      input.type = "hidden";
      input.classList.add("aux-select");
      input.classList.add(`aux-select-0`);
      input.disabled = disabled;
      input.name = name;
      if (value) {
        input.value = value;
      }
      container.appendChild(input);
    }
  }
};

export {
  hasShadowDom,
  hasSlot,
  renderHiddenInput,
  renderHiddenSliderInput,
  renderHiddenSelect
};
//# sourceMappingURL=chunk-JU3STBHB.js.map
