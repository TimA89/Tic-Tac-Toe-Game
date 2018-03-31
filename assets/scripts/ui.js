const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  store.user = data.user
  console.log(store.user)
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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure
}
