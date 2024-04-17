const swiper = new Swiper('.js-review-slider', {
    grabCursor:true,
    spaceBetween:30,
    pagination:{
        el:'.js-review-pagination',
        clickable:true,
    },
    breakpoints:{
        767:{
            slidesPerView:2
        }
    }
});