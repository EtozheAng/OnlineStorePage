// звездный рейтинг
const raitingItemsList = document.querySelectorAll('.star__item')
const raitingItemsArray = Array.prototype.slice.call(raitingItemsList)

raitingItemsArray.forEach(item =>
  item.addEventListener('click', () => {
    const { itemValue } = item.dataset
    item.parentNode.dataset.totalValue = itemValue
    console.log(itemValue);
  })
)