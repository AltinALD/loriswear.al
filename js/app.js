const IG_URL = "https://www.instagram.com/loriswear.al/";
const CART_KEY = "loris_cart_v1";
const LANG_KEY = "loris_lang";

const products = [
  {
    id: 1,
    category: "xhaketa",
    categoryName: { sq: "Xhaketë", en: "Jacket" },
    name: { sq: "Xhaketë puffer", en: "Puffer coat" },
    color: { sq: "Fuchsia", en: "Fuchsia" },
    badge: { sq: "E re", en: "New" },
    image: "images/coat-puffer.jpg",
    description: {
      sq: "Xhaketë e gjatë e mbushur, me kapuç, gëzof të lehtë dhe kopsa në ton të ngrohtë. Një shtresë e plotë për ditë të ftohta.",
      en: "A long quilted coat with a hood, light fur trim, and warm-toned snaps. A full layer for cold days."
    },
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    category: "xhaketa",
    categoryName: { sq: "Xhaketë", en: "Jacket" },
    name: { sq: "Xhaketë peplum", en: "Peplum jacket" },
    color: { sq: "E zezë", en: "Black" },
    badge: null,
    image: "images/jacket-peplum.jpg",
    description: {
      sq: "Xhaketë e shkurtër me dekolte të thellë dhe rrip në bel. Prerje e mprehtë, e lehtë për t'u veshur mbi një fustan ose triko.",
      en: "A cropped jacket with a deep neckline and a belt at the waist. A sharp layer over a dress or knit."
    },
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    category: "pallto",
    categoryName: { sq: "Pallto", en: "Coat" },
    name: { sq: "Pallto leshi", en: "Wool coat" },
    color: { sq: "Gri melange", en: "Heather grey" },
    badge: { sq: "Sezon", en: "Season" },
    image: "images/coat-wool.jpg",
    description: {
      sq: "Pallto e gjatë me jakë të gjerë, bel të lidhur dhe teksturë të butë. Klasike, e qetë, e veshshme çdo ditë.",
      en: "A long coat with a wide collar, tie belt, and a soft textured cloth. Quiet, classic, easy every day."
    },
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 4,
    category: "canta",
    categoryName: { sq: "Çantë", en: "Bag" },
    name: { sq: "Çantë me printe", en: "Print handbag" },
    color: { sq: "Krem & ar", en: "Cream & gold" },
    badge: null,
    image: "images/bag-floral.jpg",
    description: {
      sq: "Çantë dore e strukturuar me printe zinxhirësh dhe lulesh, dhe doreza të gërshetuara. Për ditë që duan një detaj.",
      en: "A structured handbag with a chain-and-floral print and braided handles. For days that want one good detail."
    },
    sizes: ["UNI"]
  },
  {
    id: 5,
    category: "canta",
    categoryName: { sq: "Çantë", en: "Bag" },
    name: { sq: "Tote karamel", en: "Camel tote" },
    color: { sq: "Karamel", en: "Camel" },
    badge: null,
    image: "images/bag-camel.jpg",
    description: {
      sq: "Tote e strukturuar në nuancë karamel, me doreza të dyfishta dhe një varëse të vogël. E pastër dhe praktike.",
      en: "A structured camel tote with double handles and a small charm. Clean, and easy to carry."
    },
    sizes: ["UNI"]
  },
  {
    id: 6,
    category: "canta",
    categoryName: { sq: "Çantë", en: "Bag" },
    name: { sq: "Çantë me thumba", en: "Studded bag" },
    color: { sq: "E zezë", en: "Black" },
    badge: { sq: "Statement", en: "Statement" },
    image: "images/bag-studded.jpg",
    description: {
      sq: "Çantë e zezë me thumba, zinxhir dhe shami të stampuar. Një pjesë që mban vëmendjen pa u sforcuar.",
      en: "A black bag with studs, a chain, and a printed scarf. A piece that holds the room quietly."
    },
    sizes: ["UNI"]
  },
  {
    id: 7,
    category: "triko",
    categoryName: { sq: "Triko", en: "Knit" },
    name: { sq: "Pulovër me çelës", en: "Keyhole sweater" },
    color: { sq: "Jeshile", en: "Green" },
    badge: { sq: "E re", en: "New" },
    image: "images/knit-green.jpg",
    description: {
      sq: "Pulovër i ngrohtë jeshil me jakë të hapur, vija të çelëta dhe mansheta të zeza. I butë, me karakter.",
      en: "A warm green sweater with an open neckline, pale stripes, and black cuffs. Soft, with a point of view."
    },
    sizes: ["S", "M", "L", "XL"]
  }
];

