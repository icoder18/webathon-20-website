module.exports.home = function(req,res){
    return res.render("home",{
        active: "home"
    });
}

module.exports.map = function(req,res){
    return res.render("map-explorer",{
        active: "map-explorer"
    });
}

module.exports.helpline = function(req,res){
    return res.render("helpline",{
        active: "helpline"
    });
}
module.exports.assess = function(req,res){
    return res.render("assess",{
        active: "assess"
    });
}

module.exports.results = function(req,res){
    console.log(req.body);
    const sqlite3 = require('sqlite3').verbose();

    let db = new sqlite3.Database('testDB.db', (err) => {
        if (err) {
        return console.error(err.message);
        }
        console.log('Connected to the Test SQlite database.');
    });

    let data=[req.body.name,req.body.age,req.body.sex];
    console.log(data);
    //db.run(`INSERT INTO results(name,age,sex) VALUES(?,?,?)',data ${data}`);
    
    db.run('INSERT INTO results(name,age,sex) VALUES(?,?,?)',data,function(err){
        if(err){
            return console.log(err.message);
        }
        console.log(`Results added! with rowid ${this.lastID}`);
    });

    db.close((err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Close the database connection.');
    });



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
        assesment: assesment,
        active: "assess"
    });

}