document.getElementById('button').addEventListener('click', loadData)

//Evenrt Handler
function loadData(){
    //Create XHR Request Object
    const xhr = new XMLHttpRequest();

    //OPEN
    xhr.open('GET', 'data.txt', true);
    //console.log(xhr)
    //onload method (GET, PUT, ...)
    xhr.onload = function(){
      //  console.log('READYSTATE :', xhr.readyState)
        console.log('The HTTP Status',this.status)
          // HTTP Statuses
          // 200: "OK"
         // 403: "Forbidden"
         // 404: "Not Found"
         if(this.status === 200){
             document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;  
         }
   
    }
    xhr.onprogress = function(){
        // console.log('READYSTATE :', xhr.readyState)
        
    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready
    }
   xhr.onreadystatechange = function(){
    console.log('READYSTATE :', xhr.readyState)
    if(this.status === 200 && this.readyState === 4){
        console.log(this.responseText)
    }

xhr.onerror = function(){
    console.log('Request error ...')
}

    }
    xhr.send();

}