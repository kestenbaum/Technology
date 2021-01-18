//Const
const getSelectorBurger = document.querySelector('.burger_wrap')
const getSelectorHeaderNavigate = document.querySelector('.header_nav')
const getSelectorHeaderTop = document.querySelector('.header_top_bg')
const getSelectorFormName = document.querySelector('.name_input')
const getSelectorFormEmail = document.querySelector('.mail')
const getSelectorFormTextarea = document.querySelector('textarea')
const getSelectorBtnForm = document.querySelector('.form_btn')
const getSelectorNavigateLink = document.querySelectorAll('.link_nav')

//Scroll
window.onscroll = () => window.scrollY > 100 ?
    getSelectorHeaderTop.style.cssText = 'background: #404040'
    :
    getSelectorHeaderTop.style.cssText = 'background: rgba(34,34,34,0.8)'

//BurgerMenu functional
getSelectorBurger.onclick = function(){
  this.classList.toggle('burger_active')
  getSelectorHeaderNavigate.classList.toggle('header_active')
  for (let element of getSelectorNavigateLink){
    element.onclick = () => {
      getSelectorBurger.classList.remove('burger_active')
      getSelectorHeaderNavigate.classList.remove('header_active')
    }
  }
}

//Form
function checkEmail(){
  const emailLength = getSelectorFormEmail.value.length
  if (emailLength < 1){
    getSelectorFormEmail.value.trim()
    getSelectorFormEmail.style.cssText = 'border: 2px solid red'
    getSelectorFormEmail.placeholder = 'Email не может быть пустым.'
  }
  getSelectorFormEmail.onfocus = () => {
    getSelectorFormEmail.value.trim()
    getSelectorFormEmail.style.cssText = 'border: 1px solid #D1D1D1;'
    getSelectorFormEmail.placeholder = ''
  }
}

function checkName(){
  const nameLength = getSelectorFormName.value.length
  if (nameLength < 1){
    getSelectorFormName.style.cssText = 'border: 2px solid red'
    getSelectorFormName.placeholder = 'Имя не может быть пустым.'
  }
  getSelectorFormName.onfocus = () => {
    getSelectorFormName.style.cssText = 'border: 1px solid #D1D1D1;'
    getSelectorFormName.placeholder = ''
  }
}

function checkTextarea(){
  if (getSelectorFormTextarea.value.length < 9){
    getSelectorFormTextarea.style.cssText = 'border: 2px solid red'
    getSelectorFormTextarea.placeholder = 'Сообщение не может быть пустым либо содержать меньше десяти символов.'
  }
  getSelectorFormTextarea.onfocus = () => {
    getSelectorFormTextarea.style.cssText = 'border: 1px solid #D1D1D1;'
    getSelectorFormTextarea.placeholder = ''
  }
}

getSelectorBtnForm.onclick = () => {
  checkEmail()
  checkName()
  checkTextarea()
}
