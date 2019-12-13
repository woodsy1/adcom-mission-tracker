var firstClick = 0;
var currentClicked = 0;
var overallTimer;
var nextDropTimer;

function main(){
    

}

function buildTimer(){
    if(firstClick == 0){
        clearInterval(overallTimer); 
        clearInterval(nextDropTimer); 
        var start = new Date;
        currentClicked++;
        overallTimer = setInterval(function() {
            var wholetime = (new Date - start) / 1000;
            $('.timer').text(wholetime + " Seconds");
            checkTime(wholetime);
        }, 1000);

        nextDropTimer = setInterval(function() {
            var time = (new Date - start) / 1000;
            $('.timer').text(time + " Seconds");
            checkNextDrop(time);
        }, 1000);

        firstClick++;
    }else{
        currentClicked++;
        clearInterval(nextDropTimer); 
        var newstart = new Date;
        nextDropTimer = setInterval(function() {
            var nextDropTime = (new Date - newstart) / 1000;
            checkNextDrop(nextDropTime);
        }, 1000);
        $('.checkDrop').text("");
    }
    
}

function checkTime(time){

    if(time > 60*90){
        firstClick = 0;
    }
    
}

function checkNextDrop(time){
    var timeToCheck = 5 * Math.pow(1.2, currentClicked);
    if(time > timeToCheck)
    {
        $('.checkDrop').text("QUICK COLLECT");
    }
}

main();