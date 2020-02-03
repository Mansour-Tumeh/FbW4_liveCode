document.getElementById('button1').addEventListener('click', getText)

document.getElementById('button2').addEventListener('click', getJson)

document.getElementById('button3').addEventListener('click', getApi)

//Get local text file data
function getText(){
fetch('local.txt')
.then(function(res){
    return res.text()
})
.then(function(data ){
    console.log(data) 
    document.getElementById('output').innerHTML = data
})
//The PromiseStatus will stay "resolved" even if there is an Error because we are getting from LOCAL DATA file, only SERVER can change automaticaly the PromiseStatus into "rejected" when there is an Error

// .catch(function(err){
//     console.log(err)
// })
}

//Get local JSON file data
function getJson(){
    fetch('local.json')
    .then(function(res){
       return res.json()
    })
    .then(function(data ){
       // console.log(data) 
        //data = JSON.parse(data)
        console.log(typeof data) 
        let output = ''
        data.forEach(item => {
            output += `
            <li>${item.title}</li>`
        })
        document.getElementById('output').innerHTML = output
    })
    //The PromiseStatus will stay "resolved" even if there is an Error because we are getting from LOCAL DATA file, only SERVER can change automaticaly the PromiseStatus into "rejected" when there is an Error
    
    // .catch(function(err){
    //     console.log(err)
    // })
    }

//Get data from API
function getApi(){
    fetch('https://api.github1.com/users')
    .then(function(res){
       return res.json()
    })
    .then(function(data ){
       // console.log(data) 
        //Fetch do this for us : data = JSON.parse(data)
        console.log(typeof data) 
        let output = ''
        data.forEach(item => {
            output += `
            <li>${item.login}</li>`
        })
        document.getElementById('output').innerHTML = output
    })
    //Only Server can change the promise status into rejected
    
    .catch(function(err){
        console.log(err)
    })
    }
