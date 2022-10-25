const form = document.querySelector("#form")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const cityName = event.target.users_city.value
    const URL = `https://api.openbrewerydb.org/breweries?by_city=${cityName}&per_page=10`
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const randomBrewery = data[Math.floor(Math.random()*data.length)]
        const randomBreweryDisplay = document.createElement('a')
        const theBrewery = document.querySelector("#result")
        randomBreweryDisplay.textContent = randomBrewery.name
        randomBreweryDisplay.href = randomBrewery.website_url
        theBrewery.append(randomBreweryDisplay)
        console.log(randomBreweryDisplay)
    })

})

const zipcodeText = document.querySelector("#users-zipcode")
const zipcodeSubmit = document.querySelector("#zipcode-submit")
const giveMeAnotherOne = document.querySelector("#button")
const switchColorMode = document.querySelector("#color-mode")