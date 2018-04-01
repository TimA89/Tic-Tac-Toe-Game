// const newGame = require('./ui')

const gameHandlers = () => {
  const arr = ['', '', '', '', '', '', '', '', '']

  let turnNumber = 0

  const start = () => {
    if (turnNumber === 0) {
      $('#playerX').css('background-color', 'green')
      $('#playerO').css('background-color', 'white')
      turnNumber += 1
      return turnNumber
    }
  }

  let value = ''

  const turnValue = () => {
    if (turnNumber % 2 === 1) {
      $('#playerO').css('background-color', 'green')
      $('#playerX').css('background-color', 'white')
      turnNumber += 1
      value = 'x'
      return value
    } else {
      $('#playerX').css('background-color', 'green')
      $('#playerO').css('background-color', 'white')
      value = 'o'
      return value
    }
  }

  const checkForMatch = () => {
    const winCombo = [
      [arr[0], arr[1], arr[2]],
      [arr[3], arr[4], arr[5]],
      [arr[6], arr[7], arr[8]],
      [arr[0], arr[3], arr[6]],
      [arr[1], arr[4], arr[7]],
      [arr[2], arr[5], arr[8]],
      [arr[0], arr[4], arr[8]],
      [arr[2], arr[4], arr[6]]
    ]

    const win = () => {
      if (winCombo.some((key) => {
          return key.join('') === 'xxx'
        })) {
        playerXWon()
      } else if (winCombo.some((key) => {
          return key.join('') === 'ooo'
        })) {
        playerOWon()
      } else if (arr.join('').length === 9) {
        tie()
      } else {}

      win()
    }
  }

  const gameLogic = (num) => {
    const game = () => {
      while ($('#' + num).text() === '') {
        $('#' + num).text(turnValue())
      }
      arr[num] = value
      checkForMatch()
    }
    return game
  }

  const eventHandlers = () => {
    for (let i = 0; i <= arr.length; i++) {
      $('#' + i).on('click', gameLogic(i))
    }
  }
}

module.exports = {
  gameHandlers
}
