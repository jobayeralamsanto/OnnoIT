//  Mobile Menu Script

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.onclick = () => (mobileMenu.style.translate = "0");
closeMenu.onclick = () => (mobileMenu.style.translate = "-100%");

// Mobile dropdown
const mobileDropdownBtn = document.getElementById("mobileDropdownBtn");
const mobileDropdown = document.getElementById("mobileDropdown");
const mobileArrow = document.getElementById("mobileArrow");

mobileDropdownBtn.onclick = () => {
  mobileDropdown.classList.toggle("hidden");
  mobileArrow.classList.toggle("rotate-180");
};

//  Tab Logic

const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

function activateTab(tabId) {
  // Update Buttons
  tabButtons.forEach((btn) => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add("bg-white", "text-slate-900");
      btn.classList.remove("text-white");
    } else {
      btn.classList.remove("bg-white", "text-slate-900");
      btn.classList.add("text-white");
    }
  });

  // Update Panels
  panels.forEach((panel) => {
    if (panel.id === `panel-${tabId}`) {
      panel.classList.remove("hidden");
      panel.classList.add("animate-[fadeSlide_0.6s_ease-out]");
    } else {
      panel.classList.add("hidden");
    }
  });
}

// Default active tab
activateTab("1");

// Add click events
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    activateTab(btn.dataset.tab);
  });
});
