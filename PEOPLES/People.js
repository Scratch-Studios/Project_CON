 new Swiper('.card_wrapper ', {
    loop:true,
    spaceBetween:30,
    
    //  pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBulletes:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
  breakpoints:{
    0:{
        slidePerView: 1
    },
    480:{
        slidePerView: 2
    },
    764:{
        slidePerView: 3
    },
    1024:{
        slidePerView: 4
    }
    
  }
    
  });