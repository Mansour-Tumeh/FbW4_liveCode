const con = require('./db');
const bcrypt = require('bcrypt');


findUser = async (user) => {
    
    let field = null
    if(user){
        // if user = number then return 'id'. if user is a string then return 'username'
        field  = Number.isInteger(user) ? 'id' : 'username'
    }

    //prepare the sql query
    let sql = `SELECT * FROM users WHERE ${field} = ?`
 
    //the con.query method would complete the sql query for us as:
    //in case user is an id : SELECT * FROM users WHERE id = user
    //in case user is an username: SELECT * FROM users WHERE username = 'user'
    let result = await con.query(sql,user)

    if(result.length){
        return result[0]
    }else{
        return null
    }

}

createUser = async (body) => {

    let password = body.password;
    //Saving in the body object the hashed password
    body.password = bcrypt.hashSync(password,10)

    let info = [];
    //Creating an array with the information to save in the table
    for(property in body){
        info.push(body[property])
    }

    //prepare the sql query
    let sql = `INSERT INTO www.users(username,fullname,password) VALUES (?,?,?)`

    let output = await con.query(sql,info)

    return output.insertId;
}

loginUser = async (username,password) => {

    //find the user in the table inside the database
    let user = await findUser(username)

    if(user){
        //If the user exist check for the passwords to be the same
        if(bcrypt.compareSync(password,user.password)){
            return user;
        }
    }

    //If not user is found or password is wrong then return null
    return null;

}

const userFunction = {
    findUser,
    createUser,
    loginUser
}

module.exports = userFunction;