const purchaseBtns = document.querySelectorAll("#purchase-btn")

for (const purchaseBtn of purchaseBtns) {
  purchaseBtn.addEventListener("click", () => {
    window.location.href = "account/?tab=subscription"
  })
}

document.querySelector("#custom-api-email").addEventListener("click", () => {
  window.open(
    "mailto:contact@scraperwiz.com?subject=Custom%20API%20Inquiry",
    "_blank"
  )
})

document.querySelector("#extension-link").addEventListener("click", () => {
  window.open(
    "https://chromewebstore.google.com/detail/scraperwiz-1-click-scrape/pdfhibdjlokmclapiggjehcbeicphbho",
    "_blank"
  )
})

for (const checkoutBtn of document.querySelectorAll("#checkout-btn")) {
  checkoutBtn.addEventListener("click", () => {
    window.location.href = "/login"
  })
}

function captureRefAndStoreCookie() {
  function getRefFromURL() {
    const params = new URLSearchParams(window.location.search)
    return params.get("ref")
  }

  function setCookie(name, value, days) {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString()
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; expires=${expires}; path=/`
  }

  const ref = getRefFromURL()
  if (ref) {
    setCookie("ref", ref, 90)
  }
}

function main() {
  captureRefAndStoreCookie()
}

main()
