let clone1 = { ...person }
let clone2 = { ...person }

clone1.person.age = 78
clone1.person.country = 'FR'

clone2.age = 78
clone2.country = 'FR'

let samePerson = person

Object.freeze(clone1)
Object.freeze(clone2)

console.log(clone1)
console.log(clone2)
console.log(samePerson)