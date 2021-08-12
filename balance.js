const $ = (selector) => document.querySelector(selector);
const data = getStorage();
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
$("#btn-new-op-agregar").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.add("is-hidden");
  $("#section_inicio").classList.remove("is-hidden");
  $("#img-new-op-blankbox").classList.add("is-hidden");
  $("#operations-table").classList.remove("is-hidden");
  addNewOperation();
});
/************************
 * Get Date
 ************************/
$("#filtro_fecha").valueAsDate =new Date();
$("#new-op-date").valueAsDate =new Date();
/************************
 * LOADING SELECT OPTIONS
 ************************/
const loadSelectOptions =  () => {
  const { categories } = getStorage();
  let selectCategoriesFilter = document.getElementById("selectCategories");
  let selectCategoriesOperation = document.getElementById("new-op-category");
  for (let category of categories) {
    let categoryOptionsFilter = document.createElement("option");
    let categoryOptionsOperation = document.createElement("option");

    categoryOptionsFilter.value = category.name;
    categoryOptionsFilter.innerText = category.name;
    categoryOptionsFilter.style.textTransform = "uppercase";

    categoryOptionsOperation.value = category.name;
    categoryOptionsOperation.innerText = category.name;
    categoryOptionsOperation.style.textTransform = "uppercase";

    selectCategoriesFilter.appendChild(categoryOptionsFilter);
    selectCategoriesOperation.appendChild(categoryOptionsOperation);
  }
};
loadSelectOptions()
/*New Operation*/
const addNewOperation = () => {
  /*Postear al LocalStorage*/
  let nameOperation = $("#new-op-description").value;
  let amountOperation = $("#new-op-amount").value;
  let typeOperation = $("#new-op-type").value;
  let categoryOperation = $("#new-op-category").value;
  let dateOperation = $("#new-op-date").value;

  if ((nameOperation === "") || (dateOperation === "") || (amountOperation === "")) {
    swalEmpty();

  } else {
    const newOperation = {
      id: uuidv4(),
      name: nameOperation,
      amount: amountOperation,
      type: typeOperation,
      category: categoryOperation,
      date: dateOperation,
    };
    data.operations.push(newOperation);
    updateData(data);
    swalCreate();
    loadOperations();
  }
};

const loadOperations = () => {
  const { operations } = getStorage();
  let operationsTableBody = document.getElementById("operations-table-body");
  operationsTableBody.innerHTML = "";
  for (let operation of operations) {
    rowOperation = document.createElement("tr");
    dataRowOpDescription = document.createElement("td");
    dataRowOpCategory = document.createElement("td"); 
    dataRowOpDate = document.createElement("td");
    dataRowOpAmount = document.createElement("td");
    dataRowOpActions = document.createElement("td");
    dataRowOpDescription.innerText = operation.name;
    dataRowOpCategory.innerText = operation.category;
    dataRowOpDate.innerText = operation.date;
    dataRowOpAmount.innerText = operation.amount;
    let BtnsBoxTable = document.createElement("div");
    let btnEditTable = document.createElement("button");
    let btnRemoveTable = document.createElement("button");
    rowOperation.setAttribute("class", "has-text-centered")
    BtnsBoxTable.setAttribute("class", "column in-line has-text-centered is-centered");
    btnEditTable.setAttribute("class", "button is-warning m-1");
    btnEditTable.setAttribute("id", "btnEditOperation");
    btnRemoveTable.setAttribute("class", "button is-danger m-1");
    btnRemoveTable.setAttribute("id", "btnRemoveOperation");
    btnEditTable.innerText = "Editar";
    btnRemoveTable.innerText = "Eliminar";
    BtnsBoxTable.appendChild(btnEditTable);
    BtnsBoxTable.appendChild(btnRemoveTable);
    
    rowOperation.appendChild(dataRowOpDescription);
    rowOperation.appendChild(dataRowOpCategory);
    rowOperation.appendChild(dataRowOpDate);
    rowOperation.appendChild(dataRowOpAmount);
    rowOperation.appendChild(BtnsBoxTable);

    operationsTableBody.appendChild(rowOperation);
  }
}
loadOperations();

const viewOperations = () => {
  if (data.operations.length > 0) {
    $("#img-new-op-blankbox").classList.add("is-hidden");
    $("#operations-table").classList.remove("is-hidden");
  } else {
    $("#img-new-op-blankbox").classList.remove("is-hidden");
    $("#operations-table").classList.add("is-hidden");
  }
}
viewOperations();