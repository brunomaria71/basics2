import fetch from "node-fetch";

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

//------------------------------------------version 3 below/ cleaner version---------------------

// fetch('https://api.sampleapis.com/beers/ale')
// .then(response => response.json())
// .then(data => console.log(data[88]))
// .catch(err => console.error(err));

// GET fetch
function goGetMyBeers() {
  const newBeer = { price: "$7", name: "Stella Artois", id: 220 };
  let allBeers;
  let allCoffees;

  fetch("https://api.sampleapis.com/beers/ale") // go and get data from api
    .then((response) => response.json()) // formatting the response
    .then((data) => {
        allBeers = data;
      //   console.log(data)
      //   data.push(newBeer); // manipulating data and adding new beer
      //   console.log(data[180])
    })
    .catch((myErr) => console.log("we got an error", myErr));

  fetch("https://api.sampleapis.com/coffee/hot")
    .then((allCoffees) => allCoffees.json())
    .then((formattedCoffees) => allCoffees = formattedCoffees)
    .catch((err) => console.err(err));

    return [...allBeers, ...allCoffees]

}

goGetMyBeers();


// //one way to write an ananymous function
// // function (myErr) {
//    return console.log(myErr)
//    return console.log('test') // this will not run
// }

// arrow function way
// () => {}

// () => {
//     return console.log('test') // eplicit return
//     return console.log('test')// this will not run
// }

// () => console.log('test') // implicit return with no curly braces
