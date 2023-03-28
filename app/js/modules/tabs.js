// табы
const tabsBtn = document.querySelectorAll('.product-tabs__top-item')
const tabsCont = document.querySelectorAll('.product-tabs__content-item')

tabsBtn.forEach((event) => {
  event.addEventListener('click', () => {
    let getAtt = event.getAttribute('data-tab')
    let currenTab = document.querySelector(getAtt)
    if (!event.classList.contains('active')) {
      tabsBtn.forEach((event) => event.classList.remove('product-tabs__top-item--active'))
      tabsCont.forEach((event) => event.classList.remove('product-tabs__content-item--active'))
    }
    event.classList.add('product-tabs__top-item--active')
    currenTab.classList.add('product-tabs__content-item--active')
  })
})