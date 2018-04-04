const store = require('./store')

const gameEvents = require('./gamelogic')

const signUpSuccess = function () {
  $('#sign-up').hide()
  $('#messageNewGame').text('Signed Up successfully. Please Sign In to play a new game')
  $('#messageNewGame').css('background-color', 'green')
  setTimeout(function () {
    $('#messageNewGame').text('')
    $('#messageNewGame').css('background-color', 'white')
  }, 5000)
}

const signUpFailure = function () {
  $('#messageNewGame').text('Error on sign up')
  $('#messageNewGame').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('.top').hide()
  $('.account').show()
  $('#message').text('Signed In successfully. Would you like to start a New Game')
  $('#message').css('background-color', 'green')
  setTimeout(function () {
    $('#message').text('')
    $('#message').css('background-color', 'white')
  }, 5000)
  store.user = data.user
}

const signInFailure = function () {
  $('#newGame').show()
  $('#messageNewGame').text('Error on sign in')
  $('#messageNewGame').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#messageNewGame').text('Signed out successfully')
  $('#messageNewGame').css('background-color', 'green')
  setTimeout(function () {
    $('#messageNewGame').text('')
    $('messageNewGame').css('background-color', 'white')
  }, 3000)
  $('.top').show()
  $('.container').hide()
  $('.account').hide()
  $('.user-account').rest()
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
}

const changePWSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  setTimeout(function () {
    $('#message').text('')
    $('#message').css('background-color', 'white')
  }, 5000)
}

const changePWFailure = function () {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
}

const newGameSuccess = function (data) {
  $('.container').show()
  $('.top').hide()
  store.game = data.game
  gameEvents.gameHandlers()
  $('.game-content').text('')
}

const newGameFailure = function () {
  $('#messageNewGame').text('Couldn\'t start a game')
  $('#messageNewGame').css('background-color', 'red')
}

const showSuccess = function (data) {
  $('.game-content').text('')
  $('.game-content').append(data.games.length)
}

const showFailure = function () {
  $('.game-content').text('')
  $('.game-content').text('Failed to show Games Played')
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
  newGameFailure,
  showSuccess,
  showFailure
}
