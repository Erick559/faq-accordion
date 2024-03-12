const accordionItems = document.querySelectorAll('.section-header')

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener('click',function(){
    this.classList.toggle('active')

    const sectionContent = this.nextElementSibling;
    const plusIcon = this.querySelector('.plus-icon')
    const minusIcon = this.querySelector('.minus-icon')

    console.log(minusIcon)
  })
})