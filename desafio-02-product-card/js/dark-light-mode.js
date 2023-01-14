const dlmButton = document.getElementById('dark-light-mode-button')
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = localStorage.getItem('theme')

if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
  dlmButton.classList.toggle('d-l-m-activated')
}

else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme')
}

dlmButton.addEventListener('click', function transition() {
  dlmButton.classList.toggle('d-l-m-activated')

  if (prefersDarkTheme.matches) {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
  }

  else {
    document.body.classList.toggle('dark-theme')
    var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }

  localStorage.setItem('theme', theme)
})