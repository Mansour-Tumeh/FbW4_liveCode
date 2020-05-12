const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'testUser', //root
    password: 'test' //root password
})

con.connect((err)=>{

    if(err){
        console.log(err)
    }else{
        console.log('connected!')
        con.query('CREATE DATABASE IF NOT EXISTS \`www\`', (err,result) => {
            if(err){
                console.log(err)
            }else{
                console.log('database created')
            }
        })
        
        con.query(`CREATE TABLE IF NOT EXISTS \`www\`.\`users\` (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(30) NOT NULL,
            fullname VARCHAR(30) NOT NULL,
            password VARCHAR(50) NOT NULL)` , (err,result) => {

                if(err){
                    console.log(err)
                }else{
                    console.log('table created')
                }

            })
        
        con.query(` SELECT * FROM www.users ` , (err,result) => {
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })

        con.query(` INSERT INTO www.users(username,fullname,password) VALUES ('adminuser','admin','admin')`, (err,result) => {
            if(err){
                console.log(err)
            }else{
                console.log(result)
            }
        })

    }

})