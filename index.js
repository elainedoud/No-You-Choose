const form = document.querySelector("#form")
const theBrewery = document.querySelector("#result")
const randomBreweryDisplay = document.querySelector("#display-result")
const colorSwitcher = document.querySelector("#color_button")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const cityName = event.target.users_city.value
    const URL = `https://api.openbrewerydb.org/breweries?by_city=${cityName}&per_page=10`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const randomBrewery = data[Math.floor(Math.random()*data.length)]
        randomBreweryDisplay.textContent = randomBrewery.name
        randomBreweryDisplay.href = randomBrewery.website_url
        //theBrewery.append(randomBreweryDisplay)
        console.log(randomBreweryDisplay)
        const redoButton = document.querySelector("#button")
        redoButton.addEventListener('click', (event) => {
            event.preventDefault()
            const randomBrewery = data[Math.floor(Math.random()*data.length)]
            randomBreweryDisplay.textContent = randomBrewery.name
            randomBreweryDisplay.href = randomBrewery.website_url
})
    })

})
colorSwitcher.addEventListener('click', (event) => {
    let switcher = document.getElementById('color_button')
    switcher.classList.toggle('color_button')
})



const zipcodeText = document.querySelector("#users-zipcode")
const zipcodeSubmit = document.querySelector("#zipcode-submit")
const giveMeAnotherOne = document.querySelector("#button")
const switchColorMode = document.querySelector("#color-mode")
