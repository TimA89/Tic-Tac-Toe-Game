const newGame = require('./ui')

const arr = ['', '', '', '', '', '', '', '', '']

let turnNumber = 0

const turn = () => {
  turnNumber += 1
}

let value = ''
const turnValue = () => {
  turn()
  if (turnNumber % 2 === 1) {
    value = 'x'
    return value
  } else {
    value = 'o'
    return value
  }
}

const checkForMatch = () => {
  for (let i = 0; i < arr.length; i++) {
  if ((arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') ||
    (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') ||
    (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') ||
    (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') ||
    (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') ||
    (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') ||
    (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') ||
    (arr[2] === 'X' && arr[4] === 'X' && arr[6] === 'X')) {
    return playerX()
    } else if ((arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o') ||
    (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o') ||
    (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o') ||
    (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o') ||
    (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o') ||
    (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o') ||
    (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o') ||
    (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o')) {
    return playerO()
    } else if (arr[i] === !'') {
    return startNewGame()
    } else {}
  }
// const winCombo = [
//   [arr[0], arr[1], arr[2]],
//   [arr[3], arr[4], arr[5]],
//   [arr[6], arr[7], arr[8]],
//   [arr[0], arr[3], arr[6]],
//   [arr[1], arr[4], arr[7]],
//   [arr[2], arr[5], arr[8]],
//   [arr[0], arr[4], arr[8]],
//   [arr[2], arr[4], arr[6]]
// ]
// console.log(winCombo[0[0]])
//   const win = () => {
//     for (let i = 0; i < winCombo.length; i++) {
//       if (winCombo[i] === ['x', 'x', 'x']) {
//         console.log('player 1 won')
//       } else if (winCombo[i] === ['o', 'o', 'o']) {
//         console.log('player 2 won')
//       } else {
//         console.log(winCombo[i])
//       }
//     }
//   }
//   return win()
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

// const gameHandlers = () => {
//   $('#0').on('click', gameLogic)
//   $('#1').on('click', gameLogic)
//   $('#2').on('click', gameLogic)
//   $('#3').on('click', gameLogic)
//   $('#4').on('click', gameLogic)
//   $('#5').on('click', gameLogic)
//   $('#6').on('click', gameLogic)
//   $('#7').on('click', gameLogic)
//   $('#8').on('click', gameLogic)
// }

const gameHandlers = () => {
  for (let i = 0; i <= arr.length; i++) {
    $('#' + i).on('click', gameLogic(i))
  }
}

module.exports = {
  gameHandlers
}
