let td = document.querySelectorAll("td");
let candidateSwitch = document.querySelector("#candidate-switch");
let numberControl = document.querySelectorAll(".number-control");
let submitGameBtn = document.querySelector(".submit-game");
//KNOW WHICH MODE IS ON (Candidate or Normal Mode)
let IsCandidateMode = false;
candidateSwitch.addEventListener("click",function(){
    if (!IsCandidateMode)
        IsCandidateMode = true;
    else{
        IsCandidateMode = false;   
        let allCandidates = document.querySelectorAll(".candidates");
        allCandidates.forEach(element => {
            if (element.parentElement.style.backgroundColor=="rgb(255, 218, 0)" && element.nextElementSibling.innerText=="") {
                element.parentElement.style.backgroundColor="#fff";
            }
        }); 
    }
});



td.forEach(element => element.addEventListener("click",function(e){

    if (e.target.getAttribute("data-status")==null) {
        e.target.style.backgroundColor  = "#FFDA00"; 
    }
    

    if (IsCandidateMode) {
        if (e.target.className!="given-number") {
            let allCandidates = document.querySelectorAll(".candidates");
            allCandidates.forEach(element => {
                if (element.getAttribute("data-status")) {
                    element.removeAttribute("data-status");
                    element.parentElement.style.backgroundColor = "#fff";
                }
                if (element.innerText!="" && element.parentElement.style.backgroundColor=="#fff") {
                    element.parentElement.style.backgroundColor  = "#FFDA00"; 
                }
            }); 

            e.target.querySelector('.candidates').setAttribute("data-status", "waits");

            e.target.style.backgroundColor  = "#FFDA00"; 
        }
      
    }
    else{
        if(e.target.className!="given-number"){
            let allValues = document.querySelectorAll(".value");
            allValues.forEach(element => {
                if (element.innerText=="" && element.getAttribute("data-status")) {
                    element.removeAttribute("data-status");
                    check = true;
                    element.parentElement.style.backgroundColor = "#fff";
                }
            });

                if (e.target.children.length>1) {
                    let normalData = e.target.querySelector('.value');
                    normalData.setAttribute("data-status", "waits");
                }
                else{
                    e.target.setAttribute("data-status", "waits");
                }
        }      
    }
},false));

function GetNumber() {
    numberControl.forEach(number => number.addEventListener("click",function(e){
        if (IsCandidateMode) {
            document.querySelectorAll('.candidates').forEach(element => {
                if (element.getAttribute('data-status')) {
                    if (element.innerText.includes(e.target.innerText)) {

                        element.innerText = element.innerText.replace(e.target.innerText,'');
                    }
                    else{
                        element.innerText += e.target.innerText; 
                    }
                }
            });;
        }
        else{
            document.querySelectorAll('.value').forEach(element => {
                if (element.getAttribute('data-status')) {
                    element.removeAttribute('data-status');
                    element.innerText = e.target.innerText; 
                }
            });;
        }
        return e.target.innerText;
    }));
}

submitGameBtn.addEventListener("click",function(){
    console.log("salam");
});


GetNumber();
 