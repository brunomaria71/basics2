import fetch from 'node-fetch'

// async function getDataAsync() {
// try {
// const response = await fetch('https://api.sampleapis.com/beers/ale') // GET ==> Promise
// const data = await response.json()
// console.log(data)
// } catch (err) {
//     console.error(err)
// }
// }

// getDataAsync()

// -------------------------------------------version 1 above, version 2 below, same outcome-------

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.error(err)
// })

// if its just one paramater, we don't need a parenthesis 

//------------------------------------------version 3 below---------------------

fetch('https://api.sampleapis.com/beers/ale')
.then(response => response.json())
.then(data => console.log(data[88])
.catch(err => console.error(err);

