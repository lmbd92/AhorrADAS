const $ = (selector) => document.querySelector(selector);
const data = getStorage();

/*Edit categories*/
const editCategory = (e) => {
  const id_categoryToEdit = e.target.dataset.id;
  const name_categoryToEdit = data.categories.find(
    (x) => x.id === id_categoryToEdit
  ).name;

  $("#sectionEditCategory").classList.remove("is-hidden");
  $("#sectionCategorias").classList.add("is-hidden");
  $("#editCategoryForm").value = name_categoryToEdit;
  $("#editCategoryForm").setAttribute("value", name_categoryToEdit);
  $("#editCategoryForm").dataset.id = id_categoryToEdit;
};
  
const removeCategory = (e) => {
  const storage = getStorage();
  const id_categoryToRemove = e.target.dataset.id;
  console.log(id_categoryToRemove);
  const remainingCategories = data.categories.filter(category => category.id !== id_categoryToRemove);
  console.log(remainingCategories);
  console.log({ categories: remainingCategories });
  updateData({ categories: remainingCategories, ...storage });
    
}; 

const loadCategories = () => {
  const { categories } = getStorage();
  let listCategories = document.getElementById("listCategories");
  listCategories.innerHTML = "";
  for (const category of categories) {
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
    btnEdit.setAttribute("class", "button is-warning m-2 btnEditCategory");
    btnRemove.setAttribute("class", "button is-danger m-2 btnRemoveCategory");

    element.innerText = category.name;
    element.style.textTransform = "uppercase";
    btnEdit.innerText = "Editar";
    btnEdit.addEventListener("click",(e) => editCategory(e));
    btnRemove.innerText = "Eliminar";
    btnRemove.addEventListener("click",(e) => removeCategory(e));
    btnEdit.dataset.id = category.id;
    btnRemove.dataset.id = category.id;

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
    swalCatDuplicate();
    $("#new-categoria-input").value = "";
  } else if (newCategoryName === "") {
    swalCatNameEmpty();
    $("#new-categoria-input").value = "";
  } else {
    data.categories.push(setFormat(newCategoryName));
    updateData(data);
    $("#new-categoria-input").value = "";
    loadCategories();
    swalCreateCat();
  }
  console.log("afterCreateNewCategory ", data.categories);
};
$("#new-categoria-btn").addEventListener("click", createCategories);

$("#btnSubmitEditCat").addEventListener("click", () => {
  const newNameCategory = $("#editCategoryForm").value;
  console.log({ newNameCategory });
  const index = data.categories.findIndex((x) => x.id === $("#editCategoryForm").dataset.id
  );
  data.categories[index].name = newNameCategory;
  updateData(data);

  console.log({ index });
  loadCategories();
  $("#sectionEditCategory").classList.add("is-hidden");
  $("#sectionCategorias").classList.remove("is-hidden");
  
});

$("#btnCancelEditCat").addEventListener("click", () => {
  $("#sectionEditCategory").classList.add("is-hidden");
  $("#sectionCategorias").classList.remove("is-hidden");
});


