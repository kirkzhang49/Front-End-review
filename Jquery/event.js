$("h1").click(function()
	{
		alert("h1 clicked");
	}
	);
$("button").click(function()
{
	alert("button clicked")
})

$("button").click(function()
{
	$(this).css("background","pink")
});

$("button").click(function()
{
	var text = $(this).text();
	console.log("You clicked"+text);
});
//$('input[type="text"]') 

//$("button").keypress();//for in between down and up 

$("input").keypress(function(event)
{
	if(event.which==13)//which is the character code
	{
		alert("You Hit enter!");
	}
});
$("h1").on("click",function()//on can do for future element while click event don't
{
	$("h1").css("color","purple");
});//wrong
$("h1").on("click",function()
{
	$(this).css("color","purple");
});

$("input").on("keypress",function()
{
	console.log("keypress");
})

$("button").on("mouseenter",function()
{
	$(this).css("font-weight","bold");
})

$("button").on("mouseleave",function()
{
	$(this).css("font-weight","normal");
})





