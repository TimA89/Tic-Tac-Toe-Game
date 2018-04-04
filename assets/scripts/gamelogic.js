const store = require('./store')

const api = require('./api')

const ui = require('./gameUI')

$('.box:reset')

let turnNumber

const startCount = (num) => {
  if (num === 0) {
    $('#playerX').css('background-color', 'green')
    $('#playerO').css('background-color', 'white')
    turnNumber = 1
    return turnNumber
  }
}

let valueTurn = ''

const turnValue = () => {
  if (turnNumber % 2 === 1) {
    $('#playerO').css('background-color', 'green')
    $('#playerX').css('background-color', 'white')
    turnNumber += 1
    valueTurn = 'x'
    return valueTurn
  } else {
    $('#playerX').css('background-color', 'green')
    $('#playerO').css('background-color', 'white')
    valueTurn = 'o'
    turnNumber += 1
    return valueTurn
  }
}

const checkForMatch = () => {
  const winCombo = [
    [store.game.cells[0], store.game.cells[1], store.game.cells[2]],
    [store.game.cells[3], store.game.cells[4], store.game.cells[5]],
    [store.game.cells[6], store.game.cells[7], store.game.cells[8]],
    [store.game.cells[0], store.game.cells[3], store.game.cells[6]],
    [store.game.cells[1], store.game.cells[4], store.game.cells[7]],
    [store.game.cells[2], store.game.cells[5], store.game.cells[8]],
    [store.game.cells[0], store.game.cells[4], store.game.cells[8]],
    [store.game.cells[2], store.game.cells[4], store.game.cells[6]]
  ]

  const win = () => {
    if (winCombo.some((key) => {
      return key.join('') === 'xxx'
    })) {
      $('#message').text('Player X won')
      $('#message').css('background-color', 'green')
      setTimeout(function () {
        $('#message').text('')
        $('#message').css('background-color', 'white')
      }, 5000)
      return true
    } else if (winCombo.some((key) => {
      return key.join('') === 'ooo'
    })) {
      $('#message').text('Player O won')
      $('#message').css('background-color', 'green')
      setTimeout(function () {
        $('#message').text('')
        $('#message').css('background-color', 'white')
      }, 5000)
      return true
    } else if (store.game.cells.join('').length === 9) {
      $('#message').text('Its a draw')
      $('#message').css('background-color', 'green')
      setTimeout(function () {
        $('#message').text('')
        $('#message').css('background-color', 'white')
      }, 5000)
      return true
    } else {}
  }
  return win()
}

const gameLogic = (num) => {
  const game = (event) => {
    event.preventDefault()
    const obj = {game: {cell: {index: num, value: ''}, over: false}}
    if ($('#' + num).text() === '') {
      $('#' + num).text(turnValue())
      $('#message').text('')
      store.game.cells[num] = valueTurn
      obj.game.cell.value = valueTurn
      api.updateGame(obj)
        .then(ui.updateSuccess)
        .catch()
    } else {
      $('#message').text('This place is taken')
      $('#message').css('background-color', 'green')
    }
    checkForMatch()
    if (checkForMatch()) {
      for (let i = 0; i < 9; i++) {
        $('#' + i).off('click')
      }
      obj.game.over = true
      store.game.over = true
    }
  }
  return game
}

const gameHandlers = () => {
  $('.box').text('')
  startCount(0)
  for (let i = 0; i <= store.game.cells.length; i++) {
    $('#' + i).on('click', gameLogic(i))
  }
}

module.exports = {
  gameHandlers
}