const i18n = {
  sq: {
    "top.bar": "Veshje origjinale · Me & pa etiketë · Dërgesa në Shqipëri",
    "nav.collection": "Koleksioni",
    "nav.story": "Rreth nesh",
    "nav.order": "Porosia",
    "nav.visit": "Kontakt",
    "hero.tagline": "Veshje origjinale, të zgjedhura me kujdes.",
    "hero.sub": "Me & pa etiketë. Cilësi e garantuar. Porosi në DM, dërgesa kudo në Shqipëri.",
    "hero.ctaShop": "Shiko koleksionin",
    "hero.ctaIg": "Ndiq në Instagram",
    "cat.all": "Të gjitha",
    "cat.jackets": "Xhaketa",
    "cat.coats": "Pallto",
    "cat.bags": "Çanta",
    "cat.knits": "Triko",
    "hl.order": "Porosi",
    "collection.label": "Koleksioni",
    "collection.title": "Pjesë të zgjedhura",
    "collection.desc": "Xhaketa, pallto, çanta dhe triko. Zgjidh pjesën, na shkruaj në DM dhe e dërgojmë.",
    "editorial.label": "Sezoni",
    "editorial.title": "Shtresa që vishen vërtet",
    "editorial.body": "Pallto, xhaketa dhe detaje të zgjedhura një nga një — për ditë të ftohta dhe dalje që duan një prerje të qetë.",
    "editorial.cta": "Shiko pjesët",
    "story.label": "Rreth nesh",
    "story.body": "Veshje origjinale, me dhe pa etiketë. Një përzgjedhje e kuruar, me cilësi të garantuar — e sjellë te ti me një mesazh.",
    "story.p1": "Veshje origjinale",
    "story.p2": "Me dhe pa etiketë",
    "story.p3": "Cilësi e garantuar",
    "story.p4": "Porosi në DM · dërgesa në Shqipëri",
    "order.label": "Si porositet",
    "order.title": "Tre hapa, pastaj e dërgojmë",
    "order.s1t": "Zgjidh pjesën",
    "order.s1": "Hap pjesën, zgjidh madhësinë dhe shtoje te çanta jote.",
    "order.s2t": "Na shkruaj në DM",
    "order.s2": "Na dërgo emrat e pjesëve. Çmimi dhe disponueshmëria konfirmohen aty.",
    "order.s3t": "E merr në derë",
    "order.s3": "Dërgesa kudo në Shqipëri, pasi të biem dakord për detajet.",
    "visit.label": "Kontakt & porosi",
    "visit.title": "Na shkruaj për pjesën tënde",
    "visit.desc": "Madhësia, ngjyra dhe çmimi rregullohen në Instagram. Na ndiq edhe për pjesët e reja.",
    "visit.online": "Online",
    "visit.dm": "Dërgo DM",
    "visit.ig": "Mesazh @loriswear.al",
    "visit.shop": "Shiko koleksionin",
    "visit.shopBtn": "Shiko pjesët",
    "footer.tag": "Authentic fashion",
    "modal.add": "Shto në çantë",
    "modal.ig": "Porosit në Instagram",
    "modal.note": "Çmimi konfirmohet në DM, sipas madhësisë dhe disponueshmërisë.",
    "cart.title": "Çanta jote",
    "cart.total": "Totali",
    "cart.checkout": "Porosit në Instagram",
    "cart.hint": "Na dërgo pjesët në DM — madhësia, çmimi dhe dërgesa rregullohen aty.",
    "cart.empty": "Çanta është bosh.",
    "cart.size": "Madhësia",
    "cart.aria": "Çanta",
    "toast.added": "U shtua në çantë",
    "product.view": "Shiko",
    "price.dm": "Çmimi në DM",
    "marquee": ["LORIS", "Authentic fashion", "Veshje origjinale", "Me & pa etiketë", "Cilësi e garantuar", "Porosi në DM", "Dërgesa në Shqipëri"]
  },
  en: {
    "top.bar": "Original clothing · With & without labels · Delivery across Albania",
    "nav.collection": "Collection",
    "nav.story": "About",
    "nav.order": "Ordering",
    "nav.visit": "Contact",
    "hero.tagline": "Original clothes, chosen with care.",
    "hero.sub": "With and without labels. Quality you can count on. Order by DM, delivered across Albania.",
    "hero.ctaShop": "Shop the edit",
    "hero.ctaIg": "Follow on Instagram",
    "cat.all": "All",
    "cat.jackets": "Jackets",
    "cat.coats": "Coats",
    "cat.bags": "Bags",
    "cat.knits": "Knits",
    "hl.order": "Order",
    "collection.label": "Collection",
    "collection.title": "Selected pieces",
    "collection.desc": "Jackets, coats, bags, and knits. Choose a piece, message us, and we send it.",
    "editorial.label": "The season",
    "editorial.title": "Layers you actually wear",
    "editorial.body": "Coats, jackets, and details chosen one by one — for cold days and evenings that want a quiet cut.",
    "editorial.cta": "See the pieces",
    "story.label": "About",
    "story.body": "Original clothing, with and without labels. A careful edit, with quality you can count on — brought to you with a message.",
    "story.p1": "Original clothing",
    "story.p2": "With and without labels",
    "story.p3": "Quality guaranteed",
    "story.p4": "Order by DM · delivery across Albania",
    "order.label": "How to order",
    "order.title": "Three steps, then we send it",
    "order.s1t": "Choose the piece",
    "order.s1": "Open a piece, pick a size, and add it to your bag.",
    "order.s2t": "Message us",
    "order.s2": "Send the piece names on Instagram. Price and availability are confirmed there.",
    "order.s3t": "It comes to you",
    "order.s3": "Delivery across Albania, once the details are agreed.",
    "visit.label": "Contact & orders",
    "visit.title": "Write us about your piece",
    "visit.desc": "Size, color, and price are arranged on Instagram. Follow along for new pieces.",
    "visit.online": "Online",
    "visit.dm": "Send a DM",
    "visit.ig": "Message @loriswear.al",
    "visit.shop": "View the collection",
    "visit.shopBtn": "Browse pieces",
    "footer.tag": "Authentic fashion",
    "modal.add": "Add to bag",
    "modal.ig": "Order on Instagram",
    "modal.note": "The price is confirmed by DM, based on size and availability.",
    "cart.title": "Your bag",
    "cart.total": "Total",
    "cart.checkout": "Order on Instagram",
    "cart.hint": "Send the pieces in a DM — size, price, and delivery are arranged there.",
    "cart.empty": "Your bag is empty.",
    "cart.size": "Size",
    "cart.aria": "Bag",
    "toast.added": "Added to bag",
    "product.view": "View",
    "price.dm": "Price via DM",
    "marquee": ["LORIS", "Authentic fashion", "Original clothing", "With & without labels", "Quality guaranteed", "Order by DM", "Delivery across Albania"]
  }
};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

