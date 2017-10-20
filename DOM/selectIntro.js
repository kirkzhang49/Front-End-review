var tag = document.getElementById("highlight");
console.dir(tag);
var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);
console.dir(tags[0])
var tags = document.getElementsByTagName("li");
var tag =document.querySelector("#highlight");
var tag = document.querySelector(".bolded");
var tag = document.querySelector("h1");

var tag = document.querySelector("li a.speicial");//inside li a with id speicial'=
var tag = document.querySelectorAll("h1");//js objects

var tag =document.getElementById("first");

var tag = document.querySelector("#first");

var tag = document.getElementsByTagName("speicial");

tag[0];
var tag = document.querySelector("p");//get first one 
var tag = document.querySelector("h1+p");

var tag = document.getElementById("highlight");

tag.style.color = "blue";
tag.style.border= "10px solid red";
tag.style.background="color:black"
var tag = document.querySelector("h1");
tag.classList.add("another-class");
tag.classList.remove("annther-class");
tag.classList.toggole("another-class");//switch with in  true false

var tag = document.querySelector("p");

tag.textContent = "balababal";//alter the textContent

var tag = document.getElementsByTagName("p")[0]
tag.textContent = "xxxx";
tag.innerHTML;
tag.innerHTML= "ddd";

document.querySelector("h1").textContent="end of this lesson!";
//textContent will not treat input as HTML 

document.body.innerHTML=("<h1>BYE</h1>"//this will change the HTML

var link = document.querySelector("a");
link.setAtrribute("herf","www.google.com");
var img = document.querySelector("img");
img.setAtrribute("src","corgi.png");

var tag=document.querySelectorAll("img");
one = tag[1]
one.setAttribute("src","https://source.unsplash.com/FO18LpXMlvk")




