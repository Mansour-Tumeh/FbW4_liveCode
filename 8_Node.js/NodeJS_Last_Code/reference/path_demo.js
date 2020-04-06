const path = require('path')
//it's a core module alraedy included within Node.js

// console.log(path)

//get the base file name (path.basename)
// console.log(path.basename(__filename))
//returns : path_demo.js

//get the Directory name (path.dirname)
// console.log(path.dirname(__filename))
//returns : c:\Users\safwan\Desktop\NodeJS_First_Code\reference

//get the file extention

// console.log(path.extname(__filename))
//returns : .js

//Create path Object
// console.log(path.parse(__filename))

//returns :
/*
{
  root: 'c:\\',
  dir: 'c:\\Users\\safwan\\Desktop\\NodeJS_First_Code\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}
*/
// console.log(path.parse(__filename).name)
//returns :'path_demo'

//concatenate paths : join a path into a current path
//the result we want is : ...current_path/test/hello.html
// console.log(path.join(__dirname, 'test', 'hello.html'))