const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    breakpoints:{
 768:{
  slidesPerView:3,
  spaceBetween:10,
 },
    600:{
  slidesPerView:1,
 spaceBetween:10,
}
 }
    
  
})  

