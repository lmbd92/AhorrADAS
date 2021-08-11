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
 * LOADING SELECT OPTIONS
 ************************/
const loadSelectOptions =  () => {
  const { categories } = getStorage();
 // let selectCategories = document.getElementById("selectCategories");
  let selectOperationCategories = document.getElementById("new-op-category");
  for (let category of categories) {
    let categoryOption = document.createElement("option");
    categoryOption.value = category.name;
    categoryOption.innerText = category.name;
    categoryOption.style.textTransform = "uppercase";
    //selectCategories.appendChild(categoryOption);
    selectOperationCategories.appendChild(categoryOption);
  }
};
loadSelectOptions()
/*New Operation*/
const addNewOperation = () => {
  /*Postear al LocalStorage*/
  const nameOperation = slugify($("#new-op-description").value);
  const amountOperation = slugify($("#new-op-amount").value);
  const typeOperation = slugify($("#new-op-type").value);
  const categoryOperation = slugify($("#new-op-category").value);
  console.log({ categoryOperation });
  const dateOperation = slugify($("#new-op-date").value);
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
  loadOperations();
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
    
    rowOperation.appendChild(dataRowOpDescription);
    rowOperation.appendChild(dataRowOpCategory);
    rowOperation.appendChild(dataRowOpDate);
    rowOperation.appendChild(dataRowOpAmount);
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