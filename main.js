"use strict";

/*BURGER MENU OPTIONS*/
const toggleBurger = () => {
  let burgerIcon = document.getElementById("burger");
  let dropMenu = document.getElementById("teamList");
  burgerIcon.classList.toggle("is-active");
  dropMenu.classList.toggle("is-active");
};
const setFormat = (name) => {
  return { id: uuidv4(), name };
};
/*---------------------
      Local Storage
-----------------------*/

const getStorage = () => {
  const categories = [
    "comida",
    "servicios",
    "salidas",
    "educación",
    "transporte",
    "trabajo",
  ].map((c) => setFormat(c));
  const locStorage = JSON.parse(localStorage.getItem("data")) || {
    categories,
    operations: [],
  };
  return locStorage;
};
const updateData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

/*---------------------
      Alerts
-----------------------*/
const swalDuplicate = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Valor ya existe!",
  });
};
const swalEmpty = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    html: "Por favor ingrese un <strong>Valor</strong>!",
  });
};
const swalCreate = () => {
  Swal.fire("Bien hecho!", "Transacción ejecutada!", "success");
};

/*---------------------
      Filtros
-----------------------*/
const filterByType = (filterType, operations) => {
  const newOperations = operations.filter(
    (operation) => operation.type === filterType
  );
  console.log({newOperations, filterType, operations});
  return newOperations;
};

const filterByCategory = (idCategory, operations) => {
  return operations.filter((operation) => operation.id === idCategory);
};

const filterByDate = (date, operations) => {
  return operations.filter((operation) => {
    const dateOperation = new Date(operation.fecha);
    return dateOperation.getTime() >= date.getTime();
  });
};

const orderByDate = (order, operations) => {
  return [...operations].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === "ASC"
      ? fechaA.getTime() - dateA.getTime()
      : fechaB.getTime() - dateB.getTime();
  });
};

const orderByAmount = (order, operations) => {
  return [...operations].sort((a, b) => {
    return order === "ASC" ? a.amount - b.amount : b.amount - a.amount;
  });
};

const orderByDescription = (order, operations) => {
  return [...operations].sort((a, b) => {
    return order === "ASC" ? a.name < b.name : a.name > b.name;
  });
};
