// let promise = new Promise(function(resolve, reject){
//     //executor (the producing code "the singer give his result")
// })

// let promise = new Promise(function(resolve, reject){
//     //the function is executed automatically when the promise is constructed

//     //after 1 second the job is done with result "done"
//     setTimeout(() => resolve('done') , 1000)
// })

// let promise = new Promise(function(resolve, reject){
//     //the function is executed automatically when the promise is constructed

//     //after 1 second the job is done with result "done"
//     setTimeout(() => reject(new Error("Ooooh!!")), 1000)
// })
// console.log(promise)

// let promise = new Promise(function(resolve, reject){
// setTimeout(() => resolve('done') , 1000)
// });

// //resolve runs the first function in .then
// promise.then(
//     result => alert(result), //shows "done" after 1 sec
//     error => alert(error) //dosn't run
// )

//console.log(promise)

const posts = [{title:'Post one', body : 'This is post one'},{title:'Post two', body : 'This is post two'}];

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true
            if(!error){
                resolve()
            }else{
                reject('Error : something went wrong !!!')
            }
        }, 2000);
    })
}


function getPosts() {
    setTimeout(function(){
        let output = ''
        posts.forEach(item => output += `<li>${item.title}</li>`)
        document.body.innerHTML = output;

    }, 1000)
}
let post3 ={title:'Post three', body : 'This is post three'} 
let promise = createPost(post3)
promise.then(getPosts).catch(function(err){
     console.log(err)
 })