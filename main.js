"use strict";
/*---------------------
      Local Storage
-----------------------*/
const getStorage = () => {
  const categorias = [
    "comida",
    "servicios",
    "salidas",
    "educación",
    "transporte",
    "trabajo",
  ];
  const locStorage = JSON.parse(localStorage.getItem("datos")) || {
    categorias,
    operaciones: [],
  };
  return locStorage;
};
