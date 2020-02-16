function checkPass(pW){
    if(pW.length > 8 && pW.includes('$') ){
        return "Valid"
    } 
    else return "inValid"
    
}

let passWord = 'secret2020'
console.log(checkPass(passWord))