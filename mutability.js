const clone1 = {
        name: 'Rick',
        age: 78,
        country: 'FR',
};

const clone2 = {
        name: 'Rick',
        age: 78,
        country: 'FR',
};

const samePerson = person

Object.freeze(clone1)
Object.freeze(clone2)