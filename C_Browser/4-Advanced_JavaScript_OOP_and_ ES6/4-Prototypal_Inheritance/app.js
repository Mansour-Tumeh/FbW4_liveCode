//prototype is an invisible property of all objects that we create, it has typeof object
//it has some predefined methods like isPrototypeOf () and more
//we can use prototype to add extra properties later after we finish our object or constructor definition
//the extra added properties using prototype it will be added to all instances from that object

// let animal = {
//   eats : true 
// }
// let rabbit = {
//   jumbs: true
// }

//with constructor we use .prototype
//with object we use .__proto__

//console.log(animal)
//rabbit.__proto__ = animal
//rabbit.__proto__ = animal
//console.log(rabbit.ears)
// function Animal(iEats){
//   this.eats = iEats
// }
// let longEars = {
//   earlength : 10,
//   __proto__ : rabbit
// }
// let anim1 = new Animal(true)
 

 //Task : Please write a user object 
 // user has two properties : name & pass
 // write another object it is guest
 /// guest has two extra properties which are role and authorities
 // implement inheritance 
 // be fast the first one will get one euro from Safwan
//  const user = {
//    name : 'username',
//    pass : 'password',
//    changePassword : function(newPass){
//      this.pass = newPass
//    }
//  }
//  const geust = {
//   type : 'geust',
//   authorities : ['read'],
//   __proto__ : user
//  }
//  geust.changePassword('myEasyPass')
//  console.log(geust.pass)
 //write admin object
 //admin inherit geust
 // admin has an extra  method to add or delete from authorities
 // modifyAuths : function(addOrDel, item){
   //check add or delete
   //if it is add
   // this.authorities.push(item)]
   //if delete
   //check if the item is not empty
   // search for the item and delete it
   //if the item is empty
   //delete the last index in the auth array
 //}

//  const admin = {
//   __proto__ : geust,
//   modifyAuths : function(addOrDel, item){
//     //addOrDel is boolean (true for add and false for delete)
//     if(addOrDel){
//       if(item){
//         this.authorities.push(item)
//       }else{
//         console.log("we can't add empty item")
//       }
//     }else{
//       if(item){
//         let pos = 0
//         for(i = 0; i<this.authorities.length; i++){
//           if(this.authorities[i] == item) pos = i
//         }
//         if(pos > 0){this.authorities.splice(pos,1)} 
//         else {console.log('Sorry item does not exist')}
//       }else{
//         this.authorities.pop()
//       }
//     }
//     return this.authorities
//   }
//  }
// console.log(admin.modifyAuths(1,'write'))
//  //admin.modifyAuths(1,'write')

 function Product (iName, iPrice){
   this.name = iName
   this.price = iPrice
   this.getPrice = function(){
     return this.price
   }
 }

 const p1 = new Product('MyPhone', 250)
 console.log(p1)
 
 function Food(fName, fPrice, iVegan){
  Product.call(this,fName,fPrice) // like in Object __proto__: Product
  this.category = 'food';
   this.vegan = iVegan;
 }

 const p2 = new Food('salad', 3 , true)
 console.log(p2.getPrice())