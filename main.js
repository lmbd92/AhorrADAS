const $ = (selector) => document.querySelector(selector);
$("#btn-ocultar-filtros").addEventListener("click", () => {
  $("#filtros-opciones").classList.add("is-hidden");
})

$("#btn-Nueva-Op").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.remove("is-hidden");
  $("#section_inicio").classList.add("is-hidden");
});
$("#btn-new-op-cancelar").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.add("is-hidden");
  $("#section_inicio").classList.remove("is-hidden");
});
/*---------------------
INICIALIZACON DE DATOS
-----------------------*/
const categorias = [
      'Comida',
      'Servicios',
      'Salidas',
      'Educación',
      'Transporte',
      'Trabajo',
].map((categoria) => crearCat(categoria));
/*---------------------
      Categorias
-----------------------*/
const agregarCat = (categoria, categorias) => {
  return [...categorias, categoria];
}

const editarCat = (idCat, newCat, categorias) => {
  return categorias.map((categoria) => categoria.id === idCat ?
    { ...categoria, ...newCat } : categoria);
}

const eliminarCat = (idCat, categorias) => {
  return categorias.filter((categoria) => categoria.id !== idCat)
}

const obtenerCat = (idCat, categorias) => {
  return categorias.find((categoria) => categoria.id === idCat)
}