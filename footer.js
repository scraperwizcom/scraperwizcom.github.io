const footerDiv = document.querySelector(".footer")
const socialsDiv = document.createElement("div")
socialsDiv.classList.add("socials")
socialsDiv.innerHTML = `
<a href="https://wa.me/447947757681" target="_blank">
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    >
    <defs>
        <style>
        .cls-1 {
            fill: #fff;
        }
        .cls-2 {
            fill-rule: evenodd;
        }
        </style>
    </defs>
    <title>WhatsApp</title>
    <circle class="cls-1" cx="10" cy="10" r="10" />
    <g id="WA_Logo" data-name="WA Logo">
        <path
        class="cls-2"
        d="M14.7,4.7A6.3,6.3,0,0,0,4,9.1a6.1,6.1,0,0,0,.8,3.2l-.9,3.2,3.3-.8a6.3,6.3,0,0,0,3,.7h0a6.3,6.3,0,0,0,6.3-6.3A6.7,6.7,0,0,0,14.7,4.7Zm-1.6,5.8L12,9.9h-.3l-.5.6c-.1.1-.2.2-.4.1a11.1,11.1,0,0,1-1.2-.8,3.5,3.5,0,0,1-.9-1.1c-.1-.1,0-.2.1-.3L9,8.2,9.2,8a.4.4,0,0,0-.1-.3c0-.1-.3-.9-.4-1.2s-.3-.2-.4-.2H8l-.4.2A1.8,1.8,0,0,0,7,7.8a3,3,0,0,0,.7,1.6,6.5,6.5,0,0,0,2.7,2.3l.8.4h1a1.6,1.6,0,0,0,1.1-.7,3.2,3.2,0,0,0,.1-.8Z"
        />
    </g>
    </svg>
</a>
<a href="https://t.me/scraperwiz" target="_blank">
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    >
    <defs>
        <style>
        .cls-1 {
            fill: #fff;
        }
        </style>
    </defs>
    <title>Telegram</title>
    <circle class="cls-1" cx="10" cy="10" r="10" />
    <polygon
        points="6.7 10.9 13 7.1 8.3 11.6 8.1 14.7 9.8 13 13.4 15.5 15.8 4.5 3.2 9.6 6.7 10.9"
    />
    </svg>
</a>
<a href="https://x.com/scraperwiz" target="_blank">
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    >
    <defs>
        <style>
        .cls-1 {
            fill: #fff;
        }
        </style>
    </defs>
    <title>X (Twitter)</title>
    <circle class="cls-1" cx="10" cy="10" r="10" />
    <path
        d="M16.5,4H14.4L10.8,7.9,8,4H3.5l4.8,6.8L3.5,16H5.6l3.6-3.9L12,16h4.5L11.7,9.2ZM13.7,14.6h-1L10.2,11,9.3,9.7l-3-4.3h1L9.8,9l.9,1.3Z"
    />
    </svg>
</a>
<a href="https://instagram.com/scraperwiz" target="_blank">
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    >
    <defs>
        <style>
        .cls-1 {
            fill: #fff;
        }
        </style>
    </defs>
    <title>Instagram</title>
    <circle class="cls-1" cx="10" cy="10" r="10" />
    <path
        d="M10,3.7H7.4L5.9,4a2.8,2.8,0,0,0-1.1.8A2.8,2.8,0,0,0,4,5.9a13,13,0,0,0-.3,1.5v5.2A13,13,0,0,0,4,14.1a2.8,2.8,0,0,0,.8,1.1,2.8,2.8,0,0,0,1.1.8l1.5.3h5.2l1.5-.3a2.8,2.8,0,0,0,1.1-.8,2.8,2.8,0,0,0,.8-1.1,13,13,0,0,0,.3-1.5V7.4A13,13,0,0,0,16,5.9a2.8,2.8,0,0,0-.8-1.1A2.8,2.8,0,0,0,14.1,4l-1.5-.3Z"
    />
    <path
        class="cls-1"
        d="M9.8,8a2.2,2.2,0,1,1-2.2,2.2A2.2,2.2,0,0,1,9.8,8m0-1A3.2,3.2,0,1,0,13,10.2,3.2,3.2,0,0,0,9.8,7Z"
    />
    <circle class="cls-1" cx="13.4" cy="6.6" r="0.8" />
    </svg>
</a>
<a href="https://www.facebook.com/scraperwizcom" target="_blank">
    <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    >
    <defs>
        <style>
        .cls-1 {
            fill: #fff;
        }
        </style>
    </defs>
    <title>Facebook</title>
    <circle class="cls-1" cx="10" cy="10" r="10" />
    <path
        d="M11,7V9h2.7v2.3H11v5H8.7v-5H6.3V9H8.7V7A3.3,3.3,0,0,1,12,3.7h1.7V6H12A.9.9,0,0,0,11,7Z"
    />
    </svg>
</a>
<!--<a href="https://discord.gg/wG65jmrQ" target="_blank">
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <defs>
            <style>
                .cls-1 {
                fill: #fff;
                }
            </style>
            </defs>
            <title>Discord</title>
            <circle class="cls-1" cx="10" cy="10" r="10" />
            <path
            d="M5.5,12.3l.8.8a5.5,5.5,0,0,0,1.5.8h.1l-.5.5h0l-1-.2a6.7,6.7,0,0,1-1.8-.7l-.9-.8h0a1.9,1.9,0,0,1,.1-.8c0-.4.1-.7.1-1a28.6,28.6,0,0,1,.7-2.8l.7-1.5.2-.2a6.6,6.6,0,0,1,1.9-.9l.8-.2h.1a.3.3,0,0,1,.1.2h0L7.4,6A4.2,4.2,0,0,0,6,6.9l-.2.2h0L7,6.5l1.5-.4h1.8a8.6,8.6,0,0,1,2.4.4l1.5.7h.1l-.5-.4a4.8,4.8,0,0,0-1.6-.8l-.6-.2h0a.3.3,0,0,1,.1-.2h.7a6.8,6.8,0,0,1,2.1,1h.1l.6,1.1.6,1.8.3,1.7c.1.5.1.9.2,1.3v.3h0a4.4,4.4,0,0,1-1.8,1.2l-1.3.4h-.6l-.5-.6h0a3.5,3.5,0,0,0,1.5-.7,2.6,2.6,0,0,0,.9-.9h0l-.3.3-1.7.8-1.2.2H9.5a9.3,9.3,0,0,1-2.3-.4,7,7,0,0,1-1.7-.9Zm1.6-1.7h0a2,2,0,0,0,.4.8.9.9,0,0,0,1.3-.1.9.9,0,0,0,.3-.6,1.1,1.1,0,0,0-.3-1.1.9.9,0,0,0-1.3,0A1.1,1.1,0,0,0,7.1,10.6Zm5.8,0a1.1,1.1,0,0,0-.3-.8,1,1,0,0,0-.7-.4,1.2,1.2,0,0,0-.8.4,1.4,1.4,0,0,0-.2.6,1,1,0,0,0,.4,1.1.8.8,0,0,0,1.2-.1A1.2,1.2,0,0,0,12.9,10.6ZM5.7,7.1Z"
            />
        </svg>
</a>-->
    `

