const hamburger = document.querySelector(".menu-burguer");
const bloco2 = document.querySelector("#bloco-2");

if(hamburger){

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active");
        bloco2.classList.toggle("active");
    });
}