// import services, park areas, and joining data into this module

import { getParkAreas } from "./database.js";
import { getParkAreaServices } from "./database.js";
import { getServices } from "./database.js";

const parkAreas = getParkAreas()
const parkAreaServices = getParkAreaServices()
const services = getServices()

// create a function that produces HTML listing all the services provided - that will go right above destinations grid 

export const serviceBarHTML = () => {
    let htmlString = ''
    for (const service of services) {
        htmlString += `<p class ="service-bar-service-type" id="serviceType--${service.id}">${service.serviceName}</p>`
    }
    return htmlString
}

// make sure each item has its own id - these will be clicked on and a pop up bubble will show what where those services are offered!!!!!!!! wow.

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("serviceType")) {
            const [,serviceId] = itemClicked.id.split("--")
            const myServiceName = findServiceName(parseInt(serviceId))
            const areasWithThisService= makeAreaArrayForService(parseInt(serviceId))
            const areaListHTML = makeHTMLforAreaArray(areasWithThisService)
            window.alert(`${myServiceName} offered in ${areaListHTML}`)   
        }
    }
)

const makeAreaArrayForService = (serviceID) => {
    const areaArray = []
    for (const parkAreaService of parkAreaServices) {
        if (serviceID === parkAreaService.serviceId) {
            for (const parkArea of parkAreas) {
                if (parkAreaService.parkAreaId === parkArea.id) {
                    areaArray.push(parkArea)
                }
            }
        }
    }
    return areaArray
}

const makeHTMLforAreaArray = (areaArray) => {
    let htmlString = ''
    for (let i = 0; i < areaArray.length; i++) {
        if (i === 0) {
            htmlString += `${areaArray[i].areaName}`
        } else if (i === (areaArray.length - 1) && areaArray.length === 2) {
            htmlString += ` and ${areaArray[i].areaName}`
        } else if (i === (areaArray.length - 1) && areaArray.length > 2) {
            htmlString += `, and ${areaArray[i].areaName}`
        } else {
            htmlString += `, ${areaArray[i].areaName}`
        }
    }
    return htmlString
}

const findServiceName = (serviceID) => {
    for (const service of services) {
        if (serviceID === service.id) {
            return service.serviceName
        }
    }
}