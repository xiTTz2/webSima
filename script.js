const hamburger = document.querySelector(".menu-burguer");
const bloco2 = document.querySelector("#bloco-2");
const menu = document.querySelector("#bloco a");



if (hamburger) {

    
    // hamburger.classList.add("active");
    //     bloco2.classList.add("active");
    // Quando clicado o menu aparece para o usuario
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        bloco2.classList.toggle("active");
    });

    

}

if(menu){
    menu.addEventListener("click", () =>{
        // hamburger.classList.toggle("activate");
        bloco2.classList.toggle("active");
    });

}

