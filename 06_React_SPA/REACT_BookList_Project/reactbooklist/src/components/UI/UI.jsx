class UI {
  //Add Book to List
  static addBookToList(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    //Instert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`;
    list.appendChild(row);
  }
  //Clear Fields
  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  // delete book
  static deleteBook(target) {
    //console.log(target.closest('tr').children[2].innerHTML)
    if (target.className === 'delete') {
      target.closest('tr').remove();
      //target.parentElement.parentElement.remove()
      //Delete form local Storage
      Store.removeBook(target.parentElement.previousElementSibling.textContent); //previousElementSibling takes the one sibling before
      //Show Feedback
      UI.showAlert('The Book was removed successfully', 'success');
    }
  }
  //Give Validation Feedback
  static showAlert(message, className) {
    //Create Div
    const div = document.createElement('div');
    //add classname
    div.className = `alert ${className}`;
    //Add Text
    div.appendChild(document.createTextNode(message));
    //Append
    //1-Get Parent
    const container = document.querySelector('.container');
    //Get Form
    const form = document.querySelector('#book-form');
    //Insert Alert
    container.insertBefore(div, form); //Inserts befor the element
    //Timeout after 3sec
    setTimeout(function() {
      document.querySelector('.alert').remove();
      //div.remove()
    }, 3000);
  }
}
