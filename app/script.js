const CELL_AMOUNT = 64
let current_color = 'red'
let container = document.querySelector('.container')

function paint(event) {
    event.target.style.backgroundColor = current_color
    // if (event.target.style.backgroundColor == current_color) {
    //     event.target.style.backgroundColor = "rgb(0, 0, 0, 0)"
    // }
    // else {
    //     event.target.style.backgroundColor = current_color
    // }
}

for (let i = 0; i < CELL_AMOUNT; i += 1) {
    let newElement = document.createElement('div')
    newElement.classList.add('cell')

    newElement.addEventListener("click", paint)

    container.appendChild(newElement)
}

container.addEventListener('mousedown', function() {
    container.addEventListener('mousemove', paint)
})

container.addEventListener('mouseup', function() {
    container.removeEventListener('mousemove', paint)
})

let redButton = document.querySelector('.red')
redButton.classList.add('active')
redButton.addEventListener("click", function() {
    redButton.classList.add('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'red'
})

let blueButton = document.querySelector('.blue')
blueButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.add('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'blue'
})

let yellowButton = document.querySelector('.yellow')
yellowButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.add('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'yellow'
})

let limeButton = document.querySelector('.lime')
limeButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.add('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'lime'
})

let pinkButton = document.querySelector('.pink')
pinkButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.add('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'magenta'
})

let whiteButton = document.querySelector('.white')
whiteButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.add('active')
    grayButton.classList.remove('active')
    cyanButton.classList.remove('active')
    current_color = 'white'
})

let grayButton = document.querySelector('.gray')
grayButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.add('active')
    cyanButton.classList.remove('active')
    current_color = 'gray'
})

let cyanButton = document.querySelector('.cyan')
cyanButton.addEventListener("click", function() {
    redButton.classList.remove('active')
    blueButton.classList.remove('active')
    yellowButton.classList.remove('active')
    limeButton.classList.remove('active')
    pinkButton.classList.remove('active')
    whiteButton.classList.remove('active')
    grayButton.classList.remove('active')
    cyanButton.classList.add('active')
    current_color = 'black'
})

