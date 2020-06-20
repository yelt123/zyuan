function isLogin () {
  return document.cookie.includes('login=true')
}

function setLogin () {
  const date = new Date()
  date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000)
  document.cookie = `login=true;expires=${date.toUTCString()}`
}

export default {
  isLogin, setLogin
}
