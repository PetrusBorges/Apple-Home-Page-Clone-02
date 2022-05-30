const selectElement = element => document.querySelector(element)

selectElement('.mobile_menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active')
})
