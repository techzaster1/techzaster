const routes = ["home", "socials", "collection"];
const $ = (s) => document.querySelector(s);

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function navigate() {
  const route = location.hash.slice(1) || "home";
  const current = routes.includes(route) ? route : "home";
  routes.forEach(r => document.getElementById(r)?.classList.toggle("active", r === current));
  document.querySelectorAll("nav a").forEach(a => a.classList.toggle("active", a.dataset.route === current));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("hashchange", navigate);

$("#year").textContent = new Date().getFullYear();

const collectionData = [
  ["Samsungs", [
    "Samsung Galaxy S1", "Samsung Galaxy S1 Plus", "Samsung Galaxy S2", "Samsung Galaxy S3 (LCD Replacement Screen)",
    "Samsung Galaxy S4", "Samsung Galaxy S4 Live Demo Unit (Functional)", "Samsung Galaxy S4 Live Demo Unit (Defective)", "Samsung Galaxy S4 Mini",
    "Samsung Galaxy S4 Zoom (currently broken, will be fixed soon)", "Samsung Galaxy S5", "Samsung Galaxy S6", "Samsung Galaxy S6 Edge", "Samsung Galaxy S7 Edge",
    "Samsung Galaxy S8 (LCD Replacement Screen)", "Samsung Galaxy S9 (LCD Replacement Screen)", "Samsung Galaxy S20+ (Broken OLED but Works)",
    "Samsung Galaxy Z Flip4 (Hinge Issues but Works)", "Samsung Galaxy Note Edge (Cracked a bit but Works)", "Samsung Galaxy Note 2 (its missing its battery and S-pen but it works)",
    "Samsung Galaxy Note FE (Bad Touch with S-Pen but Works)", "Samsung Galaxy Hennessy", "Samsung M8800 Pixon (Slightly Bad LCD but Works)", "Samsung GT-S3100 (No Battery but Works)",
    "Samsung Galaxy Beam", "Samsung Galaxy Alpha", "Samsung Galaxy S Duos (no Battery but Works)", "Samsung Galaxy Trend", "Samsung Galaxy Core",
    "Samsung Galaxy Xcover (no Battery but Works)", "Samsung Galaxy Young", "Samsung Galaxy Ace", "Samsung Galaxy J1 2015", "Samsung Galaxy J5 2016",
    "Samsung Galaxy J5 2017", "Samsung Galaxy J5 2017 (No Screen but Works, maybe For Parts too)", "Samsung Galaxy J6+ (Graphical Glithces sometimes but Works)",
    "Samsung Galaxy J3 2016", "Samsung Galaxy A10", "Samsung Galaxy A12 (Untested, doesn't show any signs when plugged in)", "Samsung Galaxy A5 2014",
    "Samsung Galaxy A5 2017", "Samsung Galaxy Round"
  ]],
  ["iPhones", ["iPhone 2G (No Battery but Works)", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 4S", "iPhone 5", "iPhone 5S", "iPhone 5C", "iPhone 6", "iPhone 6S", "iPhone 6 Plus (Touchscreen Issues sometimes but Works)", "iPhone 7", "iPhone SE 2016", "iPhone 8", "iPhone X (LCD Screen Replacement, No FaceID but Works)", "iPhone 11 Pro (LCD Screen Replacement but Works)"]],
  ["LGs", ["LG G2", "LG G3", "LG G5", "LG G Flex (Network Locked but Works)", "LG D160", "LG Optimus L3", "LG K51S (Screen cracked but it works)"]],
  ["Sonys", ["Sony Xperia P", "Sony Xperia J", "Sony Xperia C4 (No Speaker sound But Works)", "Sony Xperia Tipo (Touchscreen Issues, could be an issue with most of the Units, but Works)"]],
  ["Blackberries", ["Blackberry Z13 (SIM Reader Issues but Works)", "Blackberry Classic Q20", "Blackberry Bold Touch 9900 (Battery could be Faulty but Works)"]],
  ["Motorolas", ["Motorola Moto E", "Motorola Razr V3 (No Charger but Works)", "Motorola 2019 Razr (Faulty cameras)"]],
  ["HTCs", ["HTC Wildfire (Network Locked but Works)", "HTC Wildfire S (Network Locked or SIM Reader Issues but Works)", "HTC Desire 828 (Cracked Touch but Works)", "HTC U Play (FRP Bypassed but Fully Works)", "HTC One M8 (Cracked Touch, Missing a few Buttons, Cameras Vibrating but Works)", "HTC Dream (T-Mobile G1) (Has charging issues but it works)"]],
  ["Huaweis", ["Huawei G6600 (Faulty)", "Huawei P8 Lite"]],
  ["Nokias", ["Nokia 3410 (Untested)", "Nokia 2760", "Nokia 220 RM-970", "Nokia Lumia 625", "Nokia Lumia 520", "Nokia 5", "Fake Nokia 3310 (No Battery, Probably Works)", "Nokia Asha 305"]],
  ["Alcatels", ["Alcatel One Touch 2012 (Faulty)", "Alcatel One Touch Pixi 4"]],
  ["Allviews", ["Allview M20 Luna (Cracked LCD but Works)", "Allview V2 Viper X"]],
  ["Other Phones", ["Nothing Phone 1", "North Korean Blue Sky Phone", "Sharp Aquos Crystal (Network Locked but Works)", "NEC Medias W", "Philips S309", "Acer Z130", "Lenovo A1000", "Airis Pocket PC", "Karbonn K-Flip (Faulty)", "Kruger&Matz Live 2", "ZTE Axon M", "VFD 500"]],
  ["Miscellaneous (Tablets)", ["iPad 2", "iPad Mini 1st gen", "Amazon Kindle Fire 1st gen", "Samsung Galaxy Tab 2 10.1 inch", "Samsung Galaxy Tab A7 Lite", "Samsung Galaxy Tab S6 Lite"]]
];

function renderCollection() {
  const grid = document.querySelector("#collection-grid");
  if (!grid) return;
  const total = collectionData.reduce((sum, [, devices]) => sum + devices.length, 0);
  grid.innerHTML = `<div class="collection-summary"><span>${total} devices</span><span>Phones & tablets</span></div>` + collectionData.map(([category, devices]) => `
    <article class="card collection-card">
      <div class="card-label">${escapeHtml(category)}</div>
      <h2>${devices.length} ${devices.length === 1 ? "device" : "devices"}</h2>
      <ol class="device-list">${devices.map(device => `<li>${escapeHtml(device)}</li>`).join("")}</ol>
    </article>
  `).join("");
}

renderCollection();
