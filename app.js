const square = document.querySelectorAll('.square')
const minion = document.querySelectorAll('.minion')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('minion')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('minion')

    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result += 1
            score.textContent = result
        }
    })
})

function moveMinion() { 
    let timerId = null
    timerId = setInterval(randomSquare, 800)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert("Game Over! Your score " + result)
    }
}

let timerId = setInterval(countDown, 1000)
moveMinion()