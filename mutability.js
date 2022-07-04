// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// };

const clone1 = {
    person: {
        name: 'Rick',
        age: 78,
        country: 'FR',
    },
};

const clone2 = {
    person: {
        name: 'Rick',
        age: 78,
        country: 'FR',
    },
};
// const samePerson = {
//     person: {
//         age: 78,
//         country: 'FR',
//     },
// };
const samePerson = person

Object.freeze(clone1)
Object.freeze(clone2)
console.log(clone1)
console.log(clone2)
console.log(samePerson)
