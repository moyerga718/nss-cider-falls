// import guests data from database
import { getGuests } from "./database.js";

// FIRST, create section to hold everything
// Section will have a title and an unordered list
// We'll need to make a function that outputs the general html and a second function to create list items for every name

const guests = getGuests();

export const GuestsHTML = () => {
    const guestsHTML = `
    <section class="guests-section">
        <h2>Current Park Guests</h2>
        <div class="guest-list-container">
            <ul class="guest-list">
                ${guestListHTML()} 
            </ul>
        </div>
    </section>
    `
    return guestsHTML
}

const guestListHTML = () => {
    let guestList = ''
    for (const guest of guests) {
        guestList += `
        <li class="guest-list-item">${guest.fullName}</li>
        `
    }
    return guestList
}   