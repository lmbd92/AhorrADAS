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

const swalCatDuplicate = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Categoria ya existe!",
  });
};

const swalCatNameEmpty = () => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    html: "Por favor ingrese un <strong>Nombre</strong> de categoria!",
  });
};

const swalCreateCat = () => {
  Swal.fire("Bien hecho!", "Categoria creada!", "success");
};
