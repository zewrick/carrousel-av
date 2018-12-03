
let imgs = [ 'pic-1.png', 'pic-2.png', 'pic-3.png', 'pic-4.png', 'pic-5.png']

let imgGroup = document.getElementById('imgs')
let imgSize = imgs.length
let  previous = document.getElementById('previous')
let next = document.getElementById('next')
let title = document.getElementById('title')
let description = document.getElementById('description')

let titles = [
  'Anything is Posible', 
  'Borderline Syndrome', 
  'La vie pour les nuls',
  'Kion vi ocultas',
  'Pretty'
]

let descripcions = [
  'Running all night long',
  "That'c creepy",
  'Not your everday anime',
  'Get used to him for once!',
  'Dangerous as...'
]

i=0

const slide = () => {
  title.innerHTML = titles[i]
  description.innerHTML = descripcions[i]
  imgGroup.src = imgs[i]
  i++

  if (i >= imgSize) {
    i=0
  }
  setTimeout('slide()', 2000)


}

previous.addEventListener('click', function ()  {
 
 if (i > 0){
   i--
 } else {
  i = 0
 }
  imgGroup.src = imgs[i]
  title.innerHTML = titles[i]
  description.innerHTML = descripcions[i]
})

next.addEventListener('click', function () {
 
 if (i < imgSize-1){
   i++
 } else {
  i = imgSize -1
 }
  imgGroup.src = imgs[i]
  title.innerHTML = titles[i]
  description.innerHTML = descripcions[i]
 
})



window.onload = slide




