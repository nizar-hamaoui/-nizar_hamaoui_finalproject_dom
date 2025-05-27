
// code bach yban div video done
let iconVD = document.querySelector('#icon-vd')
let dvVD = document.querySelector('.vd-watch')
let wtCL = document.querySelector('#watch-close')
let db = document.querySelector('body')
iconVD.addEventListener('click', ()=>{
    dvVD.style.display = 'flex'
    db.style.overflow = 'hidden'
    

})

wtCL.addEventListener('click', ()=>{
    dvVD.style.display = 'none'
    db.style.overflow = 'scroll'
})

// code dyal login
let divLog = document.querySelector('.div-login')
let logg = document.querySelector('#logg')
let logCl = document.querySelector('#log-close')

logg.addEventListener('click', ()=>{
    divLog.style.display = 'flex'
    db.style.overflow = 'hidden'
})
logCl.addEventListener('click', ()=>{
    divLog.style.display = 'none'
    db.style.overflow = 'scroll'
})