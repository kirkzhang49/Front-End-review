// =========
// VERSION 1
// =========
function myForEach(arr, func){
	for (var i = 0; i < arr.length; i++) {
		//call fuc every times
		func(arr[i]);
	}//will call this func first
}

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
myForEach(colors, function(color){//second time it will use function which output the argument
	//color is the arr[i] pass to the fuc 
	console.log(color);
});

// =========
// VERSION 2 
// =========
Array.prototype.myForEach = function(func){//Array will refer to colors which call this function 
  for(var i = 0; i < this.length; i++) {//this.length means Array.length
   func(this[i]);//func(Array[i])
  }
};//it is not execute before ()

var colors = ["red", "orange", "yellow", "green", "blue", "PURPLE"];
colors.myForEach(function(color){//second call use the func output it's argument
	console.log(color);//output func's argument
});