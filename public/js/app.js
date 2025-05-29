
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
// mune
let btMune = document.querySelectorAll(".munee");
let coMune = document.querySelectorAll(".co-mune");
let dvMN = document.querySelector('#mn2')
let mn3 = document.querySelector('#mn3')
btMune.forEach(e => {
    e.addEventListener('click', () => {
        let cont = e.textContent.trim();
        coMune.forEach(c => {
            c.textContent = cont;
            if (c.textContent === "Breakfast") {
                dvMN.style.display = "none"
                mn3.style.display = "block"
                
            }else if(c.textContent === "Lunch"){
                 mn3.style.display = "none"
                 dvMN.style.display = "none"
            }
            else{
                dvMN.style.display = "flex"
                mn3.style.display = "block"

            }
        });
    });
});

let caru1 = document.querySelector('#caru1');
let caru2 = document.querySelector('#caru2');
let caru3 = document.querySelector('#caru3');

let btnCqru1 = document.querySelector('#st-bt1');
let btnCqru2 = document.querySelector('#st-bt2');
let btnCqru3 = document.querySelector('#st-bt3');

btnCqru1.addEventListener('click', () => {
    caru1.style.display = 'flex';
    caru2.style.display = 'none';
    caru3.style.display = 'none';
    btnCqru1.style.backgroundColor = '#4b4b4d';
    btnCqru2.style.backgroundColor = '';
    btnCqru3.style.backgroundColor = '';
});
btnCqru2.addEventListener('click', () => {
    caru1.style.display = 'none';
    caru2.style.display = 'flex';
    caru3.style.display = 'none';
    btnCqru2.style.backgroundColor = '#4b4b4d';
    btnCqru1.style.backgroundColor = '';
    btnCqru3.style.backgroundColor = '';
});
btnCqru3.addEventListener('click', () => {
    caru1.style.display = 'none';
    caru2.style.display = 'none';
    caru3.style.display = 'flex';
    btnCqru3.style.backgroundColor = '#4b4b4d';
    btnCqru1.style.backgroundColor = '';
    btnCqru2.style.backgroundColor = '';
});

