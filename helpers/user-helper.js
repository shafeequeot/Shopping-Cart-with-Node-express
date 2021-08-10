const db = require('../config/connection')
const bCrypt = require('bcrypt')


module.exports={
    doSignup: (userData)=>{
        return new Promise(async (resolve,rejct)=>{
            userData.Password = await bCrypt.hash(userData.Password,10)
            db.get().collection('users').insertOne(userData).then((data)=>{
                resolve(data)
            })
        })

    },
    doLogin: (LoguserData)=>{
        user = {email:false,
        Password:false}
       
        return new Promise(async(res,rej)=>{
            
             db.get().collection('user').findOne({Email:LoguserData.email}).then((dddd)=>{
                 console.log(dddd)


                //  if (logUser){
                //     user.email=true
                //                     bCrypt.compare(LoguserData.password,logUser.Password).then((result)=>{
                //                         user.Password = true
                //                         res(user)
                //                     })
                //                 }else{
                                   
                //                     res("no user")
                //                 }
             })
            
            
        })
    }
}