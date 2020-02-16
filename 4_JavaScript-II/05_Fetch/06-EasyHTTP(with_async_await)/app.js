const http = new EasyHTTP;

//Get Users
// http.get('https://api.github.com/users/Safwan2025')
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Create Users
const user = {
    name : 'Mr. Harris',
    username : 'bomberman',
    email : 'h.2000@gmail.com'
}

//Post User
// http.post('https://jsonplaceholder.typicode.com/users', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Update single User on Server
// http.put('https://jsonplaceholder.typicode.com/users/7', user)
// .then(val => console.log(val))
// .catch(er => console.log(er))

//Delete User
http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(val=>console.log(`User has been deleted ${val}`))
.catch(er=>console.log(er))