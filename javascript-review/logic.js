// == // care about value 
// ===//for value and type

// // var x ==99;
// // x=="99" //true
// // x==="99" //false

// // null==undefined //true
// // nul ===undefined //false
// // NaN == NaN //false 
// // true == "1" //true
// // 0 ==false //true
// var secrete = 4;
// var Guess = Number(prompt("Guess a number"));

// if (Guess == secrete)
// {
// 	alert("You right")
// }
// else if (Guess>secrete)
// {
// 	alert("Too High");
// }
// else alert("too low");

// var count =1;
// while (count<6)
// {
// 	console.log("count is: " + count);
// 	count ++;
// }

var ans = prompt("Are we there yet?");

while(ans.indexOf("yes")==-1&&ans.indexOf("yeah")==-1)
{
	var ans = prompt("Are we there yet?")
}

alert("YAY,WE MADE IT!");

var str = "hello";
for (var i =0;i<str.length;i++)
{
	console.log(str[i]);
}
