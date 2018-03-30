
module.exports= function(req, res, next){
    if(!req.session.user){
        req.session.user ={
            user_id: "",
        }
    }
    console.log('db hit')
    next();
}