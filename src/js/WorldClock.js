export default class WorldClock {
  constructor({ timezone, city, country }) {
    this.timezone = timezone;
    this.city = city;
    this.country = country;
    this.el = document.createElement("div");
    this.el.className = "clock";
    this.el.innerHTML = \`<div class="label">\${city}, \${country}</div><div class="time"></div>\`;
  }

  update() {
    const now = new Intl.DateTimeFormat("en-GB", {
      timeZone: this.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());
    this.el.querySelector(".time").textContent = now;
  }
}
