const $ = (selector) => document.querySelector(selector);

/*BURGER MENU OPTIONS*/
const toggleBurger = () => {
  let burgerIcon = document.getElementById("burger");
  let dropMenu = document.getElementById("teamList");
  burgerIcon.classList.toggle("is-active");
  dropMenu.classList.toggle("is-active");
};

$("#btn-ocultar-filtros").addEventListener("click", () => {
  const filterText = $("#btn-ocultar-filtros").innerText;
  if (filterText === "Ocultar filtros") {
    $("#filtros-opciones").classList.add("is-hidden");
    $("#btn-ocultar-filtros").textContent = "Mostrar filtros";
  } else {
    $("#filtros-opciones").classList.remove("is-hidden");
    $("#btn-ocultar-filtros").textContent = "Ocultar filtros";
  }
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
  const { categories } = getStorage();
  var selectCategories = document.getElementById("selectCategories");
  for (const category of categories) {
    var categoryOption = document.createElement("option");
    categoryOption.innerText = category;
    categoryOption.style.textTransform = "uppercase";
    categoryOption.value = category;
    selectCategories.appendChild(categoryOption);
  }
};
loadSelectOptions();
