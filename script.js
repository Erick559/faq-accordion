const accordionItems = document.querySelectorAll('.section-header')

accordionItems.forEach(accordionItem => {
  accordionItem.addEventListener('click',function(){
    this.classList.toggle('active')

    const sectionContent = this.nextElementSibling;
    const plusIcon = this.querySelector('.plus-icon')
    const minusIcon = this.querySelector('.minus-icon')

    if(sectionContent.style.maxHeight){
      sectionContent.style.maxHeight = null;
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    }
    else{
      sectionContent.style.maxHeight = sectionContent.scrollHeight + 'px';
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    }
  })
})