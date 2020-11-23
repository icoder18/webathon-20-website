module.exports.home = function(req,res){
    return res.render("home");
}

module.exports.map = function(req,res){
    return res.render("map-explorer");
}

module.exports.helpline = function(req,res){
    return res.render("helpline");
}
module.exports.assess = function(req,res){
    return res.render("assess");
}

module.exports.results = function(req,res){
    console.log(req.body);
    let assesment = "";



    if( parseInt(req.body.age)> 60 && req.body.symptoms.length>1){ 
        assesment = "serious";
    }
    else if(req.body.chronicIllness.length >1 && req.body.symptoms.length>1){
        assesment = "serious";
    }
    else if(req.body.seriousSymptoms.length>1){
        assesment = "serious";
    }
    else if(req.body.symptoms.length>3){
        assesment = "mild";
    }
    else if(req.body.contactHistory == "yes" && req.body.symptoms.length>3){
        assesment = "mild";
    }
    else{
        assesment = "none";
    }

    return res.render("assess-result",{
        assesment: assesment 
    });

}