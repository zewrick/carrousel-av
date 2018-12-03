
let imgs = [ 'pic-1.png', 'pic-2.png', 'pic-3.png', 'pic-4.png', 'pic-5.png']

let imgGroup = document.getElementById('imgs')
let imgSize = imgs.length
let  previous = document.getElementById('previous')
let next = document.getElementById('next')

i=0
previous.addEventListener('click', function ()  {
 if (i > 0){
   i--
 } else {
  i = 0
 }
  imgGroup.src = imgs[i]
})

next.addEventListener('click', function () {
 if (i < imgSize-1){
   i++
 } else {
  i = imgSize -1
 }
  imgGroup.src = imgs[i]
 
})