const copyrightDiv = document.createElement("div")
copyrightDiv.classList.add("copyright")
copyrightDiv.innerHTML = `<a href="mailto:contact@scraperwiz.com">
contact@scraperwiz.com</a><a href='/about' class='text-decoration-none cursor-pointer '>&copy; scraperwiz 2023-${new Date().getFullYear()}</a><a href='/policy' class='text-decoration-none cursor-pointer '>Terms of Use</a>`
copyrightDiv.classList.add("cursor-pointer")

const emailDiv = document.createElement("div")
emailDiv.classList.add("email")
emailDiv.innerHTML = `<a href="mailto:contact@scraperwiz.com"><svg
id="Layer_1"
data-name="Layer 1"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
>
<defs>
  <style>
    .cls-1 {
      fill: #fff;
    }
  </style>
</defs>
<title>mail</title>
<path
  class="cls-1"
  d="M0,1.8V18.2H20V1.8Zm18,1L10,9.4,2,2.8Zm1,14.4H1V3.2l9,7.4,9-7.4Z"
/>
</svg>
contact@scraperwiz.com</a>`

footerDiv.append(socialsDiv)
// footerDiv.append(emailDiv)
footerDiv.append(copyrightDiv)

const mobileView = window.matchMedia("(max-width: 768px)").matches
if (!mobileView) {
  const footerHeight = document.querySelector(".footer").offsetHeight
  //    document.querySelector('.main').style.marginBottom = `${footerHeight}px`
}
