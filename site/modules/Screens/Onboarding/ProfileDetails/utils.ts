export const isPhoneValid = (phone: string) => {
  const _text = phone || ''
  let pattern = /^[6-9]\d{9}$/
  return pattern.test(_text)
}

export const isEmailValid = (email: string) => {
  const _text = email || ''
  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(_text)
}
