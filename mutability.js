const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
};

// const clone1 = person ={
//     Object.assign(78, person.age), Object.assign('FR', person.country)
// };
const clone1 = {
    person: {
        age: 78,
        country: 'FR',
    },
};

const clone2 = {
    person: {
        age: 78,
        country: 'FR',
    },
};
const samePerson = {
    person: {
        age: 78,
        country: 'FR',
    },
};

Object.freeze(clone1)
Object.freeze(clone2)