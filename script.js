const hamburger = document.querySelector(".menu-burguer");
const bloco2 = document.querySelector("#bloco-2");
const menuitem = document.getElementsByClassName("a-menu");



if (hamburger && menuitem) {

    // hamburger.classList.add("active");
    //     bloco2.classList.add("active");
    // Quando clicado o menu aparece para o usuario
    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        bloco2.classList.toggle("active");
    });

    // Quando clicado ele esconde o nav
    menuitem.addEventListener("click", () => {

        bloco2.classList.toggle("active");
        hamburger.classList.toggle("active");


    });
}

