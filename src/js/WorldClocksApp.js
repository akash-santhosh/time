import WorldClock from "./WorldClock.js";
import { WORLD_CITIES } from "../cities.js";

class WorldClocksApp {
  constructor() {
    this.grid = document.getElementById("grid");
    this.clocks = WORLD_CITIES.map(opts => new WorldClock(opts));
    this.clocks.forEach(clock => this.grid.appendChild(clock.el));

    document.addEventListener("visibilitychange", () => {
      this[document.hidden ? "_stop" : "_start"]();
    });

    this._start();
  }

  _start() {
    this.update();  
    this.interval = setInterval(() => this.update(), 1000);
  }

  _stop() {
    clearInterval(this.interval);
  }

  update() {
    this.clocks.forEach(clock => clock.update());
  }
}

new WorldClocksApp();
