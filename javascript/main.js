var elsFeaturesTabsItem = document.querySelectorAll('.tablist__item')
var elsFeaturesTabsLink = document.querySelectorAll('.tablist__link')

elsFeaturesTabsLink.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault()
    elsFeaturesTabsItem.forEach(function(item){
      item.classList.remove('tablist__item--active')
    })
    link.parentElement.classList.add('tablist__item--active')
  })
})