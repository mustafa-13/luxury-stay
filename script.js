(function () {
  var C = CONFIG;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  // Grey labelled placeholder used wherever a photo path is empty
  var ph = function (label) {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="#e7dfcb"/><text x="400" y="290" font-family="sans-serif" font-size="30" fill="#6b5f43" text-anchor="middle">PHOTO PLACEHOLDER</text><text x="400" y="335" font-family="sans-serif" font-size="24" fill="#6b5f43" text-anchor="middle">' + esc(label) + '</text></svg>';
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };
  var img = function (src, label) { return '<img loading="lazy" src="' + esc(src || ph(label)) + '" alt="' + esc(label) + '">'; };
  var list = function (a) { return a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""); };
  var wa = String(C.whatsapp).replace(/\D/g, "");

  document.title = C.name + " | Private House Stay in Srinagar, Kashmir";
  $("brandName").textContent = C.name; $("heroName").textContent = C.name;
  $("heroTag").textContent = C.tagline; $("heroIntro").textContent = C.intro;
  if (C.heroImage) $("top").style.backgroundImage = "linear-gradient(180deg,rgba(20,38,30,.3),rgba(20,38,30,.85)),url('" + C.heroImage + "')";
  $("aboutText").innerHTML = C.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("highlights").innerHTML = list(C.highlights);

  $("rooms").innerHTML = C.rooms.map(function (r) {
    return '<article class="room"><div class="pics">' + r.images.map(function (s, i) { return img(s, r.name + " photo " + (i + 1)); }).join("") +
      '</div><div><h3>' + esc(r.name) + '</h3><p class="meta">Beds: ' + esc(r.beds) + ' | Sleeps: ' + esc(r.sleeps) + '</p><p>' + esc(r.desc) + '</p><ul>' + list(r.facilities) + '</ul></div></article>';
  }).join("");
  $("spaces").innerHTML = C.spaces.map(function (s) { return '<div class="sp">' + img(s.image, s.name) + '<h3>' + esc(s.name) + '</h3><p>' + esc(s.desc) + '</p></div>'; }).join("");

  $("packageGrid").innerHTML = C.packages.map(function (p) {
    return '<article class="card"><h3>' + esc(p.name) + '</h3><p>' + esc(p.desc) + '</p><p class="meta">' + esc(p.duration) + ' | ' + esc(p.guests) + '</p><ul>' + list(p.includes) + '</ul><p class="price">' + esc(p.price) + '</p><a class="btn" href="#book" data-pack="' + esc(p.name) + '">Enquire now</a></article>';
  }).join("");
  $("fPack").innerHTML = '<option value="">No preference</option>' + C.packages.map(function (p) { return "<option>" + esc(p.name) + "</option>"; }).join("");
  $("packageGrid").addEventListener("click", function (e) { var b = e.target.closest("[data-pack]"); if (b) $("fPack").value = b.getAttribute("data-pack"); });

  $("expNote").textContent = C.experiencesNote;
  $("expGrid").innerHTML = C.experiences.map(function (x) {
    return '<div class="card x">' + img(x.image, x.name) + '<div class="xb"><span class="tagx">' + (x.by === "property" ? "Arranged by us" : "Suggestion, not included") + '</span><h3>' + esc(x.name) + '</h3><p>' + esc(x.desc) + '</p></div></div>';
  }).join("");

  // Gallery with filters and lightbox
  var cats = ["All"].concat(C.galleryCategories), shown = [], cur = 0;
  function drawGallery(cat) {
    shown = C.gallery.filter(function (g) { return cat === "All" || g.cat === cat; });
    $("galGrid").innerHTML = shown.map(function (g, i) { return '<button data-i="' + i + '" aria-label="View ' + esc(g.label) + '">' + img(g.src, g.label) + '</button>'; }).join("");
    Array.prototype.forEach.call($("filters").children, function (b) { b.setAttribute("aria-pressed", b.textContent === cat); });
  }
  $("filters").innerHTML = cats.map(function (c) { return '<button aria-pressed="false">' + esc(c) + '</button>'; }).join("");
  $("filters").addEventListener("click", function (e) { if (e.target.tagName === "BUTTON") drawGallery(e.target.textContent); });
  drawGallery("All");
  var lb = $("lb");
  function show(i) { cur = (i + shown.length) % shown.length; var g = shown[cur]; $("lbImg").src = g.src || ph(g.label); $("lbImg").alt = g.label; $("lbCap").textContent = g.label; }
  $("galGrid").addEventListener("click", function (e) { var b = e.target.closest("[data-i]"); if (!b) return; show(+b.getAttribute("data-i")); lb.showModal(); });
  $("lbClose").onclick = function () { lb.close(); };
  $("lbPrev").onclick = function () { show(cur - 1); }; $("lbNext").onclick = function () { show(cur + 1); };
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });

  $("reviewGrid").innerHTML = C.reviews.length ? C.reviews.map(function (r) {
    return '<blockquote class="card"><p>' + esc(r.text) + '</p><p class="meta"><strong>' + esc(r.name) + '</strong><br>' + esc(r.note || "") + '</p></blockquote>';
  }).join("") : '<div class="empty"><strong>Reviews coming soon.</strong><br>Add real guest reviews in config.js and they will appear here.</div>';

  $("addr").textContent = C.address;
  $("locList").innerHTML = list([C.location.airport, C.location.lalChowk].concat(C.location.nearby));
  if (C.mapLink) $("mapBtn").href = C.mapLink; else $("mapBtn").style.display = "none";
  $("mapBox").innerHTML = C.mapEmbed ? '<iframe loading="lazy" title="Map of the property" src="' + esc(C.mapEmbed) + '"></iframe>' : "<p>Tap \u201COpen in Google Maps\u201D for directions to the property.</p>";

  $("faqList").innerHTML = C.faqs.map(function (f) { return "<details><summary>" + esc(f.q) + "</summary><p>" + esc(f.a) + "</p></details>"; }).join("");

  $("callBtn").href = "tel:" + String(C.phone).replace(/[^\d+]/g, "");
  $("footName").textContent = "\u00A9 " + new Date().getFullYear() + " " + C.name;
  $("footContact").textContent = C.phone + (C.email ? " | " + C.email : "");

  // Enquiry forms (hero card and full form) -> WhatsApp
  var today = new Date().toISOString().slice(0, 10);
  function wire(form, k) {
    var v = function (id) { return id ? $(id).value.trim() : ""; };
    $(k.i).min = today; $(k.o).min = today;
    $(form).addEventListener("submit", function (e) {
      e.preventDefault();
      var n = v(k.n), i = v(k.i), o = v(k.o), g = v(k.g), err = $(k.e);
      if (!n || !i || !o || !g) { err.textContent = "Please fill in your name, dates and number of guests."; return; }
      if (o <= i) { err.textContent = "Check-out must be after check-in."; return; }
      err.textContent = "";
      var msg = "Hello, I would like to enquire about a stay.\nName: " + n + "\nCheck-in: " + i + "\nCheck-out: " + o + "\nGuests: " + g +
        "\nPackage: " + (v(k.p) || "No preference") + "\nRequests: " + (v(k.r) || "None");
      window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
  }
  wire("enq", { n: "fName", i: "fIn", o: "fOut", g: "fGuests", p: "fPack", r: "fReq", e: "err" });
  wire("enq2", { n: "qName", i: "qIn", o: "qOut", g: "qGuests", e: "qErr" });

  // Mobile menu
  var menu = $("menu"), burger = $("burger");
  burger.onclick = function () { var o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
  menu.addEventListener("click", function (e) { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
})();
