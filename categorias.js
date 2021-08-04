const $ = (selector) => document.querySelector(selector);
const datos = getStorage();

const loadCategories = () => {
  const { categorias } = getStorage();
  let listCategories = document.getElementById("listCategories");
  for (const category of categorias) {
    let element = document.createElement("li");
    element.innerText = category;
    element.style.textTransform = "uppercase";
    element.setAttribute("class", "tag is-primary is-light");
    listCategories.appendChild(element);
  }

  console.log(categorias);
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
  }
};

$("#new-categoria-btn").addEventListener("click", createCategories);
