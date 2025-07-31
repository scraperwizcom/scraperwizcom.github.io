// import { getUserSession } from "./auth.js"

function setHeader() {
  const path = window.location.pathname;
  const mobileView = window.matchMedia("(max-width: 1080px)").matches;
  // const isDashboard = window.location.href.includes("scraperwiz.com/account")
  // const isLogin = window.location.href.includes("scraperwiz.com/login/")
  // const isRegister = window.location.href.includes("scraperwiz.com/register/")

  // const sessionUser = await getUserSession()
  const headerEl = document.querySelector(".header");

  const leftEl = document.createElement("div");
  leftEl.classList.add("left");
  const rightEl = document.createElement("div");
  rightEl.classList.add("right");

  /* logo */
  const headerLogoEl = document.createElement("a");
  headerLogoEl.classList.add("header-logo-a");
  if (path === "/" || path === "") {
    headerLogoEl.addEventListener("click", () => scrollToDiv("#landing"));
  } else {
    headerLogoEl.href = "/";
  }
  headerLogoEl.innerHTML = `<img src="/images/logo.svg" class="header-logo"/> <span class="scraperwiz-name">scraperwiz</span>`;

  /* app */
  const appEl = document.createElement("div");
  appEl.classList.add("nav-btn", "header-dl-btn");
  appEl.addEventListener(
    "click",
    () => (window.location.href = "mailto:contact@scraperwiz.com")
  );
  appEl.innerHTML = "Contact";

  /* demo */
  const demoEl = document.createElement("div");
  demoEl.classList.add("nav-btn");
  demoEl.addEventListener("click", () => {
    if (path != "" && path != "/") {
      window.location.href = "/#demo";
    } else {
      scrollToDiv("#demo");
    }
  });
  demoEl.innerHTML = "Demo";

  /* pricing */
  const pricingEl = document.createElement("div");
  pricingEl.classList.add("nav-btn");
  pricingEl.addEventListener("click", () => {
    if (path != "" && path != "/") {
      window.location.href = "/#pricing";
    } else {
      scrollToDiv("#pricing");
    }
  });
  pricingEl.innerHTML = "Pricing";

  /* contact */
  const contactEl = document.createElement("div");
  contactEl.classList.add("nav-btn");
  contactEl.addEventListener(
    "click",
    () => (window.location.href = "mailto:contact@scraperwiz.com")
  );
  contactEl.innerHTML = "Contact";

  /* features */
  const featuresEl = document.createElement("div");
  featuresEl.classList.add("nav-btn");
  featuresEl.addEventListener("click", () => {
    if (path != "" && path != "/") {
      window.location.href = "/#features";
    } else {
      scrollToDiv("#features");
    }
  });
  featuresEl.innerHTML = "Features";

  leftEl.append(headerLogoEl);
  if (path === "/" || path === "" || path.includes("/store/")) {
    if (!mobileView) {
      rightEl.append(demoEl);
      rightEl.append(featuresEl);
      rightEl.append(pricingEl);
      rightEl.append(appEl);
    }
  }

  headerEl.append(leftEl);
  headerEl.append(rightEl);
}

setHeader();

function scrollToDiv(elementId) {
  scrollToElementWithOffset(elementId, 10);
}

function scrollToElementWithOffset(elementId, offsetVh) {
  const element = document.querySelector(elementId);
  if (!element) return;

  // Calculate the element's position relative to the viewport
  const elementRect = element.getBoundingClientRect();

  // Calculate the offset in pixels (vh to px conversion)
  const offsetPx = (window.innerHeight * offsetVh) / 100;

  // Calculate the target scroll position
  const targetPosition = window.scrollY + elementRect.top - offsetPx;

  // Scroll to the position with smooth behavior
  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}
