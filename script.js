let input = document.getElementById("input");
let btns = document.querySelectorAll(".btn");
let result ="";
btns.forEach( btn =>
  btn.addEventListener("click", (e)=>{
    try {
      if (e.target.innerText == "=" ) {
        result = eval(result);
        input.value = result; 
      } else if(e.target.innerText == "C") {
        result = "";
        input.value = result;
      } else if(e.target.innerText == "Del") {
        result = result.slice(0,-1);
        input.value = result;
      } else {
        result += e.target.innerText;
        input.value = result;
      }
    } catch {
       alert("something wrong ! please try again")
    }
    //  console.log(e.target.innerText);
     input.value =  string; 
  })
)
