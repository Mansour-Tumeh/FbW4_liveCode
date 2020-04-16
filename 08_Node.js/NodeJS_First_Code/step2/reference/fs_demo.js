const fs = require('fs')
const path = require('path')

//Create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('Folder created ...')
// })

//Create a file and write to it 

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//     'Hello FbW4 Heroes', err => {
//         if (err) throw err
//         console.log('File written ...')
//     })

//Create a file , write and append to it
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//     'Hello FbW4 Heroes  ', err => {
//         if (err) throw err
//         console.log('File written ...')

//         //File Append
//         fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//             'I Love Node.js',
//             err => {
//                 if (err) throw err
//                 console.log('text appended')
//             })
//     })

//Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data)
//     })

//Rename file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'),
//     path.join(__dirname, '/test', 'hello_world.txt'),
//     err => {
//         if (err) throw err
//         console.log('File Renamed ...')
//     }
// )

/*---------------------------------------*/
// WRITE THE FOLLOWING USERES NAME IN A FILE AND THEN DISPLAY THEM
//" Omer", "Sascha", "Stefan"
// const users = [{
//         name: "Eng. Omer"
//     },
//     {
//         name: "Teacher. Stefan"
//     },
//     {
//         name: "Prof. Sascha"
//     }
// ]
// //Create a folder called users
// fs.mkdir(path.join(__dirname, '/data'), {}, err => {
//     if (err) throw err
//     console.log('Folder created ...')
//     //create a file and write 
//     fs.writeFile(path.join(__dirname, '/data', 'users.json'), JSON.stringify(users), err => {
//         if (err) throw err
//         console.log('File created and data written ...')
//         //read File
//         fs.readFile(path.join(__dirname, '/data', 'users.json'), 'utf8', (err, users) => {
//             if (err) throw err
//             //dipslay user name
//             JSON.parse(users).forEach(user => {
//                 console.log(user.name)
//             })
//         })

//         //alert the successfull message
//         console.log('Users name displayed ...')
//     })
// })

/*---------------------------------------*/

//remove a folder FROM THE DIRECTORY
//NOTE : "Folder To be Deleted" must be an empty folder.
// fs.rmdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw err
//     console.log("Folder deleted")
// })

//Read the content of a folder
// fs.readdir(__dirname, (err, files) => {
//     if (err) throw err
//     console.log(files)
// })

// fs.readdir(path.join(__dirname, '/data'), (err, files) => {
//     if (err) throw err
//     console.log(files)
// })

//Copy a file
fs.copyFile(path.join(__dirname, '/data', 'users.json'), path.join(__dirname, '/data', 'copy.json'), err => {
    if (err) throw err
    console.log(err)
})

//result if no destination file : it will be created and write the copy to it
//result if destination file has somedata : it will replace it with the copied data
//result if no src : it will throw an error