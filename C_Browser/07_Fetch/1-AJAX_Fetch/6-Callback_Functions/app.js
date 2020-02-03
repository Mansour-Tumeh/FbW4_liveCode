const posts = [{
    title : 'Post one',
    body: 'This is amazing post one'
},
{
    title : 'Post two',
    body: 'This is amazing post two'
}]

//asynchronized  functions
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(item){
//             output += `<li>${item.body}</li>`
//         });
//         document.body.innerHTML = output
//     }, 1000)
// }

// let p1 = {title : 'Post three',
// body: 'This is amazing post three'}
// createPost(p1)
// getPosts();

//Callback functions

// function createPost(post, xyz){
//     setTimeout(function(){
//         posts.push(post);
//         xyz()
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(item){
//             output += `<li>${item.body}</li>`
//         });
//         document.body.innerHTML = output
//     }, 1000)
// }

// let p1 = {title : 'Post three',
// body: 'This is amazing post three'}
// createPost(p1, getPosts)
// //getPosts();
let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

let planks = ["splintered plank", "straight plank", "bent plank"]

function clean(item) {
    console.log(`I just cleaned a ${item}`)
  }

function groupAndClean(items, cleaningMethod, done) {
    for (var i = 0; i < items.length; i++) {
      cleaningMethod(items[i])
    }
  
    done()
  }
  
  groupAndClean(nails.concat(planks), clean, function() {
    console.log('Whew, that was a lot of work!')
  })