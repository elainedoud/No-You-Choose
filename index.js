const URL = "https://api.openbrewerydb.org/breweries?by_state=new_york&per_page=3"

const zipcodeText = document.querySelector("#users-zipcode")
const zipcodeSubmit = document.querySelector("#zipcode-submit")
const giveMeAnotherOne = document.querySelector("#button")
const switchColorMode = document.querySelector("#color-mode")

fetch(URL)
.then(res => res.json())
.then(data => {
    data.forEach(zipcode => {
        console.log(zipcode)
    })
})
/*
function filterResults(zipcode){
    const results = []
    const searchText = "10004" //event.target['users-zipcode'].value
    const dbValue = zipcode.postal_code

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        input.value 
    })
    for (let i=0; i<zipcode.length; i++){
        if (zipcode [i][searchText] === dbValue){
            results.push(zipcode [i])
        }
    }
    */
    //console.log(results)