module.exports.home = function(req,res){
    return res.render("home");
}

module.exports.map = function(req,res){
    return res.render("map-explorer");
}

module.exports.helpline = function(req,res){
    return res.render("helpline");
}