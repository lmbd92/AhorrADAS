/*---------------------
      Local Storage
-----------------------*/
const obtenerDatos = () => {
  return JSON.parse(localStorage.getItem('datos'))
}
const actualizarDatos = (datos) => {
  localStorage.setItem('datos', JSON.stringify({ ...obtenerDatos(), ...datos }))
  mostrarDatos()
}
const mostrarDatos = () => {
  actualizarCategorias()
  actualizarOperaciones()
  actualizarBalance()
  filtrarOperaciones()
  actualizarReportes()
}

/*---------------------
      Categorias
-----------------------*/
const crearCat = (nombre) => {
  return { id: uuidv4(), nombre };
}
const obtenerCat = () => {
  return obtenerDatos().categorias
}
const agregarCatHandler = () => {
  const nombre = $('#new-categoria-input').value
  const categoria = crearCat(nombre)
  const categorias = agregarCat(categoria, obtenerCat())
  actualizarDatos({ categorias })
}
const eliminarCatHandler = (categoriaId) => {
  const categorias = eliminarCat(categoriaId, obtenerCat())
  actualizarDatos({ categorias })
}
