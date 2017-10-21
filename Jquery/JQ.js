$("img")

$("li a")

$("h1").css("color","red");

document.querySelector("h1").style.color = "orange";


$("body")


var styles ={
	color:"red",
	background: "pink",
	border: "2px solid purple"
}

$("h1").css(styles);

$("li").css("color","blue");//no loop required
var lis = document.querySelectorAll("li")
for (var i=0;i<lis;i++)
{
	lis[i].style.color = "green";
}

$("a").css("color","blue");

$("li").css(
{
	fontSize:"10px",
	border:"3px dashed purple",
	background:"rgba(89, 45, 20, 0.5)"
});

