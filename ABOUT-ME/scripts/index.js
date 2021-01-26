var data = new Date()
console.log(data.toLocalestring())

/*add event to hover -id, classes etc

/*click event to image*/
var header = document.getElementbyId("topHeader");
console.log(header);

var links = document.getElementsByTagName("link");
console.log(links);

var images = document.getElementsByTagName("img");
console.log(images);

images[1].addEventListener('click', event=>{
    console.log(event.target);
    alert("clicked");
    event.target.style.height = "200px";
    event.target.style.width = "300px";
})