let lang = localStorage.getItem(LANG_KEY) || "sq";
let activeProduct = null;
let selectedSize = "M";
let activeCategory = null;

function t(key) {
  return i18n[lang][key] ?? i18n.en[key] ?? key;
}

function loc(obj) {
  if (!obj || typeof obj === "string") return obj;
  return obj[lang] || obj.en || obj.sq || "";
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartUI();
}

function cartCount(items = getCart()) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

function showToast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("is-on");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => el.classList.remove("is-on"), 2200);
}

function applyI18n() {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const value = t(el.getAttribute("data-i18n"));
    if (value.includes("<br>")) el.innerHTML = value;
    else el.textContent = value;
  });

  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });

  $$(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  const track = $("#marqueeTrack");
  if (track) {
    const items = [...t("marquee"), ...t("marquee")];
    track.innerHTML = items
      .map((word, i) => `<span>${word}</span>${i < items.length - 1 ? "<span>·</span>" : ""}`)
      .join("");
  }

  document.title = "LORIS — Authentic Fashion";
  renderProducts();
  updateCartUI();
  if (activeProduct) openProduct(activeProduct.id, true);
}

function setLang(next) {
  lang = next;
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

function filteredProducts() {
  if (!activeCategory) return products;
  return products.filter((p) => p.category === activeCategory);
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  const list = filteredProducts();
  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product-card" data-id="${p.id}" style="transition-delay:${i * 50}ms" tabindex="0">
      <div class="product-media">
        <img src="${p.image}" alt="${loc(p.name)}" loading="lazy" width="800" height="1000">
        ${p.badge ? `<span class="product-badge">${loc(p.badge)}</span>` : ""}
      </div>
      <div class="product-info">
        <h3>${loc(p.name)}</h3>
        <p class="product-color">${loc(p.categoryName)} · ${loc(p.color)}</p>
        <div class="product-footer">
          <span class="product-price">${t("price.dm")}</span>
          <span class="product-view">${t("product.view")}</span>
        </div>
      </div>
    </article>`
    )
    .join("");

  $$(".product-card", grid).forEach((card) => {
    const open = () => openProduct(Number(card.dataset.id));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  $$(".product-card", grid).forEach((c) => io.observe(c));
}

function openProduct(id, keepOpen = false) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  activeProduct = p;
  if (!keepOpen || !p.sizes.includes(selectedSize)) {
    selectedSize = p.sizes.includes("M") ? "M" : p.sizes[0];
  }

  const name = loc(p.name);
  $("#modalImage").src = p.image;
  $("#modalImage").alt = name;
  $("#modalBrand").textContent = `LORIS · ${loc(p.categoryName)}`;
  $("#modalTitle").textContent = name;
  $("#modalDesc").textContent = loc(p.description);
  $("#modalPrice").textContent = t("price.dm");

  const sizeRow = $("#sizeRow");
  sizeRow.innerHTML = p.sizes
    .map(
      (s) =>
        `<button type="button" class="size-btn${s === selectedSize ? " is-active" : ""}" data-size="${s}">${s}</button>`
    )
    .join("");

  $$(".size-btn", sizeRow).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedSize = btn.dataset.size;
      $$(".size-btn", sizeRow).forEach((b) => b.classList.toggle("is-active", b === btn));
    });
  });

  $("#igOrderBtn").href = IG_URL;
  $("#productModal").hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  $("#productModal").hidden = true;
  if ($("#cartDrawer").hidden) document.body.classList.remove("modal-open");
  activeProduct = null;
}

function addToCart() {
  if (!activeProduct) return;
  const items = getCart();
  const key = `${activeProduct.id}-${selectedSize}`;
  const existing = items.find((i) => i.key === key);
  if (existing) existing.qty += 1;
  else {
    items.push({
      key,
      id: activeProduct.id,
      name: activeProduct.name,
      size: selectedSize,
      image: activeProduct.image,
      qty: 1
    });
  }
  saveCart(items);
  showToast(t("toast.added"));
}

function updateCartUI() {
  const items = getCart();
  const count = cartCount(items);
  const countEl = $("#cartCount");
  if (countEl) {
    countEl.textContent = String(count);
    countEl.classList.toggle("is-on", count > 0);
  }

  const container = $("#cartItems");
  const footer = $("#cartFooter");
  if (!container || !footer) return;

  if (!items.length) {
    container.innerHTML = `<p class="cart-empty">${t("cart.empty")}</p>`;
    footer.style.display = "none";
    return;
  }

  footer.style.display = "block";
  container.innerHTML = items
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="">
      <div>
        <h4>${loc(item.name)}</h4>
        <p>${t("cart.size")} ${item.size} · ${item.qty}×</p>
      </div>
      <button type="button" class="cart-item-remove" data-remove="${item.key}" aria-label="Remove">&times;</button>
    </div>`
    )
    .join("");

  $("#cartTotal").textContent = t("price.dm");
  $("#checkoutIg").href = IG_URL;

  $$("[data-remove]", container).forEach((btn) => {
    btn.addEventListener("click", () => {
      saveCart(getCart().filter((i) => i.key !== btn.dataset.remove));
    });
  });
}

