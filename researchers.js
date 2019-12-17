function main() {
    showResearchers();
  }

  function showResearchers(){
    let researcherHtml = "<div>";
    console.log(getData().Researchers);
    let researchers = getData().Researchers;
    for(let researcher in researchers){
        console.log(researchers[researcher]);
        
        researcherHtml += "<div>";
        researcherHtml += "<img src='./img/researcherPortraits/Motherland/"+researchers[researcher].Id+".png'/>";
        researcherHtml += researchers[researcher].Name;
        researcherHtml += "</div>";
        

    }
    researcherHtml += "</div>";
    document.getElementById('researchers').innerHTML = researcherHtml;
  }

  main();