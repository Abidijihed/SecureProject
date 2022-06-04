const { connection } = require('../../database-mysql/index.js');
module.exports={
    Get:(session)=>{
        return new Promise((resolve,reject)=>{
      connection.query('SELECT * FROM sessions WHERE session=?',[session],
      (err,results)=>{
          err ? reject(err):resolve(results)
      } )
     
        })
    },
    post:(register_id,session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('INSERT INTO sessions (register_id,session,date)Values (?,?,?)',
            [register_id,session,Date.now()+1000*3600*24*7],
            (err,results)=>{
                console.log("see",results)
                return err?reject(err):resolve(results)
            }
            )
        })
    },
    delete:(session)=>{
        return new Promise((resolve,reject)=>{
            connection.query('DELETE FROM sessions WHERE session=?',[session],
            (err,results)=>{
                err ?reject(err):resolve(results)
            })
        })
    }
}