/**
 * Concept EXIM - Interactive Client Logic
 */

// Product Data for Quick View Modal
const PRODUCT_DATA = {
  agro: {
    title: "Fresh Indian Onions, Spices & Coconuts",
    category: "Natural Essentials & Commodities",
    image: "assets/images/agro-commodities.jpg",
    desc: "Direct farm-procured Indian red onions, turmeric fingers, vibrant red chillies, and mature semi-husked coconuts. Aggregated directly from verified farming collectives in Maharashtra, Andhra Pradesh, and Tamil Nadu.",
    specs: [
      { label: "Grading / Sizing", value: "45mm – 65mm graded Nashik/Andhra Red Onions" },
      { label: "Turmeric Quality", value: "High Curcumin (3.5% – 5.0%), polished fingers" },
      { label: "Red Chilli Varieties", value: "Teja (S17), Sanam (S4), Byadgi with high color value" },
      { label: "Coconut Grade", value: "Semi-husked, 550g – 650g weight per nut" },
      { label: "Packaging Options", value: "5kg, 10kg, 25kg Leno red mesh bags & corrugated export cartons" },
      { label: "Container Loading", value: "28 MT in 40ft Reefer / Dry Containers" },
      { label: "Dispatch Ports", value: "Nhava Sheva (JNPT) & Chennai Port" }
    ]
  },
  cocopeat: {
    title: "5kg Low EC Coco Peat Blocks",
    category: "Agricultural Growing Media",
    image: "assets/images/coco-peat.jpg",
    desc: "Our premium 5kg coco peat blocks are thoroughly washed, desalinated, and aged to ensure low electrical conductivity and optimal pH. Widely used across commercial Dutch hydroponic greenhouses, berry growers, and substrate blenders.",
    specs: [
      { label: "Electrical Conductivity (EC)", value: "< 0.5 mS/cm (1:1.5 extraction method)" },
      { label: "pH Range", value: "5.6 – 6.8" },
      { label: "Reconstitution / Expansion", value: "75 to 80 Liters per 5kg Block" },
      { label: "Moisture Content", value: "10% – 15% Max" },
      { label: "Impurities / Sand Content", value: "< 2.0%" },
      { label: "Palletized Container Loading", value: "24 MT in 40ft High Cube (HC) Container" },
      { label: "Port of Dispatch", value: "Chennai / Tuticorin / Cochin Port, India" }
    ]
  },
  areca: {
    title: "Areca Palm Leaf Tableware",
    category: "100% Biodegradable Tableware",
    image: "assets/images/areca-tableware.jpg",
    desc: "Manufactured from naturally fallen Areca palm fronds collected from sustainable plantations. Cleaned with spring water, heat pressed, and UV sterilized without chemicals, plastics, or artificial coatings.",
    specs: [
      { label: "Raw Material", value: "100% Fallen Areca Palm Leaves (Chemical-Free)" },
      { label: "Available Shapes & Sizes", value: "6\", 8\", 10\" Round, Square, Compartment & Bowls" },
      { label: "Thermal Resistance", value: "Safe for hot liquids and microwave heating up to 100°C" },
      { label: "Decomposition Time", value: "Backyard compostable within 60–90 days" },
      { label: "Packaging", value: "Shrink-wrapped packs of 25 in export master cartons" },
      { label: "Certifications", value: "Food Grade Contact Certified, SGS Tested" },
      { label: "Primary Export Markets", value: "UAE, Saudi Arabia, Germany, UK, USA" }
    ]
  },
  bowls: {
    title: "Coconut Shell Bowls & Cutlery",
    category: "Artisanal Eco-Living",
    image: "assets/images/areca-tableware.jpg",
    desc: "Handcrafted from upcycled mature coconut shells. Each piece is polished by skilled artisans using pure cold-pressed coconut oil, creating an exquisite natural vessel for healthy bowls, acai, and salads.",
    specs: [
      { label: "Material", value: "Reclaimed Natural Coconut Shells & Birch/Coconut Wood" },
      { label: "Volume Capacity", value: "450 ml – 650 ml (Natural variation)" },
      { label: "Finish", value: "Food-Grade Extra Virgin Coconut Oil (Zero Varnish)" },
      { label: "Included Flatware", value: "19cm Wooden Spoons, Forks, and Dessert Flatware" },
      { label: "Branding Available", value: "Custom laser engraving of importer logo" },
      { label: "Carton Packing", value: "100 units per master corrugated export box" }
    ]
  },
  charcoal: {
    title: "Coconut Shell Charcoal Briquettes",
    category: "Eco-Energy & Barbecue",
    image: "assets/images/charcoal-briquettes.jpg",
    desc: "High-density coconut charcoal manufactured from carbonized mature coconut shells. Delivers intense odorless, smokeless heat with minimal white ash, ideal for premium Shisha lounges and commercial BBQs.",
    specs: [
      { label: "Fixed Carbon Content", value: "> 80% High Purity" },
      { label: "Ash Content", value: "< 2.2% – 2.5% (Pure White Ash)" },
      { label: "Moisture Level", value: "< 5.0%" },
      { label: "Calorific Value", value: "7,400 – 7,800 kcal/kg" },
      { label: "Burning Time", value: "2.5 to 3.5 Hours Continuous Heat" },
      { label: "Available Shapes", value: "Cubes (25x25x25mm, 26x26x26mm) & Hexagonal sticks" },
      { label: "Export Container Load", value: "26 MT in 40ft HC Container" }
    ]
  },
  oil: {
    title: "Cold-Pressed Extra Virgin Coconut Oil",
    category: "Organic Food & Cosmetics",
    image: "assets/images/virgin-coconut-oil.jpg",
    desc: "Extracted using traditional cold-pressing from fresh coconut kernel within 48 hours of harvest. Free from chemical solvents, bleaching, or deodorizing. Rich in lauric acid and natural MCTs.",
    specs: [
      { label: "Extraction Process", value: "Cold-Pressed, Wet Milled & Centrifuged" },
      { label: "Lauric Acid Content", value: "> 50.8% Active" },
      { label: "Moisture Content", value: "< 0.1% (Extended Shelf Life)" },
      { label: "Aroma & Flavor", value: "Delicate natural fresh coconut scent" },
      { label: "Packaging Options", value: "250ml / 500ml Glass Bottles, 200L Steel Drums, 1000L IBC" },
      { label: "Standards", value: "ISO 22000, Halal & Kosher Certified" }
    ]
  },
  geotextile: {
    title: "Coir Geotextiles & Erosion Nets",
    category: "Civil Engineering & Landscaping",
    image: "assets/images/coir-geotextiles.jpg",
    desc: "Durable woven mesh netting fabricated from high-strength coir yarn. Designed to stabilize embankments, prevent soil erosion, and facilitate vegetative growth on slopes and drainage channels.",
    specs: [
      { label: "Mesh Densities", value: "400 g/m², 700 g/m², 900 g/m²" },
      { label: "Tensile Strength", value: "High warp & weft breaking resistance" },
      { label: "Field Life Expectancy", value: "3 to 5 Years (Fully Biodegradable)" },
      { label: "Standard Roll Sizes", value: "1m x 50m, 2m x 50m, custom widths on order" },
      { label: "Applications", value: "Highway banks, mine reclamation, wetlands, slope civil works" }
    ]
  }
};

