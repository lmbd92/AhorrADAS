const $ = (selector) => document.querySelector(selector);
/*---------------------
      Filtros
-----------------------*/
const filterByType = () => {
  const data = getStorage();
  let operationsGeneral = data.operations;
  const filterType = $("#filtro_tipo").value;

  if (filterType === "gasto") {
    operationsGeneral = operationsGeneral.filter(
      (operationsGeneral) => operationsGeneral.type === filterType
    );
  } else if (filterType === "ganancia") {
    operationsGeneral = operationsGeneral.filter(
      (operationsGeneral) => operationsGeneral.type === filterType
    );
  } else if (filterType === "todos") {
    operationsGeneral = operationsGeneral;
  } else {
    operationsGeneral = operationsGeneral;
  }
  loadOperations(operationsGeneral);
};

const filterByCategory = () => {
  const data = getStorage();
  let operationsGeneral = data.operations;
  const filterCategory = $("#selectCategories").value;

  if (filterCategory === "default" || filterCategory === "todas") {
    operationsGeneral = operationsGeneral;
  } else {
    operationsGeneral = operationsGeneral.filter(
      (operationsGeneral) => operationsGeneral.category === filterCategory
    );
  }

  loadOperations(operationsGeneral);
};

const filterByDate = () => {
  const data = getStorage();
  let operationsGeneral = data.operations;
  const filterDate = $("#filtro_fecha").value;

  operationsGeneral = operationsGeneral.filter(
    (operationsGeneral) => operationsGeneral.date === filterDate
  );

  loadOperations(operationsGeneral);
};

const orderBy = () => {
  const data = getStorage();
  let operationsGeneral = data.operations;
  const filterOrderBy = $("#filtro_ordenar").value;

  switch (filterOrderBy) {
    case "mas_reciente":
      operationsGeneral.sort((a, b) => {
        let x = b.date,
          y = a.date;
        return x == y ? 0 : x > y ? 1 : -1;
      });
      loadOperations(operationsGeneral);
      break;
    case "menos_reciente":
      operationsGeneral.sort((a, b) => {
        let x = a.date,
          y = b.date;
        return x == y ? 0 : x > y ? 1 : -1;
      });
      loadOperations(operationsGeneral);
      break;
    case "mayor_monto":
      operationsGeneral.sort((a, b) => b.amount - a.amount);
      loadOperations(operationsGeneral);
      break;
    case "menor_monto":
      operationsGeneral.sort((a, b) => a.amount - b.amount);
      loadOperations(operationsGeneral);
      break;
    case "a_z":
      operationsGeneral.sort((a, b) => {
        let x = a.name.toUpperCase(),
          y = b.name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      });
      loadOperations(operationsGeneral);
      break;
    case "z_a":
      operationsGeneral.sort((a, b) => {
        let x = b.name.toUpperCase(),
          y = a.name.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1;
      });
      loadOperations(operationsGeneral);
      break;
    default:
      loadOperations(operationsGeneral);
      break;
  }
};

/*---------------------
      inicializar
-----------------------*/

const start = () => {
  $("#filtro_tipo").addEventListener("change", filterByType);
  $("#selectCategories").addEventListener("change", filterByCategory);
  $("#filtro_fecha").addEventListener("change", filterByDate);
  $("#filtro_ordenar").addEventListener("change", orderBy);
};
start();
