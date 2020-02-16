const user = {email : 'safwan@email.test'};

try{
console.log('Hello Jay')

//Make a ReferenceError
//myFunction()
//Make a TypeError
//null.myMethod()
//Make a SyntaxError
//eval('Hello Lana')
if(!user.name){
    //throw 'User has no name'
    throw  new SyntaxError('User has no name')
}
 console.log('Hello Clemens')
}catch(err){
console.log(`UserError: ${err.message}`)
}finally{
    console.log('Finally runs regardless of the result ....')
    console.log('Hello Clemens')
}

console.log('Program continues ...')

