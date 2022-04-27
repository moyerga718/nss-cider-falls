// IMPORT STATEMENTS AT THE TOP
import { Header } from "./header.js"
// CREATE FUNCTION THAT WILL PUT HTML IN CONTAINER IN BODY

const container = document.querySelector(".container")

const applicationHTML = `
<h1>HEADER FUNCTION</h1>
${Header()}
<h1>MAIN CONTAINER</h1>
<h2>DESTINATIONS</h2>
<h2>VISITORS</h2>
<h1>FOOTER</h1>
`

container.innerHTML = applicationHTML