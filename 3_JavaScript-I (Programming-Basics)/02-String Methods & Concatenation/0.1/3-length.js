let num = str.length;
console.log(num);
////////////////////////////////////////
function checkPass1(pW){
    if(pW.length > 8 && pW[0]==='$'){
        return "Valid"
    } else {
        return "inValid"
    }
}

let passWord = '$secret2020'
console.log(checkPass1(passWord))
//////////////////////////////////////////
function checkPass2(pW){
    if(pW.length < 8 ){
        return "inValid"
    } 
    for(i=0;i<pW.length;i++){
        if(pW[i]==='$'){
            return "Valid"
        }
    }
    
    return "inValid"
    
}

let passWord1 = 'secret$2020'
console.log(checkPass2(passWord))

//////////////////////////////////////////
