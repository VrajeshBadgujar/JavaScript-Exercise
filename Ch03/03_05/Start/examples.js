const employees = [{
    name: 'Jane Doe',
    salary: 90000,
}, {
    name: 'Donald Jones',
    salary: 65000,
}, {
    name: 'Donna Appleseed',
    salary: 1500000,
}, {
    name: 'John Smith',
    salary: 250000,
}];

const makesMorethanMillion = employees => employees.salary > 100000;

const result = employees.some(makesMorethanMillion);

const formValues = [
    "Shaun",
    "Wassell",
    "Maine",
    "",
]

const isNotEmpty = string => !!string;

const filled = formValues.every(isNotEmpty)
console.log(filled);