// function squre(x)
// {
// 	return x*x;
// }
// var xx=squre(4);

// function capitalize(str)//declaration
// {
// 	if(typeof str ==="number") //check for object type 
// 	{
// 		return "that's not a string!";
// 	}
// 	return str.charAt(0).toUpperCase()+str.slice(1);
// }

// var city = "pairs";
// var capital = capitalize(city);

// var num = 37;
// var capital = capitalize(num);// that's not a string

// var = capitalize = function(str)//expreesion
// {
// 		if(typeof str ==="number") //check for object type 
// 	{
// 		return "that's not a string!";
// 	}
// 	return str.charAt(0).toUpperCase()+str.slice(1);
// }
// capitalize()//will call the function
// capitalize =55;
// capitalize()//not longer function

// var factor = function factorial(x)
// {
// 	if (x==0) return 1;
// 	else 
// 		return x*factorial(x-1);
// }

function isEven(num)
{
	if (num%2===0)
		return true;
	else return false;
}


function factorial(num)
{
	var result=1;
	for (var i=1;i<=num;i++) result =result*i;
		return result;
}

function kebabtoSnake(str)
{
	return str.replace(/-/g,"_");
}

var x=5;
function change()
{
	var x =6;
	console.log(x);//6
}
x =5
//outside still 5 

//inside access out side 
//but inside won't effect outside
//scope not share between functions


//*****HIGH ORDER FUNCTION

function sing()
{
	console.long("wawalalala");
	console.long("wawalalala!!cccaaa");
}
setInterval(sing,1000)//call sing every 1000ms

setInterval(function(){
	console.log("I'm an anonymous function!");
	console.log("This is AWESOME");
},1000)

var color =["red","orange","yellow"];
color.push("green");
//"red","orange","yellow","green"]
var x = color.pop()
x //green
//JS Stack first in last out

var color =["red","orange","yellow"];
color.unshift("green");//queue.add
color.shift();//queue.remove   first in first out 
var friends = ["charlie","Liz","Daivd","matt","Liz"];
friends.indexOf("Daivd");//2
friend.indexOf("Liz");//1,not 4
friend.indexOf("dd");//-1 not found
var friuits = ['banana','orange','lemon','apple','mango'];
var citrus = friuits.slice(1,3);//[orange,lemon]
//(start,end)  start include end not include 
var all = friuits.slice();// copy all  



