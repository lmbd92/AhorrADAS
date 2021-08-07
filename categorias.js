const $ = (selector) => document.querySelector(selector);
const datos = getStorage();

const loadCategories = () => {
  const { categorias } = getStorage();
  let listCategories = document.getElementById("listCategories");
  for (const category of categorias) {
    let boxCategory = document.createElement("div");
    let elementBox = document.createElement("div");
    let element = document.createElement("li");
    let BtnsBox = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnRemove = document.createElement("button");

    boxCategory.setAttribute("class", "columns");
    elementBox.setAttribute("class", "column list-item");
    element.setAttribute("class", "tag is-primary is-light m-2 is-medium");
    BtnsBox.setAttribute("class", "column in-line has-text-right");
    btnEdit.setAttribute("class", "button is-warning m-2");
        btnEdit.setAttribute("id", "btnEditCategory");
    btnRemove.setAttribute("class", "button is-danger m-2");
        btnRemove.setAttribute("id", "btnRemoveCategory");

    element.innerText = category;
    element.style.textTransform = "uppercase";
    btnEdit.innerText = "Editar";
    btnRemove.innerText = "Eliminar";

    listCategories.appendChild(boxCategory);
    boxCategory.appendChild(elementBox);
    boxCategory.appendChild(BtnsBox);
    elementBox.appendChild(element);
    BtnsBox.appendChild(btnEdit);
    BtnsBox.appendChild(btnRemove);
  }
};
loadCategories();

const createCategories = () => {
  const newCategoryName = slugify($("#new-categoria-input").value);
  if (datos.categorias.find((d) => d === newCategoryName)) {
    alert("Categoria ya existe");
    $("#new-categoria-input").value = "";
  } else {
    datos.categorias.push(newCategoryName);
    localStorage.setItem("datos", JSON.stringify(datos));
        $("#new-categoria-input").value = "";
  }
};
$("#new-categoria-btn").addEventListener("click", createCategories);

/*EDITAR CATEGORIAS*/

$("#btnEditCategory").addEventListener("click", () => {
   $("#sectionEditCategory").classList.remove("is-hidden");
  $("#sectionCategorias").classList.add("is-hidden");
});
$("#btnCancelEditCat").addEventListener("click", () => {
   $("#sectionEditCategory").classList.add("is-hidden");
  $("#sectionCategorias").classList.remove("is-hidden");
});

// const editCategory = (categoriaNueva, categorias) => {
//   return categorias.map((categoria) =>
//     categoriaNueva === categoria
//       ? { ...categoria, ...categoriaNueva }
//       : categoria
//   )
// }


