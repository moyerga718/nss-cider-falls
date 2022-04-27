// This module should house a function that outputs HTML for the footer, this will be invoked in main.js

const phoneNumber = "666-666-6666"
const email = "ciderfalls@ciderfalls.gov.net.boone.torture.edu"
const address = "666 Satans Death Pit"



export const Footer = () => {
    let htmlString = `
    <footer class="footer">
        <h3>Any Questions? Contact us at:</h3>
        <p>${phoneNumber}</p>
        <p>${email}</p>
        <p>${address}</p>
    </footer>
    `
    return htmlString
}