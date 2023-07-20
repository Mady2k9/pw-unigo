export const generateYearArr = (currentYear: number) => {
  let previousYearsRequired = 3
  let yearTitleArr = ['Current Year', 'Previous Year', 'Year']
  let yearsArr = []

  for (let i = 0; i < previousYearsRequired; i++) {
    let yearKey = currentYear - i
    yearsArr.push({
      year: yearKey,
      title: `${yearTitleArr[i]} (${yearKey})`,
    })
  }

  return yearsArr
}
