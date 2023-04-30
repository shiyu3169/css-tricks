const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', 'e67e22', '#2ecc71']
const SQUARES = 500

const fragment = document.createDocumentFragment()

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')
  fragment.appendChild(square)
}

container.appendChild(fragment)

container.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('square')) return
  setColor(e.target)
})

container.addEventListener('mouseout', (e) => {
  if (!e.target.classList.contains('square')) return
  removeColor(e.target)
})

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
