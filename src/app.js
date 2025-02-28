import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainGen(){
  let subDomain = ["www", "sat","code","dev","development"];
  let domainMainName = ["freak","best","recall","total"];
  let domainSecondName = ["gansta","happy","techno","loop"];
  let domainExtension = ["net","com","io", "es","code"];
  let generatedDomains = "";

  for(let i=0; i<subDomain.length;i++){

    for(let j=0; j<domainMainName.length; j++){


      for(let k=0; k<domainSecondName.length; k++){


        for(let l=0; l<domainExtension.length; l++){
          generatedDomains += "<li class='list-group-item'>"+subDomain[i]+"."+domainMainName[j]+domainSecondName[k]+"."+domainExtension[l]+"</li>";
          
        }

      }

    }
    return generatedDomains;


  }

}

window.onload = function() {
  //write your code here
  document.getElementById("domainList").innerHTML=domainGen();

  console.log("Hello Rigo from the console!");

};