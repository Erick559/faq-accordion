const accordionItems = document.querySelectorAll('.section-header')

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener('click',function(){
    this.classList.toggle('active')
  })
})