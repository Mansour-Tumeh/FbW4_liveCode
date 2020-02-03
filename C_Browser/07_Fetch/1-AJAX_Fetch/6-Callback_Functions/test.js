// let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]

// let planks = ["splintered plank", "straight plank", "bent plank"]

// //items = ["rusty nail", "rusty nail", "bent nail", "clean nail", "splintered plank", "straight plank", "bent plank"]

// function clean(item) {

//     //create list item and the text is 'item'
//     console.log(item)
//   }


//   function groupAndClean(items, cleaningMethod, done) {
//     for ( i = 0; i < items.length; i++) {
//       cleaningMethod(items[i])
//     }
  
//     done()
//   }

//   groupAndClean(nails.concat(planks), clean, function() {
//     console.log('Done !!!')
//   })







  //////book and library//////

  let book1 = {
      title : 'JavaScript',
      author : 'Brad Pitt'
  }

  let book2 = {
    title : 'JavaScript',
    author : 'Brad Pitt'
}

  let library = [book1, book2]

   writeBook = (Author, Title) => {return { title : Title, author : Author}}
  
  function showBooks(){
   console.log(library)
}

  function addBook(author, title, writeIt, showLib ){
      
   
    library.push(writeIt(author, title))
    showLib()


  }
addBook('someAuthor', 'someTitle',writeBook, showBooks)
