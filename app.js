// Replace the paragraf with another paragraf
function readMore(){
var text = document.getElementById("text").innerHTML;
var para = document.getElementById("para")
para.innerHTML = text
}

// creat a readmore link
function read(){
    var lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate porro repudiandae corrupti placeat obcaecati laudantium tempora mollitia cumque quia saepe? Voluptatum, nam dolores eos id ipsa magnam reiciendis iste distinctio asperiores corrupti accusantium dolorum vitae natus quaerat magni impedit rerum molestiae doloremque perspiciatis alias illum possimus eligendi quo! Non,"
    var paragraf = document.getElementById("paragraf")
    paragraf.innerHTML = lorem
}

function big(){
    var img = document.getElementById("car").className = "hidden"
}

function changeImage(){
    var img = document.getElementById("astonMartan")
    img .src = "image/automobile-automotive-car-358070.jpg"
}
function changeImageBefore(){
    var img = document.getElementById("astonMartan")
    img .src = "image/4270-Aston_Martin-car-red_cars.jpg"
}

function changer(id, src){
var carImage = document.getElementById(id)
carImage.src = src
}


var para = document.getElementsByTagName('p')
para[4].style.color = 'red'
for(i = 3; i < para.length; i++){
    para[i].style.backgroundColor = 'yellow'
}
