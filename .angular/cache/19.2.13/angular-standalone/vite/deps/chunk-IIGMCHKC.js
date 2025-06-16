// node_modules/@astrouxds/astro-web-components/dist/esm/index-0928580a.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

export {
  getTimezoneOffsetInMilliseconds
};
//# sourceMappingURL=chunk-IIGMCHKC.js.map
