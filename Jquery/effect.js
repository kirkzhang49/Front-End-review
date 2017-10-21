

// $("button").on("click",function()
// {
// 	$('div').fadeIn(1000,function()//remove will wait when fadeOut finished
// 		{
// 		//$(this).remove();
// 		});

// })
// $("button").on("click",function()
// {
// 	$('div').fadeToggle(500,function()//remove will wait when fadeOut finished
// 		{
// 		//$(this).remove();
// 		});

// })
$("button").on("click",function()//slideDown,slideUp
{
	$('div').slideToggle(500,function()//remove will wait when fadeOut finished
		{
		$(this).remove();
		// console.log("slide is done");
		});

})

