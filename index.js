
let Images=document.querySelectorAll('.image')

const right_button=document.querySelector('.fa-arrow-right')
const left_button=document.querySelector('.fa-arrow-left')
const bubbles=document.querySelectorAll('.bubble')

let activeImage=0;

right_button.addEventListener('click',(e)=>{
    if(activeImage<4){    
slide(e)
}

})

left_button.addEventListener('click',(e)=>{
  if(activeImage>0){
slide(e)
  }
})

function slide(e){
    let class1=e.target.className
    console.log(class1)
if(class1=="fas fa-arrow-right"){
     Images[activeImage].classList.remove('active')
Images[activeImage+1].classList.add('active')
activeImage++;
}
else if (class1=="fas fa-arrow-left"){
 Images[activeImage].classList.remove('active')
 Images[activeImage-1].classList.add('active')
activeImage--;
}
}
bubbles.forEach((bubble)=>{
    bubble.addEventListener('click',function(e){
let value=e.target.id
Images[activeImage].src=`/img/chair-${value}.jpg`
console.log(Images[0])
    })
})
   