module.exports.profile = function(req , res){
    return res.render('users' , {
        title:'profile'
    })
}

module.exports.signIn = function(req , res){
    return res.render('user_sign_in' , {
        title:'Sign In'
    })
}
module.exports.signUp = function(req , res){
    return res.render('user_sign_up' , {
        title:'Sign Up'
    })
}

module.exports.create = function(req , res){
    // to do later
}
module.exports.createSession = function(req , res){
    // to do later
}