
// code bach yban div video done
let iconVD = document.querySelector('#icon-vd')
let dvVD = document.querySelector('.vd-watch')
let wtCL = document.querySelector('#watch-close')
iconVD.addEventListener('click', ()=>{
    dvVD.style.display = 'flex'

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
})
logCl.addEventListener('click', ()=>{
    divLog.style.display = 'none'
})