const $ = (selector) => document.querySelector(selector)
/*Reporte Totales por Categoria*/
const createCategoryReport = () => {
  const data = getStorage()
  var reportPerCat = []
  data.operations.forEach((operation) => {
    if (!reportPerCat[operation.category]) {
      reportPerCat[operation.category] = {}
    }
    if (!reportPerCat[operation.category][operation.type]) {
      reportPerCat[operation.category][operation.type] = 0
    }
    reportPerCat[operation.category][operation.type] += Number(operation.amount)
    return reportPerCat
  })
  return reportPerCat
}
const loadCategoryReport = () => {
  let categoryTableReport = $('#totalXCategTable')
  const catReportObj = createCategoryReport()
  for (let element in catReportObj) {
    var catGanancia = 0
    var catGasto = 0
    var catBalance = 0

    catGananciaTR = document.createElement('tr')
    categoryTag = document.createElement('td')
    categoryTag.innerText = element

    if (catReportObj[element].ganancia) {
      var catGanancia = catReportObj[element].ganancia
      catGananciaTD = document.createElement('td')
      catGananciaTD.setAttribute('class', 'is-success')
      catGananciaTD.innerText = Number(catGanancia)
    } else {
      catGananciaTD = document.createElement('td')
      catGananciaTD.setAttribute('class', 'is-success')
      catGananciaTD.innerText = Number(catGanancia)
    }
    if (catReportObj[element].gasto) {
      var catGasto = Number(catReportObj[element].gasto)
      catGastoTD = document.createElement('td')
      catGastoTD.setAttribute('class', 'is-danger')
      catGastoTD.innerText = Number(catGasto)
    } else {
      catGastoTD = document.createElement('td')
      catGastoTD.setAttribute('class', 'is-danger')
      catGastoTD.innerText = Number(catGasto)
    }
    if (catReportObj) {
      var catBalance = catGanancia - catGasto
      catBalanceTD = document.createElement('td')
      catBalanceTD.setAttribute('class', 'is-warning')
      catBalanceTD.innerText = catBalance
    } else {
      catBalanceTD = document.createElement('td')
      catBalanceTD.setAttribute('class', 'is-warning')
      catBalanceTD.innerText = catBalance
    }
    catGananciaTR.appendChild(categoryTag)
    catGananciaTR.appendChild(catGananciaTD)
    catGananciaTR.appendChild(catGastoTD)
    catGananciaTR.appendChild(catBalanceTD)

    categoryTableReport.appendChild(catGananciaTR)
  }
}

/*Reporte Totales por Mes*/
const createPerMonthReport = () => {
  const data = getStorage()
  var reportPerMonth = []
  data.operations.forEach((operation) => {
    //Get the month from the date
    let opDate = new Date(operation.date)
    let opMonth = new Array()
    opMonth[0] = 'January'
    opMonth[1] = 'February'
    opMonth[2] = 'March'
    opMonth[3] = 'April'
    opMonth[4] = 'May'
    opMonth[5] = 'June'
    opMonth[6] = 'July'
    opMonth[7] = 'August'
    opMonth[8] = 'September'
    opMonth[9] = 'October'
    opMonth[10] = 'November'
    opMonth[11] = 'December'
    let monthName = opMonth[opDate.getMonth()]
    let opYear = opDate.getFullYear()

    if (!reportPerMonth[opYear]) {
      reportPerMonth[opYear] = []
    }
    if (!reportPerMonth[opYear][monthName]) {
      reportPerMonth[opYear][monthName] = []
    }
    if (!reportPerMonth[opYear][monthName][operation.type]) {
      reportPerMonth[opYear][monthName][operation.type] = 0
    }
    reportPerMonth[opYear][monthName][operation.type] += Number(
      operation.amount,
    )
    return reportPerMonth
  })
  return reportPerMonth
}

const loadMonthlyReport = () => {
  let monthlyTableReport = $('#totalXMesTable')
  const monthlyTableObj = createPerMonthReport()

  for (let Yearelement in monthlyTableObj) {
    for (let monthElement in monthlyTableObj[Yearelement]) {
      var monthGanancia = Number(0)
      var monthGasto = Number(0)
      var monthBalance = Number(0)

      monthGananciaTR = document.createElement('tr')
      monthTag = document.createElement('td')
      monthTag.innerText = monthElement

      if (monthlyTableObj[Yearelement][monthElement].ganancia) {
        var monthGanancia = Number(
          monthlyTableObj[Yearelement][monthElement].ganancia,
        )
        monthGananciaTD = document.createElement('td')
        monthGananciaTD.setAttribute('class', 'is-success')
        monthGananciaTD.innerText = Number(monthGanancia)
      } else {
        monthGananciaTD = document.createElement('td')
        monthGananciaTD.setAttribute('class', 'is-success')
        monthGananciaTD.innerText = Number(monthGanancia)
      }
      if (monthlyTableObj[Yearelement][monthElement].gasto) {
        var monthGasto = Number(
          monthlyTableObj[Yearelement][monthElement].gasto,
        )
        monthGastoTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-danger')
        monthGastoTD.innerText = Number(monthGasto)
      } else {
        monthGastoTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-danger')
        monthGastoTD.innerText = Number(monthGasto)
      }
      if (
        monthlyTableObj[Yearelement][monthElement].ganancia ||
        monthlyTableObj[Yearelement][monthElement].gasto
      ) {
        var monthBalance = monthGanancia - monthGasto

        monthBalanceTD = document.createElement('td')
        monthBalanceTD.setAttribute('class', 'is-warning')
        monthBalanceTD.innerText = monthBalance
      } else {
        monthBalanceTD = document.createElement('td')
        monthBalanceTD.setAttribute('class', 'is-warning')
        monthBalanceTD.innerText = monthBalance
      }
      monthGananciaTR.appendChild(monthTag)
      monthGananciaTR.appendChild(monthGananciaTD)
      monthGananciaTR.appendChild(monthGastoTD)
      monthGananciaTR.appendChild(monthBalanceTD)

      monthlyTableReport.appendChild(monthGananciaTR)
    }
  }
}

