// const url = require('url');

//Parsing the URL string using Legacy API
// const myUrl = url.parse('https://mywebsite.com/hello.html?id=100&status=active')

//Parsing the URL string using the WHATWG
// const URL = require('url').URL;
const myUrl = new URL('https://user:pass@mywebsite.com:5000/hello.html?id=100&status=active#hash')
// the URL class is also member of the Global Object
// console.log(myUrl)

//Serialized URL
//  console.log(myUrl.toString())
//  console.log(myUrl.href)

//Host (root domain)

myUrl.hostname = 'jay.com'
//username:
myUrl.username = 'admin'
//password:
myUrl.password = '3fx$2yut'
// console.log(myUrl)

//Param Object
// console.log(myUrl.search);
// console.log(myUrl.searchParams);

//Loop through params
myUrl.search = '?id=101&status=inactive'
myUrl.searchParams.forEach((value, key) => console.log(key, value))
// console.log(myUrl.searchParams)