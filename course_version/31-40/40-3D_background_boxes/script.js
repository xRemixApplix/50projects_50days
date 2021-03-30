const button = document.getElementById('btn')
const boxes = document.getElementById('boxes')

button.addEventListener('click', () => {
    boxes.classList.toggle('big')
})