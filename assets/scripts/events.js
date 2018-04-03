const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')


const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame(data)
  console.log('x')
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePW = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePW(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
  console.log(data)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change_pass').on('submit', onChangePW)
  $('newGame').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
