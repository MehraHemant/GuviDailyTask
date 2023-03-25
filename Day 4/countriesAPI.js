// Use the rest countries API Url -> https://restcountries.com/v3.1/all and display all the country flags in the consol.

let url = 'https://restcountries.com/v3.1/all';

let fetchUrl = fetch(url)
fetchUrl.then((res) => res.json()).then((bigData) => {
    for (let data of bigData) {
        console.log(`${data.name.official} - ${data.flag}`);
        }
    });

