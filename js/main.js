

const btnEl = document.querySelector('.btn-js')
const btnpr = document.querySelector('profile')

btnEl.addEventListener('click',function(){
  gsap.to('#profile',.7, {
    delay:1,
    display:'block',
  })
},)

const backbtn = document.querySelector('.btn-back')

backbtn.addEventListener('click',function(){
  gsap.to('#profile',.7, {
    display:'none',
  })
})

