const clone1 = {...person}
const clone2 = {...person}

clone1.age = 78
clone1.country = 'FR'

clone2.age = 78
clone2.country = 'FR'

const samePerson = person

Object.freeze(clone1)
Object.freeze(clone2)