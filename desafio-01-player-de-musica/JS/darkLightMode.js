const dLMButton = document.getElementById('dark-and-light-mode-button')
const prefersDarkTheme = window.matchMedia('prefers-color-scheme: dark')
const currentTheme = localStorage.getItem('theme')

dLMButton.onclick = transition

if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
  button.classList.toggle("D-L-M-activated")
}

else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme')
}

function transition() {
  dLMButton.classList.toggle('D-L-M-activated')

  if (prefersDarkTheme.matches) {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
  }

  else {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }

  localStorage.setItem('theme', theme)
}
