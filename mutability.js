// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// }  
let samePerson = person

let clone1 = {...person}
let clone2 = {...person}

clone1.age = person.age
clone1.country = person.country
clone1.age = 78;
clone1.country = 'FR';

clone2.age = person.age
clone2.country = person.country
clone2.age = 78;
clone2.country = 'FR';

Object.freeze(clone1)
Object.freeze(clone2)

console.log(person)
console.log(clone1)
console.log(clone2)
console.log(samePerson)