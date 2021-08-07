const $ = (selector) => document.querySelector(selector);

/*BURGER MENU OPTIONS*/
const toggleBurger = () => {
    let burgerIcon = document.getElementById('burger');
    let dropMenu = document.getElementById('teamList');
    burgerIcon.classList.toggle('is-active');
    dropMenu.classList.toggle('is-active');
  };

$("#btn-ocultar-filtros").addEventListener("click", () => {
  $("#filtros-opciones").classList.add("is-hidden");
});

$("#btn-Nueva-Op").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.remove("is-hidden");
  $("#section_inicio").classList.add("is-hidden");
});
$("#btn-new-op-cancelar").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.add("is-hidden");
  $("#section_inicio").classList.remove("is-hidden");
});

/************************
 * LOADING SELECT OPTIONS
 ************************/
const datos = getStorage();
var loadSelectOptions = function () {
  const { categorias } = getStorage();
    var selectCategories = document.getElementById('selectCategories');
  for (const category of categorias) {
        var categoryOption = document.createElement('option');
        categoryOption.innerText = category;
        categoryOption.style.textTransform = "uppercase";
        categoryOption.value = category;
        selectCategories.appendChild(categoryOption);
    }
};
    loadSelectOptions();



