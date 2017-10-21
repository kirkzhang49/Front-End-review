$("div").css("background","purple");
$("div.highligh").css("width","200px");
$("#third").css("border","2px solid orange");
$("div:first-of-type").css("color","pink");//can use first along

 $("h1").text();
 $("ul").text();
 $("li").text("rusty,cc,kkk");

 $("ul").html();
 $("ul").html("<li>I hacked your UL!</li><li>aaa</li>");

$("li").html("<a href='google.com'> CLICK ME TO GOOGLE</a>");

$("img").css("width","500px");

$("img").attr("src","https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg");
$("input").attr("type","color");

$("img:first").attr("src","https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg");
$("img").last().attr("src","https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg");
$("img").attr("src","https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg");

$("input").val();//all element has val attribute

$("input").val("kirk");

$("input").val("");//use for clear value 

$("select").val();
$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").toggleClass("correct");
$("li:first").toggleClass("done");
//click() keypress() on()