function openCart() {
  $("#cartDrawer").hidden = false;
  document.body.classList.add("modal-open");
  updateCartUI();
}

function closeCart() {
  $("#cartDrawer").hidden = true;
  if ($("#productModal").hidden) document.body.classList.remove("modal-open");
}

function setCategory(cat) {
  activeCategory = cat || null;
  $$(".brand-chip").forEach((c) => {
    c.classList.toggle("is-active", (c.dataset.category || "") === (activeCategory || ""));
  });
  renderProducts();
}

function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const toggle = $("#menuToggle");
  const mobileNav = $("#mobileNav");
  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    header.classList.toggle("is-scrolled", !open || window.scrollY > 24);
  });

  $$("a", mobileNav).forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    });
  });

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

function initFilters() {
  $$(".brand-chip").forEach((chip) => {
    chip.addEventListener("click", () => setCategory(chip.dataset.category || ""));
  });
  $$(".hl[data-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCategory(btn.dataset.category || "");
      $("#collection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initReveal() {
  const editorial = $(".editorial");
  if (!editorial) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(editorial);
}

function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let raf = 0;
  const tick = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
    raf = requestAnimationFrame(tick);
  };
  window.addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(tick);
    },
    { passive: true }
  );
  window.addEventListener("pointerleave", () => glow.classList.remove("is-on"));
}

function init() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  applyI18n();
  initHeader();
  initFilters();
  initReveal();
  initCursorGlow();

  $("#cartBtn")?.addEventListener("click", openCart);
  $("#addToCartBtn")?.addEventListener("click", addToCart);
  $$("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCart();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
