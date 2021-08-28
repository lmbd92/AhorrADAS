const $ = (selector) => document.querySelector(selector)
/*---------------------
      Filtros
-----------------------*/
const filterByType = () => {
  const data = getStorage()
  let operationsGeneral = data.operations
  const filterType = $('#filtro_tipo').value

  if (filterType === 'gasto') {
    operationsGeneral = operationsGeneral.filter(
      (operationsGeneral) => operationsGeneral.type === filterType,
    )
  } else if (filterType === 'ganancia') {
    operationsGeneral = operationsGeneral.filter(
      (operationsGeneral) => operationsGeneral.type === filterType,
    )
  } else if (filterType === 'todos') {
    operationsGeneral = operationsGeneral
  } else {
    operationsGeneral = operationsGeneral
  }
  loadOperations(operationsGeneral)
}

const filterByCategory = ()=>{
  const data = getStorage()
  let operationsGeneral = data.operations
  const filterCategory = $('#selectCategories').value

  operationsGeneral = operationsGeneral.filter(
    (operationsGeneral) => operationsGeneral.category === filterCategory,
  )

  loadOperations(operationsGeneral)

}

/*---------------------
      inicializar
-----------------------*/

const start = () => {
  $('#filtro_tipo').addEventListener('change', filterByType)

  $("#selectCategories").addEventListener("change", filterByCategory);
  // $("#filtro_fecha").addEventListener("change", filterOperations);
  // $("#filtro_ordenar").addEventListener("change", filterOperations);
}
start()
