const $ = (selector) => document.querySelector(selector)
/*Tabla Resumen*/
const createResumenReport = () => {}
/*Reporte Totales por Categoria*/
const createCategoryReport = () => {
  const data = getStorage()
  let reportPerCat = []
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
    let catGanancia = 0
    let catGasto = 0
    let catBalance = 0

    catGananciaTR = document.createElement('tr')
    categoryTag = document.createElement('td')
    categoryTag.innerText = element

    if (catReportObj[element].ganancia) {
      let catGanancia = catReportObj[element].ganancia
      catGananciaTD = document.createElement('td')
      catGananciaTD.setAttribute('class', 'is-success')
      catGananciaTD.innerText = Number(catGanancia)
    } else {
      catGananciaTD = document.createElement('td')
      catGananciaTD.setAttribute('class', 'is-success')
      catGananciaTD.innerText = Number(catGanancia)
    }
    if (catReportObj[element].gasto) {
      let catGasto = Number(catReportObj[element].gasto)
      catGastoTD = document.createElement('td')
      catGastoTD.setAttribute('class', 'is-danger')
      catGastoTD.innerText = Number(catGasto)
    } else {
      catGastoTD = document.createElement('td')
      catGastoTD.setAttribute('class', 'is-danger')
      catGastoTD.innerText = Number(catGasto)
    }
    if (catReportObj) {
      catBalance = Number(catGanancia) - Number(catGasto)
      catBalanceTD = document.createElement('td')
      catBalanceTD.setAttribute('class', 'is-warning')
      catBalanceTD.innerText = Number(catBalance)
    } else {
      catBalanceTD = document.createElement('td')
      catBalanceTD.setAttribute('class', 'is-warning')
      catBalanceTD.innerText = Number(catBalance)
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
  let reportPerMonth = []
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
  console.log(monthlyTableObj)
  for (let Yearelement in monthlyTableObj) {
    for (let monthElement in monthlyTableObj[Yearelement]) {
      let monthGanancia = 0
      let monthGasto = 0
      let monthBalance = 0

      monthGananciaTR = document.createElement('tr')
      monthTag = document.createElement('td')
      monthTag.innerText = monthElement

      if (monthlyTableObj[Yearelement][monthElement].ganancia) {
        let monthGanancia = Number(
          monthlyTableObj[Yearelement][monthElement].type,
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
        let monthGasto = Number(monthlyTableObj[Yearelement][monthElement].type)
        monthGastoTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-danger')
        monthGastoTD.innerText = Number(monthGasto)
      } else {
        monthGastoTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-danger')
        monthGastoTD.innerText = Number(monthGasto)
      }
      if (monthlyTableObj[Yearelement][monthElement]) {
        monthBalance = Number(monthGanancia) - Number(monthGasto)
        monthBalanceTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-warning')
        monthGastoTD.innerText = Number(monthBalance)
      } else {
        monthGastoTD = document.createElement('td')
        monthGastoTD.setAttribute('class', 'is-warning')
        monthGastoTD.innerText = Number(monthBalance)
      }
      monthGananciaTR.appendChild(monthTag)
      monthGananciaTR.appendChild(monthGananciaTD)
      monthGananciaTR.appendChild(monthGastoTD)
      monthGananciaTR.appendChild(monthGastoTD)

      monthlyTableReport.appendChild(monthGananciaTR)
    }
  }
}

const generateReports = () => {
  const data = getStorage()

  if (data.operations.length >= 2) {
    $('#reportsContainer').classList.remove('is-hidden')
    //createResumenReport()
    loadCategoryReport()
    loadMonthlyReport()
  }
}
generateReports()
