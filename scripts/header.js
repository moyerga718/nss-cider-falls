// This module should house a function that outputs html for header.

export const Header = () => {
    let htmlString = `
    <header class="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULMZhKagE0yMmdyEKKSkqrL5VEZkvb5ZNqA&usqp=CAU" alt="Cider Falls County Park logo" class="header-logo">
        <h1>Cider Falls County Park</h1>
    </header>
    `
    return htmlString
}