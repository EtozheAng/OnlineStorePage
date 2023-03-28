//view more
const dots = document.querySelector('.product-one__dost')
const more = document.getElementById('more')
const view = document.querySelector('.product-one__more')
view.addEventListener('click', () => {
  if (more.style.display == 'inline') {
    dots.style.display = 'inline'
    view.innerText = 'View more'
    more.style.display = 'none'
  } else {
    dots.style.display = 'none'
    view.innerText = 'View less'
    more.style.display = 'inline'
  }
})