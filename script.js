const hamburger = document.querySelector(".menu-burguer");
const bloco2 = document.querySelector("#bloco-2");




if (hamburger) {

    // hamburger.classList.add("active");
    //     bloco2.classList.add("active");
    // Quando clicado o menu aparece para o usuario
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        bloco2.classList.toggle("active");
    });

}

