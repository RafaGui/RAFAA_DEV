
const openMenu = document.querySelector('.openBtn');
const closeMenu = document.querySelector('.closeBtn');
const modalMenu = document.querySelector('.linksNavigator');

function openMenuFunction() {
    modalMenu.style.left = "0";
}
function closeMenuFunction() {
    modalMenu.style.left = "-180%";
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