// Import parkAreas, services, and parkAreaServices

import { getParkAreas } from "./database.js";
import { getServices } from "./database.js";
import { getParkAreaServices } from "./database.js";

const parkAreas = getParkAreas();
const services = getServices();
const parkAreaServices = getParkAreaServices();

// OK so first, we need to have a container to hold everything
// that container needs to have a TITLE and then ANOTHER FLEX CONTAINER that will hold all the destination cards

export const DestinationHTML = () => {
    //Create basic HTML string with title and structure
    let htmlString = `
    <section class="destination-section">
        <h2>Park Destinations</h2>
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
            <h3 class="destination-name">${area.areaName}</h3>
            <h4>Services</h4>
            <ul class="destination-card-service-list">
                ${destServicesList(parkAreaId)}
            </ul>
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