/*Tabla Resumen*/
const getCatMayorGanancia = () => {
  const reportPerCatObj = createCategoryReport()
  var gananciaMayor = 0
  var catGananciaMayor = ''
  for (let category in reportPerCatObj) {
    if (reportPerCatObj[category].ganancia > gananciaMayor) {
      gananciaMayor = reportPerCatObj[category].ganancia
      catGananciaMayor = category
    }
  }
  var catGananciaMayorTAG = $('#catMayorGananciaTag')
  catGananciaMayorTAG.innerText = catGananciaMayor.toUpperCase()

  var valorGananciaMayor = $('#catMayorGananciaValor')
  valorGananciaMayor.innerText = gananciaMayor
}

const getCatMayorGasto = () => {
  const reportPerCatObj = createCategoryReport()
  var gastoMayor = 0
  var catGastoMayor = ''
  for (let category in reportPerCatObj) {
    if (reportPerCatObj[category].gasto > gastoMayor) {
      gastoMayor = reportPerCatObj[category].gasto
      catGastoMayor = category
    }
  }
  var catGastoMayorTAG = $('#catMayorGastoTag')
  catGastoMayorTAG.innerText = catGastoMayor.toUpperCase()

  var valorGastoMayor = $('#catMayorGastoValor')
  valorGastoMayor.innerText = gastoMayor
}

const getCatMayorBalance = () => {
  const reportPerCatObj = createCategoryReport()
  var balanceMayor = 0
  var balanceNuevo = 0
  var catBalanceMayor = ''
  for (let category in reportPerCatObj) {
    var balanceNuevo =
      reportPerCatObj[category].ganancia - reportPerCatObj[category].gasto
    //El error es que no ingresa al if xq el valor por default 0 es un indefinido
    console.log(reportPerCatObj[category].ganancia)
    if (balanceNuevo > balanceMayor) {
      console.log('entre')
      balanceMayor = balanceNuevo
      catBalanceMayor = category
      console.log(balanceMayor, catBalanceMayor)
    }
  }
  var catMayorBalanceTag = $('#catMayorBalanceTag')
  catMayorBalanceTag.innerText = catBalanceMayor.toUpperCase()

  var catMayorBalanceValor = $('#catMayorBalanceValor')
  catMayorBalanceValor.innerText = balanceMayor
}

const getMesMayorGanancia = () => {
  const reportPerMonthObj = createPerMonthReport()
  var gananciaMayorMonto = 0
  var gananciaMayorMes = ''

  for (let year in reportPerMonthObj) {
    for (let month in reportPerMonthObj[year])
      if (reportPerMonthObj[year][month].ganancia > gananciaMayorMonto) {
        gananciaMayorMonto = reportPerMonthObj[year][month].ganancia
        gananciaMayorMes = month
      }
  }
  var mesGananciaMayorTAG = $('#mesGananciaMayorTAG')
  mesGananciaMayorTAG.innerText = gananciaMayorMes.toUpperCase()

  var valorMesGananciaMayor = $('#valorMesGananciaMayor')
  valorMesGananciaMayor.innerText = gananciaMayorMonto
}

const getMesMayorGasto = () => {
  const reportPerMonthObj = createPerMonthReport()
  var gastoMayorMonto = 0
  var gastoMayorMes = ''

  for (let year in reportPerMonthObj) {
    for (let month in reportPerMonthObj[year])
      if (reportPerMonthObj[year][month].gasto > gastoMayorMonto) {
        gastoMayorMonto = reportPerMonthObj[year][month].gasto
        gastoMayorMes = month
      }
  }
  var mesGastoMayorTAG = $('#mesGastoMayorTAG')
  mesGastoMayorTAG.innerText = gastoMayorMes.toUpperCase()

  var valorMesGastoMayor = $('#valorMesGastoMayor')
  valorMesGastoMayor.innerText = gastoMayorMonto
}

const loadResumenReport = () => {
  getCatMayorGanancia()
  getCatMayorGasto()
  getCatMayorBalance()
  getMesMayorGanancia()
  getMesMayorGasto()
}

const generateReports = () => {
  const data = getStorage()

  if (data.operations.length >= 2) {
    $('#reportsContainer').classList.remove('is-hidden')
    loadResumenReport()
    loadCategoryReport()
    loadMonthlyReport()
  }
}
generateReports()
