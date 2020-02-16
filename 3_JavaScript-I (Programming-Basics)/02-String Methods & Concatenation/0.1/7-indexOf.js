let paragraph = 'The quick brown fox jumps over the lazy dog.'+
'If the dog barked, was it really lazy?';
let str = prompt('search for index of :');

let result = `Yes it is found in the position : ${paragraph.indexOf(str)}`
document.write(result)
////////////////////////////////////////////////////
function searchForLetter(pW,ltr){
    if(pW.indexOf(ltr) < 0){
        return `This ${ltr} is not found in the given Password`
    }
    else{
        return `Yes it is found in the position : ${pW.indexOf(ltr)}`
    }
}
let ltr1 = prompt('search in my password for  this letter :');
let pass = "sercret&2020";
let result1 = searchForLetter(pass, ltr1);
document.write(result1);
//////////////////////////////