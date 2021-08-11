"use strict";
/*BURGER MENU OPTIONS*/
const toggleBurger = () => {
  let burgerIcon = document.getElementById("burger");
  let dropMenu = document.getElementById("teamList");
  burgerIcon.classList.toggle("is-active");
  dropMenu.classList.toggle("is-active");
};
const setFormatCat = (name) => {
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
  ].map((c) => setFormatCat(c));
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
  Swal.fire("Bien hecho!", "transacción ejecutada!", "success");
};  
