// IMPORT STATEMENTS AT THE TOP
import { Header } from "./header.js"
import { Footer } from "./footer.js"
import { DestinationHTML } from "./destinations.js"
// CREATE FUNCTION THAT WILL PUT HTML IN CONTAINER IN BODY

const container = document.querySelector(".container")

const applicationHTML = `
${Header()}
<h1>MAIN CONTAINER</h1>
<section class="main-section-container">
    ${DestinationHTML()}
    This is where I'll invoke function that makes text for visitors pane
</section>
${Footer()}
`

container.innerHTML = applicationHTML