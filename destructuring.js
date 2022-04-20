const student = {
    firstName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74,
}

const {firstName, hair } = student

console.log(firstName, hair)

const alumni = ['Ashley', 'Peter', 'Auralie', 'Sebas']

const [ash, pet, aur] = alumni

console.log(aur, ash)

const [first, second, third] = alumni
console.log(first, third)

//  basically we're creating variables! 

