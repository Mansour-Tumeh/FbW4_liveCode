function easyHTTP() {
    this.http = new XMLHttpRequest()
}

// Make an HTTP GET Request 
easyHTTP.prototype.get = function (url, action){
   
    
    
    //URL IS : 'https://jsonplaceholder.typicode.com/posts'
    this.http.open('GET',url,true);
   // let self = this
    this.http.onload = () => {
        if(this.http.status === 200 ){
            /*action is : function(items){
                console.log(items)
             } 
             items : self.http.responseText
    */ 
 
         action(null, this.http.responseText)
           
        }else{
            action(`Page Not Found : ${this.http.status} `)
        }
    }
    this.http.send();

}
// Make an HTTP POST Request 
// Make an HTTP PUT Request 
// Make an HTTP DELETE Request 