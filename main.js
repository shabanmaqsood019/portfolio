//swiper JS

const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  const menuBtn=document.querySelector('#menu-btn');
  const closeBtn=document.querySelector('#close-btn');
  const menu=document.querySelector('nav .container ul');
  menuBtn.addEventListener('click',()=>{
    menu.style.display='block';
    menuBtn.style.display='none';
    closeBtn.style.display='inline-block';
  })
closeBtn.addEventListener('click',()=>{
  menu.style.display='none';
  menuBtn.style.display='inline-block';
  closeBtn.style.display='none';
})
// nav items active 
const navItems=menu.querySelectorAll('li');

changeActiveItem=()=>{
navItems.forEach(item=>{
  const link=item.querySelector('a');
  link.classList.remove('active');
})
}

navItems.forEach(item=>{
  const link=item.querySelector('a');
  link.addEventListener('click',()=>{
    changeActiveItem();
    link.classList.add('active');
  })
})
// read more About section

const readMoreBtn=document.querySelector('.read-more');
const readMoreContent=document.querySelector('.read-more-content');
readMoreBtn.addEventListener('click',()=>{
  readMoreContent.classList.toggle('show-content');
  if(readMoreContent.classList.contains('show-content')){
    readMoreBtn.textContent="show less";
  }else{
    readMoreBtn.textContent="show more";
  }
})
// skill section

const skillItems=document.querySelectorAll('section.skills .skill');
skillItems.forEach(skill=>{
  skill.querySelector('.head').addEventListener('click',()=>{
    skill.querySelector('.items').classList.toggle('show-items')
  })
})
window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY > 100)
})