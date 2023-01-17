const cartButton = document.getElementById('cart-add-button')
const modal = document.querySelector('.modal')

cartButton.addEventListener('click', () => {


  modal.classList.remove('appear')
  setTimeout(() => { modal.classList.add('appear') }, 10)
})  