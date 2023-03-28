// счетчик колличестава товаров
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const numValue = document.querySelector('.product-one__num')
let value = 1;

minus.addEventListener('click', () => {
  numValue.value > 1 ? numValue.value-- : numValue.value;
})
plus.addEventListener('click', () => {
  numValue.value <= 99 ? numValue.value++ : numValue.value;
})
