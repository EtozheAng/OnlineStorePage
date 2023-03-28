//слайдер 
const bigSlider = document.querySelector('.product-slide__big')
const bigArray = Array.from(bigSlider.children)
const littleSlider = document.querySelector('.product-slide__little')
const littleArray = Array.from(littleSlider.children)
const span = document.getElementById('span')

//  колличество пролистанных изображений
function swipe(element, index, array, n = 0) {
  element.style.left = (index + n) * (100 / (array.length)) + "%"
  if (element.style.left == '100%') element.style.left = 0
}
bigArray.forEach((slide, index) => {
  slide.dataset.index = index
  bigArray[0].setAttribute('data-active', '')
  if (index !== 0) slide.classList.add('hidden')
  slide.addEventListener('click', () => {
    swipe(span, index, bigArray, 1)
    // Скрываем текущий слайд
    slide.classList.add('hidden')
    slide.removeAttribute('data-active')
    //Рассчитываем индекс след слайда
    let nextSlideIndex = index + 1 === bigArray.length ? 0 : index + 1
    // Находим следующий слайд
    const nextSlide = bigSlider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
    return nextSlide
  })
});
littleArray.forEach((slide, index) => {
  slide.dataset.index = index
  slide.addEventListener('click', () => {
    const currentIndex = slide.getAttribute('data-index')
    const selectedItem = bigSlider.querySelector(`[data-index="${currentIndex}"]`)
    const active = bigSlider.querySelector('[data-active]')
    const lastIndex = active.getAttribute('data-index')
    swipe(span, index, littleArray)

    if (selectedItem !== active) {
      active.classList.add('hidden')
      bigArray[lastIndex].removeAttribute('data-active')
      bigArray[currentIndex].setAttribute('data-active', '')
      selectedItem.classList.remove('hidden')
    }
  })
})

window.addEventListener('resize', () => {
  const widthSlide = bigSlider.offsetWidth / bigArray.length
  span.style.width = widthSlide !== 135 ? widthSlide + 'px' : ''
})