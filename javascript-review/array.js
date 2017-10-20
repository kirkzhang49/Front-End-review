var list =[];
var input = prompt("what you want to do");
while (input!="quit")
{
	if (input==="new")
	{
		addNew();
	}
	else if (input==="list")
	{
		listTodo();
	}
	else if (input==="delete")
	{
		DeleteIt();
		
	}

	input = prompt("what you want to do");
}
console.log("Yes,you done");
function DeleteIt()
{
		var index=prompt("Which you want to delete");
		list.splice(index,1);//delete index once
		console.log("Deleted");
}
function addNew()
{
		var newTodo = prompt("Enter new todo");
		list.push(newTodo);
		console.log("add one");
}
function listTodo()
{
			console.log("*********");
		list.forEach(function(todo,i)
		{
			console.log(i+": "+todo);
		});
		console.log("*********");
}
function Printreverse(list)
{
	for (var i=list.length;i>=0;i--)
	{
		console.log(list[i]);
	}
}
function isUniform(list)//can't use for each the return only return the first function
{
	var check = list[0];
	for(var i=1;i<list.length;i++)
	{
		if (check!=list[i]) return false;
		check = list[i];
	}
	return true;
}
function sumArray(list)
{
	var sum =0;
	list.forEach(function(tmp)
	{
		sum+=tmp;
	});
	return sum;
}
function max(list)
{
	var max = list[0];
	for (var i=1;i<list.length;i++)
	{
		if (list[i]>max)
		{
			max =list[i];
			max =list[i];
		}
	}
	return max;	
}
// Note about Todo List Code Along Part 2
// Section 11, Lecture 129
// Hello Everyone,

// Students have been asking about how the .forEach function works so I'm making this note to provide further information on the topic.

// .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3 arguments. This is how .forEach was designed.

// The arguments are in a specific order:
// - The first one represents each element in the array (per loop iteration) that .forEach was called on.
// - The second represents the index of said element.
// - The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

// You have a couple options when calling .forEach on an array:

// You can pass in an anonymous function:

// [1,2,3].forEach(function(el, i, arr) {
//   console.log(el, i, arr);
// });
// Or you can pass in a pre-written, named function.

// function logNums(el, i, arr) {
//   console.log(el, i, arr);
// }
 
// [1,2,3].forEach(logNums);
// Notice how in the second example we don't invoke logNums when passing it into .forEach? We simply pass in the function name. We don't need to invoke the logNums function, .forEach does that for us. In fact, it invokes the function multiple times, once for every element inside of the array.

// I hope that helped clear some things up, please post a question in the Q&A if you're unsure of anything that I've shared above.

// cheers,
// Ian