// Hero Slider Data
const HERO_SLIDES = [
  {
    eyebrow: "VALUE-ADDED PRODUCTS",
    title: "<span>Beyond Coconut</span><span>More Possibilities</span>",
    desc: "Explore coconut and value-added product solutions for agricultural, food-service and international markets"
  },
  {
    eyebrow: "SUSTAINABLE HORTICULTURE",
    title: "<span>High Yield Coir</span><span>Growing Substrates</span>",
    desc: "Triple-washed, low EC 5kg coco peat blocks and grow bags engineered for commercial greenhouse cultivation"
  },
  {
    eyebrow: "ZERO-PLASTIC INITIATIVE",
    title: "<span>Natural Tableware</span><span>From Fallen Leaves</span>",
    desc: "Premium heat-pressed Areca palm plates and polished coconut bowls for sustainable international food-service"
  }
];

let currentSlideIndex = 0;

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupHeroSlider();
  setupFilterTabs();
  setupMobileNav();
  setupNavbarScroll();
});

// Hero Slider Functionality
function setupHeroSlider() {
  const prevBtn = document.getElementById("hero-prev-btn");
  const nextBtn = document.getElementById("hero-next-btn");
  const titleEl = document.getElementById("hero-main-title");
  const descEl = document.getElementById("hero-main-desc");

  function renderSlide(index) {
    const slide = HERO_SLIDES[index];
    titleEl.style.opacity = "0";
    descEl.style.opacity = "0";

    setTimeout(() => {
      titleEl.innerHTML = slide.title;
      descEl.textContent = slide.desc;
      titleEl.style.opacity = "1";
      descEl.style.opacity = "1";
    }, 200);
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
      renderSlide(currentSlideIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentSlideIndex = (currentSlideIndex + 1) % HERO_SLIDES.length;
      renderSlide(currentSlideIndex);
    });
  }
}

