// валидация форм
const { form } = document.forms
const formEmail = document.querySelector('.footer-top__form')
const inputEmail = document.querySelector('.footer-top__form-input')
const usermane = document.querySelector('.comments-form__name')
const review = document.querySelector('.comments-form__textarea')
const email = document.querySelector('.comments-form__email')
const rating = document.getElementById('rating')

form.addEventListener('submit', e => {
  e.preventDefault()
  validateInputs()
  // получение данных из формы
  const formData = new FormData(form);
  const ratingValue = rating.dataset.totalValue
  formData.append('star', ratingValue)
  const values = Object.fromEntries(formData.entries())
  console.log(values);
})

formEmail.addEventListener('submit', e => {
  e.preventDefault()
  const emailValue = inputEmail.value.trim()
  checkedEmail(emailValue, inputEmail)
})

const setError = (element, message = '') => {
  const inputControl = element.nextElementSibling
  inputControl.innerText = message
}
const setSuccess = element => {
  const inputControl = element.nextElementSibling
  inputControl.innerText = ""
}
const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}
const checkedEmail = (emailValue, email) => {
  if (emailValue === '') {
    setError(email, 'Email is required')
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Privide a valid email addres')
  } else {
    setSuccess(email)
  }
}
const validateInputs = () => {
  const usernameValue = usermane.value.trim()
  const emailValue = email.value.trim()
  const reviewValue = review.value.trim()

  if (usernameValue === '') {
    setError(usermane, 'Username is required')
  } else {
    setSuccess(usermane)
  }

  if (reviewValue === '') {
    setError(review, 'Rewiew is required')
  } else {
    setSuccess(review)
  }

  checkedEmail(emailValue, email)

  if (rating.dataset.totalValue === "0") {
    setError(rating, 'Rating is required')
  } else {
    setSuccess(rating)
  }
}