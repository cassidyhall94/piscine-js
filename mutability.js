let samePerson = person

let clone1 = {...person}
let clone2 = {...person}

Object.freeze(clone1)
Object.freeze(clone2)

person.age = 78;
person.country = 'FR';