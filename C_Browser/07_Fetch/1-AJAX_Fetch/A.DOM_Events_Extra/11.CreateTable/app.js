function createTable(){
    //body reference
    const body = document.querySelector('body');

    //create elemnets <table> and <tbody>

    const tbl = document.createElement('table') 
    const tblBody = document.createElement('tbody') ;
    
    //cells craetion 
    for(let i=0; i<=3; i++){
        // table row creation
        const row = document.createElement('tr') ;
        for(let j=0; j < 3; j++){
            //create element <td> and text node
            // Make the text node as content of <td>
            //put <td> at the end of the table row 
            const cell = document.createElement('td');
            const cellText = document.createTextNode('cell is row '+i+' , and column '+j);
            cell.id=(j+""+i)
            cell.appendChild(cellText)
            row.appendChild(cell);
        }
        //row add to the end of table body
        tblBody.appendChild(row);
    }
//append the <tbody> inside the <table>
tbl.appendChild(tblBody);
//put the <table> inside the <body>
body.appendChild(tbl)
//adding tbl border attribute
tbl.setAttribute('border','4') 

return tbl
}

const table = createTable()

console.log(table.children[0].children)

let cell00 = document.getElementById('00')
cell00.innerHTML="Last Name"
let  cell10 = document.getElementById('10')
cell10.innerHTML="First Name"
let  cell20 = document.getElementById('20')
cell20.innerHTML="Age"
let  cell01 = document.getElementById('01')
cell01.innerHTML="Kher Allah"
let  cell02 = document.getElementById('02')
cell02.innerHTML="Safwan"
let  cell03 = document.getElementById('03')
cell03.innerHTML="Safwan"
let  cell11 = document.getElementById('11')
cell11.innerHTML="Kher Allah"
let  cell12 = document.getElementById('12')
cell12.innerHTML="Kher Allah"
let  cell13 = document.getElementById('13')
cell13.innerHTML="Safwan"




