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
easyHTTP.prototype.post = function(url, data, action){
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if(this.http.status === 201){
            action(null, this.http.responseText)
        }else{
            action(`Page not found ${this.http.status}`)
        }

    }

    this.http.send(JSON.stringify(data))
}
// Make an HTTP PUT Request 
easyHTTP.prototype.put = function (url, data, action){
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')
    this.http.onload = () => {
        if(this.http.status === 200){
            action(null, this.http.responseText)
        }else{
            action(`Page not found ${this.http.status}`)
        }

    }
    this.http.send(JSON.stringify(data))
}
// Make an HTTP DELETE Request 
easyHTTP.prototype.delete = function (url, action){
    this.http.open('DELETE', url, true)
   
    this.http.onload = () => {
        if(this.http.status === 200){
            action(null, 'Deleted')
        }else{
            action(`Failed to delete${this.http.status}`)
        }

    }
    this.http.send()
}