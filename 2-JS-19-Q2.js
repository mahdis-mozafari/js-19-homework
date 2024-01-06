//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" 
//changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:
const ghoflEle=document.querySelector('.ri-handbag-line')
const buttonEle =document.querySelector('button')

buttonEle.addEventListener('click',function(){
    document.querySelector('#buttontext').innerHTML='Added to Cart'
    ghoflEle.remove()
})
