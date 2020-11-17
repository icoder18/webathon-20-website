const countryName = $("#name span");
const flag = $("#name img");
const totalCasesDisplay = $("#total-number");
const recovered = $("#recovered-number"); 
const deaths = $("#deaths-number");
const worldMap = $("#world-map");
const indiaMap = $("#india-map");

const world = $("#world-toggle");
const india = $("#india-toggle");

world.click(function(){
    worldMap.toggleClass("no-display");
    indiaMap.toggleClass("no-display");
    flag.toggleClass("no-display");
    world.toggleClass("selected");
    india.toggleClass("selected");

    countryName.text("");
    totalCasesDisplay.text("");
    recovered.text("");
    deaths.text("");
    flag.attr("src","");


    let countries = $("path");
    $.ajax({
        url: "https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=false",
        method: "GET",
        success: function(data){
            countries.each(function(){
                $(this).hover(
                    function(){
                        let name = $(this).attr("title");
                        let id = $(this).attr("id");
                        let totalCasesNo = "NA";
                        let recoveredCasesNo = "NA";
                        let deathNo = "NA";
                        for(let i=0;i< data.length;i++){
                            if( data[i].countryInfo.iso2 == id){
                                console.log(data[i].country);
                                totalCasesNo = data[i].cases;
                                recoveredCasesNo = data[i].recovered;
                                deathNo = data[i].deaths;
                                flag.attr("src",data[i].countryInfo.flag);
    
                            }
                        }
                        //display the values of the object on screen
                        countryName.text(name);
                        totalCasesDisplay.text(totalCasesNo);
                        recovered.text(recoveredCasesNo);
                        deaths.text(deathNo);
    
                    },function(){
                        //function to do nothing when mouse leaves
                    }
                )
            });
    
        }
    });
})

india.click(function(){
    indiaMap.toggleClass("no-display");
    worldMap.toggleClass("no-display");
    flag.toggleClass("no-display");
    world.toggleClass("selected");
    india.toggleClass("selected");


    countryName.text("");
    totalCasesDisplay.text("");
    recovered.text("");
    deaths.text("");



    let states = $("path");
    $.ajax({
        url: "https://api.covidindiatracker.com/state_data.json ",
        method: "GET",
        success: function(data){
            states.each(function(){
                $(this).hover(
                    function(){
                        let name = $(this).attr("title");
                        let id = $(this).attr("id");
                        let totalCasesNo = "NA";
                        let recoveredCasesNo = "NA";
                        let deathNo = "NA";
                        for(let i=0;i< data.length;i++){
                            if( data[i].id == id){
                                console.log(data[i].state);
                                totalCasesNo = data[i].confirmed;
                                recoveredCasesNo = data[i].recovered;
                                deathNo = data[i].deaths;
                                // flag.attr("src",data[i].countryInfo.flag);
    
                            }
                        }
                        //display the values of the object on screen
                        countryName.text(name);
                        totalCasesDisplay.text(totalCasesNo);
                        recovered.text(recoveredCasesNo);
                        deaths.text(deathNo);
    
                    },function(){
                        //function to do nothing when mouse leaves
                    }
                )
            });
    
        }
    });
})

    let countries = $("path");
    $.ajax({
        url: "https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=false",
        method: "GET",
        success: function(data){
            countries.each(function(){
                $(this).hover(
                    function(){
                        let name = $(this).attr("title");
                        let id = $(this).attr("id");
                        let totalCasesNo = "NA";
                        let recoveredCasesNo = "NA";
                        let deathNo = "NA";
                        for(let i=0;i< data.length;i++){
                            if( data[i].countryInfo.iso2 == id){
                                console.log(data[i].country);
                                totalCasesNo = data[i].cases;
                                recoveredCasesNo = data[i].recovered;
                                deathNo = data[i].deaths;
                                flag.attr("src",data[i].countryInfo.flag);
    
                            }
                        }
                        //display the values of the object on screen
                        countryName.text(name);
                        totalCasesDisplay.text(totalCasesNo);
                        recovered.text(recoveredCasesNo);
                        deaths.text(deathNo);
    
                    },function(){
                        //function to do nothing when mouse leaves
                    }
                )
            });
    
        }
    });





