import {
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes
} from "./chunk-KM3PTPTG.js";
import {
  requiredArgs
} from "./chunk-LENAR7IN.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-2AKL2EQZ.js";
import "./chunk-QHQP2P2Z.js";

// node_modules/@astrouxds/astro-web-components/dist/esm/rux-track.entry.js
function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1e3;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
var ruxTrackCss = ".rux-track{background:var(--color-background-surface-default, #1b2d3e);width:fit-content;border-bottom:2px solid var(--color-background-base-default, #101923)}.rux-track__header{box-sizing:border-box;padding:11px 8px 13px 8px;background:var(--color-background-surface-default, #1b2d3e);border-right:2px solid var(--color-background-base-default, #101923);display:flex;align-items:center;font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);position:sticky;left:0;min-width:184px;z-index:2}.rux-timeline{scrollbar-color:var(--color-border-interactive-muted, #2b659b);position:relative;display:grid;grid-template-rows:auto;background:var(--color-background-surface-default, #1b2d3e)}.rux-track__played{grid-row-start:1;grid-column-start:2;grid-row-end:auto;background:var(--color-background-surface-selected, #1c3f5e)}.hidden{display:none}";
var RuxTrack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hasRuler = false;
    this.width = 0;
    this.columns = 0;
    this.interval = void 0;
    this.start = "";
    this.end = "";
    this.timezone = "UTC";
    this.playhead = void 0;
  }
  handleUpdate(_newValue, old) {
    if (old) {
      this.initializeRows();
    }
  }
  handlePlayheadChange() {
    this.initializeRows();
  }
  handleTimezoneUpdate() {
    this.initializeRows();
  }
  handleTimeRegionChange(e) {
    this.initializeRows();
    e.stopPropagation();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  /**
   * Tracks are displayed as a (CSS) grid of cells.
   * Each cell can represent a minute or hour depending on the interval.
   */
  _calculateGridColumnFromTime(time) {
    if (this.start) {
      const timelineStart = new Date(this.start);
      if (this.interval === "hour") {
        const difference = Math.abs(differenceInMinutes(timelineStart, new Date(time)));
        return difference + 2;
      }
      if (this.interval === "minute") {
        const difference = Math.abs(differenceInSeconds(timelineStart, new Date(time)));
        return difference + 2;
      }
      if (this.interval === "day") {
        const difference = Math.abs(differenceInHours(timelineStart, new Date(time)));
        return difference + 2;
      }
    }
    return 0;
  }
  _validateTimeRegion(start, end) {
    if (!start) {
      return {
        success: false,
        error: "Time Region must have a start date provided"
      };
    }
    if (!end) {
      return {
        success: false,
        error: "Time Region must have a end date provided"
      };
    }
    if (new Date(start) > new Date(end)) {
      return {
        success: false,
        error: `The Time Region start date must be before the end date: ${start} - ${end}`
      };
    }
    if (new Date(start) > new Date(this.end)) {
      return {
        success: false,
        error: `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`
      };
    }
    if (new Date(start) < new Date(this.start) && new Date(end) < new Date(this.start)) {
      return {
        success: false,
        error: `The Time Region start and end dates do not fall within the Timeline's range: ${start} - ${end}`
      };
    }
    return {
      success: true
    };
  }
  /**
   * Time Regions are dumb and don't know anything about the grid.
   * The Track is responsible for lining up the Time Regions with the grid.
   */
  initializeRows() {
    if (this.playhead) {
      this.playedIndicator.style.gridColumnEnd = this._calculateGridColumnFromTime(this.playhead).toString();
    }
    const children = [...this.el.children].filter((el) => el.tagName.toLowerCase() === "rux-time-region");
    children.forEach((el) => {
      const isHidden = el.style.visibility === "hidden";
      const isValid = this._validateTimeRegion(el.start, el.end);
      let start = el.start;
      let end = el.end;
      if (isValid.success) {
        if (el.start < this.start && el.end > this.end) {
          el.partial = "ongoing";
          start = this.start;
          end = this.end;
        } else if (el.start < this.start) {
          el.partial = "start";
          start = this.start;
        } else if (el.end > this.end) {
          el.partial = "end";
          end = this.end;
        } else {
          el.partial = "none";
        }
        el.timezone = this.timezone;
        el.style.gridRow = "1";
        el.style.display = "block";
        const gridColumn = `${this._calculateGridColumnFromTime(start)} / ${this._calculateGridColumnFromTime(end)}`;
        el.style.gridColumn = gridColumn;
      } else {
        if (!isHidden) {
          el.style.display = "none";
        }
      }
    });
  }
  _handleSlotChange() {
    this.initializeRows();
    const hasRuler = [...this.el.children].find((el) => el.tagName.toLowerCase() === "rux-ruler");
    this.hasRuler = !!hasRuler;
  }
  render() {
    return h(Host, null, h("div", {
      class: "rux-timeline rux-track",
      style: {
        gridTemplateColumns: `[header] 200px repeat(${this.columns}, ${this.width}px)`
      },
      part: "container"
    }, h("div", {
      class: "rux-track__header",
      part: "track-header",
      style: {
        gridRow: "1"
      }
    }, h("slot", {
      name: "label"
    })), h("slot", {
      onSlotchange: this._handleSlotChange
    }), h("div", {
      class: {
        "rux-track__played": this.playhead,
        hidden: this.hasRuler
      },
      ref: (el) => this.playedIndicator = el
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "start": ["handleUpdate"],
      "end": ["handleUpdate"],
      "interval": ["handleUpdate"],
      "playhead": ["handlePlayheadChange"],
      "timezone": ["handleTimezoneUpdate"]
    };
  }
};
RuxTrack.style = ruxTrackCss;
export {
  RuxTrack as rux_track
};
//# sourceMappingURL=rux-track.entry-WU7FPT34.js.map
