// CREATE DATABASE --
// Database Object should have 4 properties: ParkAreas (id, areaName), Services (id, serviceName), ParkAreaServicesJoin (id, parkAreaId, serviceId), Guests (id, fullname, currentParkArea)
// Create getter functions for each property.

const database = {
    parkAreas: [
        {
            id: 1,
            areaName: "Chamfort River",
            imgURL: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg"
        },
        {
            id: 2,
            areaName: "Lost Wolf Hiking Trail",
            imgURL: "https://ftw.usatoday.com/wp-content/uploads/sites/90/2021/10/Julie2-2.jpg?w=1000&h=600&crop=1"
        },
        {
            id: 3,
            areaName: "The Lodge",
            imgURL: "https://25yearslatersite.com/wp-content/uploads/2019/08/new-statue.jpg"
        },
        {
            id: 4,
            areaName: "Gander River",
            imgURL: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Duck_River_reflections_-_20130915-143_HDR_4000x2200.jpg?crop=0,0,4000,2200&wid=4000&hei=2200&scl=1.0"
        },
        {
            id: 5,
            areaName: "Campgrounds",
            imgURL: "https://northeastohiofamilyfun.com/wp-content/uploads/2020/05/Campgrounds-in-Ohio.jpg"
        },
        {
            id: 6,
            areaName: "Pine Bluffs Trails",
            imgURL: "https://i2.wp.com/stepintoblacksburg.org/wp-content/uploads/2019/03/hiking-trail-lg.jpg?fit=1568%2C1045&ssl=1"
        }
    ],
    services: [
        {
            id: 1,
            serviceName: "Rafting"
        },
        {
            id: 2,
            serviceName: "Canoeing"
        },
        {
            id: 3,
            serviceName: "Fishing"
        },
        {
            id: 4,
            serviceName: "Hiking"
        },
        {
            id: 5,
            serviceName: "Picnicking"
        },
        {
            id: 6,
            serviceName: "Rock Climbing"
        },
        {
            id: 7,
            serviceName: "Lodging"
        },
        {
            id: 8,
            serviceName: "Parking"
        },
        {
            id: 9,
            serviceName: "Information"
        },
        {
            id: 10,
            serviceName: "Zip Lines"
        }
    ],
    parkAreaServices: [
        {
            id: 1,
            parkAreaId: 1,
            serviceId: 1
        },
        {
            id: 2,
            parkAreaId: 1,
            serviceId: 2
        },
        {
            id: 3,
            parkAreaId: 1,
            serviceId: 3
        },
        {
            id: 4,
            parkAreaId: 2,
            serviceId: 4
        },
        {
            id: 5,
            parkAreaId: 2,
            serviceId: 5
        },
        {
            id: 6,
            parkAreaId: 2,
            serviceId: 6
        },
        {
            id: 7,
            parkAreaId: 3,
            serviceId: 7
        },
        {
            id: 8,
            parkAreaId: 3,
            serviceId: 8
        },
        {
            id: 9,
            parkAreaId: 3,
            serviceId: 9
        },
        {
            id: 10,
            parkAreaId: 3,
            serviceId: 5
        },
        {
            id: 11,
            parkAreaId: 4,
            serviceId: 3
        },
        {
            id: 12,
            parkAreaId: 4,
            serviceId: 4
        },
        {
            id: 13,
            parkAreaId: 5,
            serviceId: 9
        },
        {
            id: 14,
            parkAreaId: 5,
            serviceId: 7
        },
        {
            id: 15,
            parkAreaId: 5,
            serviceId: 8
        },
        {
            id: 16,
            parkAreaId: 6,
            serviceId: 4
        },
        {
            id: 17,
            parkAreaId: 6,
            serviceId: 5
        },
        {
            id: 18,
            parkAreaId: 6,
            serviceId: 10
        },
    ],
    guests: [ 
        {
            id: 1,
            fullName: "Jimmy Dingle",
            currentParkAreaId: 1
        },
        {
            id: 2,
            fullName: "Jeremy Dingle",
            currentParkAreaId: 4
        },
        {
            id: 3,
            fullName: "Jim Dungle",
            currentParkAreaId: 3
        },
        {
            id: 4,
            fullName: "Jammy Dangie",
            currentParkAreaId: 3
        },
        {
            id: 5,
            fullName: "Jum Gingle",
            currentParkAreaId: 5
        },
        {
            id: 6,
            fullName: "Yijmm Eglind",
            currentParkAreaId: 2
        },
        {
            id: 7,
            fullName: "Jingle Dimmy",
            currentParkAreaId: 2
        },
        {
            id: 8,
            fullName: "Jangus Dangus",
            currentParkAreaId: 6
        },
        {
            id: 9,
            fullName: "Jink Lockheed",
            currentParkAreaId: 1
        },
        {
            id: 10,
            fullName: "Jampa Nangy",
            currentParkAreaId: 5
        },
        {
            id: 11,
            fullName: "Jurgi Bunko",
            currentParkAreaId: 4
        },
        {
            id: 12,
            fullName: "Jimmmmmmmmmmmmmmmmmmmm!",
            currentParkAreaId: 2
        },
        {
            id: 13,
            fullName: "Jimbo Dimbo",
            currentParkAreaId: 3
        },
        {
            id: 14,
            fullName: "Jiangling Dingron",
            currentParkAreaId: 6
        },
        {
            id: 15,
            fullName: "Jister Dintonomore",
            currentParkAreaId: 1
        },
        {
            id: 16,
            fullName: "BRUUUUUUUUMPO Dintonomost",
            currentParkAreaId: 3
        },
    ],
}

export const getParkAreas = () => {
    return database.parkAreas.map(parkAreas => ({...parkAreas}))}

export const getServices = () => {
    return database.services.map(services => ({...services}))}

export const getGuests = () => {
    return database.guests.map(guests => ({...guests}))}

export const getParkAreaServices = () => {
    return database.parkAreaServices.map(parkAreaServices => ({...parkAreaServices}))}