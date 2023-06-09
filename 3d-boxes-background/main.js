const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

function createBoxes() {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div')
      box.classList.add('box')
      box.style.backgroundPosition = `${-125 * j}px ${-125 * i}px`
      fragment.appendChild(box)
    }
  }
  boxesContainer.appendChild(fragment)
}

window.addEventListener('load', createBoxes)
btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big')
})
