const accordionItems = document.querySelectorAll('.section-header')

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener('click',function(){
    this.classList.toggle('active')

    const sectionContent = this.nextElementSibling;
    console.log(sectionContent)
  })
})