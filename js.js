function removeActiveClass(){
  const tabs = document.querySelectorAll('.tab-link')
  tabs.forEach(item => item.classList.remove('tab-link_active'))
}

function openPage(page, element){
  const tab_content = document.getElementsByClassName('tab-content')

  for(let i = 0; i < tab_content.length; i++){
      tab_content[i].style.display = 'none'
  }

  document.getElementById(page).style.display='block';
  removeActiveClass();
  element.classList.add('tab-link_active');

}

document.querySelector('.tab-link_active').click()
