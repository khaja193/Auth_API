const {User} = require('../models/user');


let auth = (req,res,next) =>{

    let token = req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.send(401).send('no access');

        //res.status(200).send("you have access");
        req.token = token;
        next();
    })
}

module.exports = {auth};