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
const categories = [
    "comida",
    "servicios",
    "salidas",
    "educación",
    "transporte",
    "trabajo",
  ].map((c) => setFormat(c));
localStorage.setItem('data', JSON.stringify({
  categories,
  operations: [],
}));

const getStorage = () => {
  const stg = JSON.parse(localStorage.getItem('data'));
  return stg;
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
