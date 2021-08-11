
const $ = (selector) => document.querySelector(selector);
const data = getStorage();
const loadCategories = () => {
  const { categories } = getStorage();
  let listCategories = document.getElementById("listCategories");
  listCategories.innerHTML = "";
  for (let category of categories) {
    let boxCategory = document.createElement("div");
    let elementBox = document.createElement("div");
    let element = document.createElement("li");
    let BtnsBox = document.createElement("div");
    let btnEdit = document.createElement("button");
    let btnRemove = document.createElement("button");
    boxCategory.setAttribute("class", "columns");
    elementBox.setAttribute("class", "column list-item");
    element.setAttribute("id", "idTagOptionParent");
    element.setAttribute("class", "tag is-primary is-light m-2 is-medium");
    BtnsBox.setAttribute("class", "column in-line has-text-right");
    btnEdit.setAttribute("class", "button is-warning m-2");
    btnEdit.setAttribute("id", "btnEditCategory");
    btnRemove.setAttribute("class", "button is-danger m-2");
    btnRemove.setAttribute("id", "btnRemoveCategory");
    
    element.innerText = category.name;
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
updateData(data);
/* Create new categories */
const createCategories = () => {
  const newCategoryName = slugify($("#new-categoria-input").value);
  if (data.categories.find((d) => d.name === newCategoryName)) {
    swalDuplicate();
    $("#new-categoria-input").value = "";
  } else if (newCategoryName === "") {
    swalEmpty();
    $("#new-categoria-input").value = "";
  } else {
    data.categories.push(setFormatCat(newCategoryName));
    updateData(data);
    $("#new-categoria-input").value = "";
    swalCreate();
  }
};
$("#new-categoria-btn").addEventListener("click", createCategories);
/*Edit category*/
const editCategory = () => {
  /*Se abre el modal*/
  $("#btnEditCategory").addEventListener("click", () => {
    $("#sectionEditCategory").classList.remove("is-hidden");
    $("#sectionCategorias").classList.add("is-hidden");
  });
  $("#btnCancelEditCat").addEventListener("click", () => {
    $("#sectionEditCategory").classList.add("is-hidden");
    $("#sectionCategorias").classList.remove("is-hidden");
  });
};
editCategory();
/*Remove category*/
// const eliminarCategoria = (id, categories) => {
//   $("#btnRemoveCategory").addEventListener("click", () => {
//     return categories.filter((category) => category.id !== id)
//   })
// };
