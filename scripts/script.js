const hamburger = document.querySelector(".menu-burguer");
const bloco2 = document.querySelector("#bloco-2");
const menu = document.querySelector("#navmenu");
const menu2 = document.querySelector("#navmenu2");
const menu3 = document.querySelector("#navmenu3");


if (menu, menu2, menu3, hamburger) {

    // Quando clicado o menu aparece para o usuario
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        bloco2.classList.toggle("active");
    });
    //Assim que clicar nos botões ele fecha automaticamente.
    menu.addEventListener("click", e => {


        if (menu.contains(e.target)) {
            hamburger.classList.toggle("active");
            bloco2.classList.toggle("active");

        }
    });

    menu2.addEventListener("click", e => {

        if (menu2.contains(e.target)) {

            hamburger.classList.toggle("active");
            bloco2.classList.toggle("active");
        }
    });

    menu3.addEventListener("click", e => {

        if (menu3.contains(e.target)) {

            hamburger.classList.toggle("active");
            bloco2.classList.toggle("active");
        }
    });
}