// Product Category Filter
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  const productCards = document.querySelectorAll(".product-card");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  function filterCards(filterCategory) {
    tabs.forEach(tab => {
      if (tab.dataset.filter === filterCategory) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    productCards.forEach(card => {
      const cardCategory = card.dataset.category;
      if (filterCategory === "all" || cardCategory === filterCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  window.filterCards = filterCards;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.filter;
      filterCards(filter);
    });
  });

  dropdownItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const filter = item.dataset.filter;
      if (filter) {
        filterCards(filter);
      }
    });
  });
}

// Quick View Modal
function openProductModal(productKey) {
  const data = PRODUCT_DATA[productKey];
  if (!data) return;

  const modal = document.getElementById("product-modal");
  const bodyContent = document.getElementById("modal-body-content");

  let specsHtml = "";
  data.specs.forEach(spec => {
    specsHtml += `
      <tr>
        <td>${spec.label}</td>
        <td>${spec.value}</td>
      </tr>
    `;
  });

  bodyContent.innerHTML = `
    <div class="modal-product-header">
      <img src="${data.image}" alt="${data.title}" class="modal-product-img">
      <div>
        <span class="product-tag" style="position:static; display:inline-block; margin-bottom:8px;">${data.category}</span>
        <h3 class="modal-product-title">${data.title}</h3>
      </div>
    </div>
    <p style="color:var(--text-secondary); margin-bottom:20px; font-size:0.95rem; line-height:1.6;">${data.desc}</p>
    <h4 style="font-size:1rem; color:var(--deep-forest); margin-bottom:10px; font-weight:700;">Technical Export Specifications</h4>
    <table class="modal-spec-table">
      <tbody>${specsHtml}</tbody>
    </table>
    <div style="display:flex; gap:12px; margin-top:24px;">
      <button class="btn-gold" style="flex:1; justify-content:center;" onclick="selectProductForRfq('${data.title}')">
        REQUEST EXPORT PRICING
      </button>
      <button class="btn-outline-white" style="color:var(--deep-forest); border-color:var(--deep-forest);" onclick="closeProductModal()">
        CLOSE
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal(event) {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Pre-fill RFQ Form
function selectProductForRfq(productName) {
  closeProductModal();
  const select = document.getElementById("rfq-product");
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === productName || select.options[i].text.includes(productName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  // Smooth scroll to RFQ section
  const rfqSection = document.getElementById("rfq");
  if (rfqSection) {
    rfqSection.scrollIntoView({ behavior: "smooth" });
  }
}

// RFQ Form Submission Handler
function handleRfqSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("rfq-name").value;
  const product = document.getElementById("rfq-product").value;
  const volume = document.getElementById("rfq-container").value;

  showToast(`Thank you ${name}! Your inquiry for ${product} (${volume}) has been received.`);
  event.target.reset();
}

// Newsletter Handler
function handleNewsletter(event) {
  event.preventDefault();
  showToast("Thank you for subscribing to Concept EXIM Trade Updates!");
  event.target.reset();
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast-msg");
  const text = document.getElementById("toast-text");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Mobile Navigation Toggle
function setupMobileNav() {
  const toggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("main-nav-menu");

  if (toggle && navMenu) {
    toggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
}

// Sticky Navbar Scroll Effect
function setupNavbarScroll() {
  const header = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}
