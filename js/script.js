


var toggle = document.getElementById('drop_btn');
var toggle_2 = document.getElementById('nav-burger')
var block = document.getElementById('drop-menu');
// var drop_cde = document.getElementById('drop-cde');

toggle.addEventListener('click', function() {
  block.classList.toggle('drop-menu-active');
  toggle.classList.toggle('nav__list__list-actives');
})

toggle_2.addEventListener('click', function() {
  block.classList.toggle('drop-menu-active');
})


let tab = function () {

  let tabNav = document.querySelectorAll('.tabs-nav__item'),
      tabContent = document.querySelectorAll('.tabs-content__item'),
      tabName;

  tabNav.forEach(item => {
      item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
      tabNav.forEach(item => {
          item.classList.remove('tabs-active');
      });
      this.classList.add('tabs-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
      tabContent.forEach(item => {
          item.classList.contains(tabName) ? item.classList.add('tabs-active') : item.classList.remove('tabs-active');
      })
  }

};
tab();


new Swiper('.swiper-container', {
  autoHeight: true,
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
  pagination: {
    el: '.slider-pagin',
    type: 'bullets',
    clickable: true,
  },
});


