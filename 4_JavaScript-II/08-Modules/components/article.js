class Article{
   
    static create(){
        const arti = document.createElement('div')
        arti.className = "Article"
        
        arti.innerHTML =`<input 
        type="text"
        id = "inpt"
        placeholder="Enter title"
        />
        <h2 id="title"></h2>
        <p>This is an example of class components using only normal JS ES6 modules</p>
        <p>We will test the module export and import capabilities</p>`
       
        return arti
    }
}
//(event)=>{this.ChangeTitle(event)}
export default Article