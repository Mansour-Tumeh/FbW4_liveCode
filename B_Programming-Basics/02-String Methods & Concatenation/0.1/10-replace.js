let paragraph = 'The quick brown fox jumps over the lazy dog' ;
let searchTerm = 'lazy';
let replaceBy = 'smart';

paragraph = paragraph.replace(searchTerm, replaceBy);
console.log(paragraph);

///////////////////////////////////////////////
paragraph = paragraph.replace(' ', '*');
console.log(paragraph);
//////////////////////////////////////////////
function replaceBy(p, ph1, ph2 ){
    if(p.includes(ph1)){
        return p.replace(ph1, ph2)
    } else {
        return `${ph1} is not found`
    }
}

let para = 'The quick brown fox jumps over the lazy dog.';
let replacedItem = 'lazy';
let replacedByItem = 'smart';
let result = replaceBy(para,replacedItem, replacedByItem );
console.log(result);

//////////////////////////////////////////////////