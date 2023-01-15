const open = document.getElementById('click')
const close =document.getElementById('close')
const code = document.querySelector('.code')

open.addEventListener('click',()=>{
    code.classList.add('open')
})
close.addEventListener('click', ()=>{
   code.classList.remove('open')
})
