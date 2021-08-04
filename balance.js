const $ = (selector) => document.querySelector(selector);
$("#btn-ocultar-filtros").addEventListener("click", () => {
  $("#filtros-opciones").classList.add("is-hidden");
});

$("#btn-Nueva-Op").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.remove("is-hidden");
  $("#section_inicio").classList.add("is-hidden");
});
$("#btn-new-op-cancelar").addEventListener("click", () => {
  $("#section_nueva_operacion").classList.add("is-hidden");
  $("#section_inicio").classList.remove("is-hidden");
});
