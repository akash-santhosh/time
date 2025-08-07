

const WORLD_CITIES = [

  {
    timezone: "Asia/Kolkata",
    city: "Kerala",
    country: "India",
    flag: "🇮🇳",
  },
  {
    timezone: "Europe/London",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    timezone: "Australia/Melbourne",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺"
  },
  {
    timezone: "Asia/Dubai",
    city: "Dubai",
    country: "UAE",
    flag: "🇦🇪",
  },
  {
    timezone: "America/Los_Angeles",
    city: "Los Angeles",
    country: "USA",
    flag: "🇺🇸"
  },
  {
    timezone: "America/New_York",
    city: "New York",
    country: "USA",
    flag: "🇺🇸"
 }
];

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { WORLD_CITIES };
}
