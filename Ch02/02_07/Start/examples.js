const person = ({name, age, job}) =>{
    var_name = name;
    var_age = age;
    var_job = job;

    return {
        getName: () => _name,
        getage: () => _age,
        getjob: () => _job,

        setjob: newjob => _job = newjob,
        setage: newage => _age = newage
     };
}

const me = Person({name:'Shaun', age:25, job:'developer' });
console.log(me.getjob());

me.setjob('senior developer');
console.log(me.getjob());

me.age(35);
console.log(me.getage());