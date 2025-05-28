
// code bach yban div video done
let iconVD = document.querySelector('#icon-vd')
let dvVD = document.querySelector('.vd-watch')
let wtCL = document.querySelector('#watch-close')
let db = document.querySelector('body')
iconVD.addEventListener('click', ()=>{
    dvVD.style.display = 'flex'
    dvVD.style. position = 'fixed'
    

})

wtCL.addEventListener('click', ()=>{
    dvVD.style.display = 'none'
  
})

// code dyal login
let divLog = document.querySelector('.div-login')
let logg = document.querySelector('#logg')
let logCl = document.querySelector('#log-close')

logg.addEventListener('click', ()=>{
    divLog.style.display = 'flex'
    divLog.style. position = 'fixed'
})
logCl.addEventListener('click', ()=>{
    divLog.style.display = 'none'
    
})

let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.item1');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

if (carousel && slides.length > 0) {
    showSlide(currentIndex);

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });
}

let btnCAru1 = document.querySelector('#ii')

btnCAru1.addEventListener('click', ()=>{
     dvVD.style.display = 'flex'
     dvVD.style. position = 'fixed'
    
})