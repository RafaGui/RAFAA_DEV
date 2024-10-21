
const openMenu = document.querySelector('.openBtn');
const closeMenu = document.querySelector('.closeBtn');
const modalMenu = document.querySelector('.linksNavigator');

function openMenuFunction() {
    modalMenu.style.top = "0";
}
function closeMenuFunction() {
    modalMenu.style.top = "-290%";
}

// ADICIONAR OPEN E CLOSE FUNCTIONS
openMenu.addEventListener("click", openMenuFunction);
closeMenu.addEventListener("click", closeMenuFunction);


// ADICIONAR FUNCAO CLOSEMENU EM ITENS INDIVIDUAIS DO MENU
let itemSelectedSett = document.querySelectorAll('.itemSelectedSett');

itemSelectedSett.forEach((item) => {
    item.addEventListener('click', () => {
        closeMenuFunction();
    });
});