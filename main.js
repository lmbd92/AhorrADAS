"use strict";

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

/* const textspan = document.createElement("span");
textspan.innerHTML = "Categoria ya existe";

const swalCatDuplicate = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Categoria ya existe!'
    //footer: '<a href="">Why do I have this issue?</a>'
  })
}; */
