const slides = document.querySelector(".carousel_slides")
const slideList = Array.from(slides.children)
const prevButton = document.querySelector(".carousel_control_left")
const nextButton = document.querySelector(".carousel_control_right")
const navSlide = document.querySelector(".carousel_nav")
const dotsNav = Array.from(navSlide.children)
const slideSpace = slides.getBoundingClientRect().width;
//arranging slides next to each other
const setSlidePosition = (slide, index) => {
    console.log(slide)
    slide.style.left = slideSpace * index  + 'px';
}
slideList.forEach(setSlidePosition);
//function perform sliding
const moveToSlide = (slides,currentSlide,targetSlide) => {
    slides.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide')
}
  //when i click left move slides to the left
prevButton.addEventListener('click', e => {
    currentSlide = slides.querySelector('.current_slide');
    prevSlide = currentSlide.previousElementSibling;
    moveToSlide(slides,currentSlide,prevSlide)
  })
  //when i click right move slide to the right
nextButton.addEventListener('click', e => {
    const currentSlide = slides.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(slides,currentSlide,nextSlide) 
  })
  //when i click the slide indicator, move to that slide