const stateButton = document.getElementById('state-button')
const sofa = document.getElementById('sofa')
let rotating = false

stateButton.addEventListener('click', function changeState() {
  rotating ? stopRotating() : startRotating()
})

function startRotating() {
  rotating = true
  stateButton.src = 'assets/close.svg'
  sofa.src = 'assets/sofa-360.gif'

}

function stopRotating() {
  rotating = false
  stateButton.src = 'assets/360.svg'
  sofa.src = 'assets/sofa.png'

}