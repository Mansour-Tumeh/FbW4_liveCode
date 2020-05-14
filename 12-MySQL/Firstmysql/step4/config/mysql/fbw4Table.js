const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user:'testUser',
    password: 'test'
})

con.connect((err)=>{
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log('connected to mysql')

        let sql = `CREATE TABLE IF NOT EXISTS \`www\`.\`FBW4_Participants\`
                    (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(30) NOT NULL,
                    lastname VARCHAR(30) NOT NULL )
        `

        con.query(sql,(err,result) => {
            if(err){
                console.log(err.sqlMessage)
            }else{
                console.log('table created')
            }
        })

        let info = [{name:'Ali',lastname:'Alhayek'},{name:'Andri',lastname:'Gianapril'},
        {name:'Clemens',lastname:'B'},{name:'Eren',lastname:'Yilmaz'},{name:'Javier',lastname:'Monteros'}]
        
        info.forEach(participant =>{

            let sql= `INSERT INTO www.FBW4_Participants(name,lastname) 
                        VALUES ('${participant.name}', '${participant.lastname}')`

            con.query(sql,(err,result) => {
                if(err){
                    console.log(err.sqlMessage)
                }else{
                    console.log(`Participant ${participant.name} was added`)
                }
            })


        })

        con.query(`SELECT * FROM www.FBW4_Participants`,(err,result) => {
            if(err){
                console.log(err.sqlMessage)
            }else{
                console.log(result)
            }
        })
    
    
    }
})