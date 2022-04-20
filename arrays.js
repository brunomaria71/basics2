// let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[1]) // Lamborghini 

// console.log(cars.length) // 5

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'grey',
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55_000
}]

console.log(ourCars[1].miles)

const { miles, year} = ourCars[0]

const age = 2022 - year
const mileage = miles / age

console.log(mileage + ' miles per year')

if (mileage < 10000) {
    console.log('This is a LOW mileage car.') 
     } else {
            console.log('This is NOT a low mileage car.')
        }

        // (condition) ? if : else 

        (mileage < 10_000)
       mileage ? console.log('This is a LOW mileage car.') : console.log('This is NOT a low mileage car.')

       const isIt = (mileage < 10_000) ? 'is a' : 'is NOT a'
       console.log(`This ${isIt} a LOW mileage car.`)