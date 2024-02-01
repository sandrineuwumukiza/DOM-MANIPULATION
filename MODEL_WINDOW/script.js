'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')


const openModel = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModel = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden') 
}

    for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click', openModel)
    }

    btnCloseModal.addEventListener('click', closeModel)
    overlay.addEventListener('click', closeModel)

    document.addEventListener('keydown', function(e){
        console.log(e.key)
      if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModel()
      }
    })

// btnCloseModal.addEventListener('click', closeModel
// function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// }
// )

// overlay.addEventListener('click', closeModel
// function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// }
// )