const swiper = new Swiper('.swiper', {
    // slidesPerView: 3,
    // spaceBetween: 30,
    direction:'horizontal',
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints:{
 1000:{
  slidesPerView:3,
  spaceBetween:10,
 },
      768:{
  slidesPerView:2,
  spaceBetween:10,
 },
    400:{
  slidesPerView:1,
 spaceBetween:10,
}
 }
    
  
})  

