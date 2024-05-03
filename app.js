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