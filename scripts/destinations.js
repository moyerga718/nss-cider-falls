// Import parkAreas, services, and parkAreaServices

import { getParkAreas } from "./database.js";
import { getServices } from "./database.js";
import { getParkAreaServices } from "./database.js";
import { getGuests } from "./database.js"
import { serviceBarHTML } from "./services.js"

const parkAreas = getParkAreas();
const services = getServices();
const parkAreaServices = getParkAreaServices();
const guests = getGuests();


// OK so first, we need to have a container to hold everything
// that container needs to have a TITLE and then ANOTHER FLEX CONTAINER that will hold all the destination cards

export const DestinationHTML = () => {
    //Create basic HTML string with title and structure
    let htmlString = `
    <section class="destination-section">
        <h2 class="destination-section-title">Park Destinations</h2>
        <h4><i>We're happy to offer the following services:</i></h4>
        <div class="service-bar-container">
            ${serviceBarHTML()}
        </div>
        <div class="destination-card-container">
            ${destCardCreator()}
        </div>
    </section>
    `
    return htmlString
}

const destCardCreator = () => {
    let destCardHtml = ``
    for (const area of parkAreas) {
        let parkAreaId = area.id
        destCardHtml += `
        <div class="destination-card">
            <h3 class="destination-name" id="destinationID--${area.id}">${area.areaName}</h3>
            <div class="service-list-div">
            <h4>Services</h4>
            <ul class="destination-card-service-list">
                ${destServicesList(parkAreaId)}
            </ul>
            </div>
        </div>
        `
    }
    return destCardHtml
}

const destServicesList = (areaID) => {
    let destServiceListHTML = ''
    for (const parkAreaService of parkAreaServices) {
        if (areaID === parkAreaService.parkAreaId) {
            let serviceID = parkAreaService.serviceId
            for (const service of services) {
                if (serviceID === service.id) {
                    destServiceListHTML += `<li class="service-list-item">${service.serviceName}</li>`
                }
            }
        }
    }
    return destServiceListHTML
}


// make function that grabs area ID by clicking on it, invokes function that creates array of guests in that area.
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("destinationID")) {
            const [,destinationId] = itemClicked.id.split("--")
            const guestsInThisArea= makeGuestsArrayForArea(parseInt(destinationId))
            window.alert(`There are ${guestsInThisArea.length} guests in this area`)   
        }
    }
)

const makeGuestsArrayForArea = (areaId) => {
    const guestArray = [];
    for (const guest of guests) {
        if (guest.currentParkAreaId === areaId) {
            guestArray.push(guest)
        }
    }
    return guestArray
}

