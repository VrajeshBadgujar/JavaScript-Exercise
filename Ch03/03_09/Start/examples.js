const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

const developerjob = employees.filter(developer => developer.jobTitle==='developer' );
// console.log(developerjob);

const devSalary = developerjob.map(developer=>developer.salary)

const totalSalary = devSalary.reduce((acc, x)=>
    acc+x, 0
)

const avgSalary = totalSalary/ developerjob.length

// console.log(avgSalary);

const nondev = employees.filter(nondev=>nondev.jobTitle!=='developer')
// console.log(nondev);

const nondevSalary = nondev.map(nondev=>nondev.salary)
console.log(nondevSalary);

