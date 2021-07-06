//ARRAY DESTRUCTURING

//const people = ['A', 'B', 'C'];

//With the , I indicate to js that I don't need the first element of the array
//const [, , p1] = people;

/* const returnArray = () => {
    return ['ABC', 123];
} */

//const [words,numbers] = returnArray();
//console.log(words,numbers);


//1. name
//2. setName
const returnValue = (value) => {

    return [value, () => { console.log('Hello world') }];

}

const [name,setName] = returnValue('Francisco');
console.log(name);
setName();