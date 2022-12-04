var buttons=  document.querySelectorAll(".btn");
var sub = document.querySelector(".sub")
var outCome= document.querySelector(".outcome")
var submit = document.querySelector(".submit")
var home = document.querySelector(".home")
buttons.forEach((item) =>{
    
    item.addEventListener("click",()=>{
        let output = item.textContent
        outCome.textContent= `you select ${output} out of 5`
    })
    sub.addEventListener("click", ()=>{
        home.style.display = "none";
        submit.style.display= "block";
       
        
    })
})




