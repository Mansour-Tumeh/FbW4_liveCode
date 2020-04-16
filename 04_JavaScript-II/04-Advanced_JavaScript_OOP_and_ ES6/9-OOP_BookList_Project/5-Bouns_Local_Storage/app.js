//Book Class
class Book{
    constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
}
//console.log(Book)
//UI Class
class UI{
    //Add Book To List
    addBookToList(book){
        const list = document.getElementById('book-list')
        //Create tr element
        const row = document.createElement('tr')
        //Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>`
      list.appendChild(row)
    } 
// Clear fields
    clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    }
    // delete book
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
            //Remove from LS
            Store.removeBook(target.parentElement.previousElementSibling.textContent)
    }
}
// Give Validation feedBack 
   static showAlert(message, className){
        //Create div
    const div =  document.createElement('div');
    //Add classes
    div.className = `alert ${className}`
    //Add Text
    div.appendChild(document.createTextNode(message))
    //Append 
    //Get parent
    const container = document.querySelector('.container')
    //Get form
    const form = document.querySelector('#book-form')
    //Insert alert
    container.insertBefore(div, form)
     //Timeout after 3 sec  - setTimeout 
     setTimeout(function(){
         document.querySelector('.alert').remove()
         //div.remove()
     }, 3000)
   }

}
 //let ui = new UI
//console.log(ui)
// Local Storage Class
class Store{
    static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
        books = []
    }else{
        books = JSON.parse(localStorage.getItem('books'))
    }
    return books
}
    static displayBooks(){
       const books = Store.getBooks();
       books.forEach(book => {
           //instantiat UI
           const ui = new UI;
           //Add book to UI
           ui.addBookToList(book)
       })
    }
    static addBook(book){
        const books = Store.getBooks();
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            if(book.isbn === isbn ){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books))
    }
}

//Event Listeners
////DOM Load Event
document.addEventListener(`DOMContentLoaded`, Store.displayBooks)
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get inputs values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Instantiate book
    const book = new Book(title, author, isbn);
    console.log(book)
    //Instantiate UI
    const ui = new UI();
    //Validation
    if(title === '' || author === '' || isbn === ''){
        //Show Error feed Back
        UI.showAlert('Please fill in all the fields', 'error')
    } else {
    //Add book to list
    ui.addBookToList(book)
    //Add book to Storage
    Store.addBook(book)
    //Clear fields
    ui.clearFields();
    //Show Success feed Back
    UI.showAlert('The Book Added Successfully', 'success')
    
}

    e.preventDefault(); 
})
//// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //Int UI
    const ui = new UI();

    //Delete book
    ui.deleteBook(e.target);

    
    
    //Show feed back
    UI.showAlert('The Book Removed Successfully', 'success')
    e.preventDefault()
})

//Static methods
class User{
    static  method1(){
       //console.log(this)
        return `Hi`
    }
    static  method2(){
        //console.log(this)
        return this.method1()
        
    }
    
}

//no need for : 
let u = new User
//console.log(User)
//console.log(User.method2())
