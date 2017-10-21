// //check off specific Todos By Clicking
// $("li").click(function(){
// 	//if li gray trun black else go gray
// 	if($(this).css("color")==="rgb(128, 128, 128)")
// 		{
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 	});
// 		}
// 	else{
// 	$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});
// 	}
// });
$("ul").on("click","li",function()//li not work here so make ul all ul have the function
{//on for new li will also have function second argument means li is ouly this listener
	$(this).toggleClass("completed");
});//on can apply to future child  active
$("ul").on("click","span",function(event){//this is work for second argument and action to second
//but the button sensitive to all
	$(this).parent().fadeOut(400,function(){
		$(this).remove();//this is this of parent
	});
		event.stopPropagation()
})
$("input[type='text']").keypress(function(event){
	if (event.which===13)//.which is the char enter
	{
		var todoText = $(this).val();//get the input
		$(this).val("");//set to blank input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
// $("ul").click(function(event){
// 	event.stopPropagation()
// 	$(this).remove();
// }) $("input[type='text']").keypress(function(event){