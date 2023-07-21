export const registrationOpenDate = new Date(2023, 7, 1)
export const regCloseDate = new Date(2023, 11, 31)
export const currDate = new Date()

export const currentDate = currDate
  .toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  .split('/')
  .reverse()
  .join('-')

export const registrationCloseDate = regCloseDate
  .toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  .split('/')
  .reverse()
  .join('-')

export const registrationDateClosePass = (
  curDateParam: string,
  regCloseDateParam: string
): boolean => {
  if (curDateParam && regCloseDateParam) {
    return curDateParam < regCloseDateParam
  }
  return false
}

export let registrationClose = registrationDateClosePass(
  currentDate,
  registrationCloseDate
)
