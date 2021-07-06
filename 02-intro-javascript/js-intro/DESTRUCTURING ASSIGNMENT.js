
//DESTRUCTURING ASSIGNMENT


const person = {
    name: 'Francisco',
    age: 23,
    key: 'ABCDE',
    range: 'Captain'
};

//const { key, name, age} = person;

//console.log(key);
//console.log(name);

const print = ({ name, age, key, range }) => {

    //console.log(name, age, key, range);

    return {
        nameKey: key,
        years: age,
        latlon: {
            lon: -41.54,
            lat: 26.27
        }

    }
}

//one way
//const { nameKey, years, latlon:{lat, lon} } = print(person);

//another way (more common)
const {nameKey,years,latlon} = print(person);
const {lat,lon} = latlon;

console.log(nameKey, years);
console.log(lat, lon);