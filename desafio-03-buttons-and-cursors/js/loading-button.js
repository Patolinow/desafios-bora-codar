const fIButton = document.getElementById('first-interactive-button')

fIButton.addEventListener('click', () => {
  fIButton.classList.add('interactive-button')

  setTimeout(() => { fIButton.classList.remove('interactive-button') }, 2000)
})  