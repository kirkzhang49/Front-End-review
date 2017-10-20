var button = document.querySelector("button");

button.addEventListener("click",function(){
	console.log("SOMEONE CLICKED THE BUTTON");
});
//it is callback function the function only run one click happened 
var h1 = document.querySelector("h1");
h1.addEventListener("click",function (){
	alert("h1 was clicked!");
	h1.style.color="red";
})
document.querySelector("ul").addEventListener("click",function()
{
	console.log("You Clicked the ul!");
});
var div =document.querySelectorAll("div");
for (var i=0;i<div.length;i++)
{
	div[i].addEventListener("click",function(){
		this.style.background="orange";
		console.log("hi");
	})
}

var button = document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click",changetext);
function changetext(){
	paragraph.textContent="xxx";
}