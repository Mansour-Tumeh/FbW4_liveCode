// Object extra infos
// let person = {

// }
// person.age = 45
// person['firstname'] = 'Harris'
// let index = 'lastname'
// let value = 'Riaz'
// person[index] = value
// console.log(person)

//MAPS = key-value pairs - can use ANY type as a key or value

//Create a map
const map1 = new Map();

//Map is a collection of keyed data items, just like Object. But the main difference is that Map allows keys of any type

/**
 * new Map() - creates the map
 * map.set(key, value) - stores the value by the key
 * map.get(key) - returns the value stored by the key, 'undefined' if key doesn't exist in map
 * map.has(key) - returns true if the key exists and false otherwise
 * map.delete(key) - removes the value by the key
 * map.clear() - removes everything from the map
 * map.size - returns the current element count
 */
//map.size
 //console.log(map1.size)

 //Set Keys
 const key1 = 'something',
       key2 = {a:5},
       key3 = function(){console.log('hi')};

//Set map values by the keys 
map1.set(key1, 'Value of key1')
map1.set(key2, {b:8})
map1.set(key3, 'Value of key3')
// console.log(map1.size)
//Get value by key
// console.log(map1.get(key1))
// console.log(map1.get(key2))
// console.log(map1.get(key3))

//Iterating MAPs
//Loop using for ... of
// let person = {
//     name : 'safwan',
//     number: '0112233'
// }
// for(let[key, value] of map1){
//     console.log(`${key} = ${value}`)
// }

//iterate keys only
for(let x of map1.keys()){
   // console.log(x)
}

// Iterate values only
for(let y of map1.values()){
   //console.log(y)
}

//Loop with forEach
map1.forEach((value, key) =>{
    //console.log(`${key} = ${value}`)
})

//Convert to Arrays
//Create an array of key/value pairs
const keyValArr = Array.from(map1)

//console.log(keyValArr[1][1])

//Create an array of keys
const keysArr = Array.from(map1.keys())
//console.log(keysArr)

//Create an array of values
const valArr =  Array.from(map1.values())
//console.log(valArr)

