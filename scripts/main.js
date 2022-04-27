// IMPORT STATEMENTS AT THE TOP
import { Header } from "./header.js"
import { Footer } from "./footer.js"
import { DestinationHTML } from "./destinations.js"
import { GuestsHTML } from "./visitors.js"
// CREATE FUNCTION THAT WILL PUT HTML IN CONTAINER IN BODY

const container = document.querySelector(".container")

const applicationHTML = `
${Header()}
<section class="main-section-container">
    ${DestinationHTML()}
    ${GuestsHTML()}
</section>
${Footer()}
`

container.innerHTML = applicationHTML