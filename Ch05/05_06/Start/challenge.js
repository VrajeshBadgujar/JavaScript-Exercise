const currentInputValues = {
    firstName: 'vrajesh', // Must be at least 2 characters
    lastName: '', // Must be at least 2 characters
    zipCode: '', // Must be exactly 5 characters
    state: '', // Must be exactly 2 characters
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2
        ? ""
        : "First name atleast 2 characters",      
    ], 
    lastName: [
        value => value.length >= 2
        ? ""
        : "Last name atleast 2 characters",
    ],
    zipCode: [
        value => value.length === 5  
        ? ""
        : "First name atleast 2 characters",
    ], 
    state: [
        value => value.length === 2
        ? ""
        : "First name atleast 2 characters",
    ],
};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, fieldName)=> [
        ...acc,
        ...criteria[fieldName].map(test=> test(inputs[fieldName]))
    ], []).filter(message => message)

}

console.log(getErrorMessages (currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */