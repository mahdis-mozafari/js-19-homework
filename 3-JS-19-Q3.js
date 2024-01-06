// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const closet =document.querySelector('.ri-close-line')
const sectionEle =document.querySelector('.message')
 closet.addEventListener('click',()=>{
    sectionEle.remove()
 })