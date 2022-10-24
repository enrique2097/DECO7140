// Title: Build a Popup With JavaScript 
// Author: WebDevSimplified
// Date: 14/4/2019
// Code version: 1
// Availability: https://github.com/WebDevSimplified/Vanilla-JavaScript-Modal 

const openButtons = document.querySelectorAll('[data-measure-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
const hide = document.getElementById('hide')

function open(measure) {
    if (measure == null) return 
    measure.classList.add('active')
    hide.classList.add('active')
}
  
function close(measure) {
    if (measure == null) return
    measure.classList.remove('active')
    hide.classList.remove('active')
}

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const measure = document.querySelector(button.dataset.measureTarget)
        open(measure)
    })
})

hide.addEventListener('click', () => {
    const measures = document.querySelectorAll('.measure.active')
    measures.forEach(measure => {
      close(measure)
    })
  })
  
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const measure = button.closest('.measure')
      close(measure)
    })
})
  