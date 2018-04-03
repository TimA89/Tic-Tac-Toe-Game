const store = require('./store')

const gameEvents = require('./gamelogic')

const signUpSuccess = function () {
  $('#newGame').show()
  $('#messageNewGame').text('Signed Up successfully. Would you like to start a New Game')
  $('#messageNewGame').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#newGame').show()
  $('#messageNewGame').text('Signed In successfully. Would you like to start a New Game')
  $('#messageNewGame').css('background-color', 'green')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
}

const changePWSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
}

const changePWFailure = function () {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
}

const newGameSuccess = function (data) {
  $('.container').show()
  $('.top').hide()
  store.game = data.game
  gameEvents.startCount()
  gameEvents.gameHandlers()
}

const newGameFailure = function () {
  $('#messageNewGame').text('Couldn\'t start a game')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure,
  newGameSuccess,
  newGameFailure
}
