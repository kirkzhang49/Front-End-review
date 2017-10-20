var movies = [{
	title:"In Brges",
	hasWatched:true,
	rating:5
},
{
	title:"Frozen",
	hasWatched:false,
	rating:4.5,
}
]

movies.forEach(function(movie)
{
	var result ="You have ";
	if (movie.hasWatched==true)
	{
		result +="watched ";
	}
	else result+="not Seen ";
	result +=movie.title+" - " + movie.rating+" starts";
	console.log(result);
});
function buildString(movie)
{
		var result ="You have ";
	if (movie.hasWatched==true)
	{
		result +="watched ";
	}
	else result+="not Seen ";
	result +=movie.title+" - " + movie.rating+" starts";
	console.log(result);
}

movies.forEach(function(movie)
{
	console.log(buildString(movie));
})


var dog ={
	name:"wawa",
	speak:function()
	{
		return this.name;
	}
}

var cat ={
	name:"walo",
	speak:function()
	{
		return this.name;
	} 
}

var comment ={};
comment.data =["kirk","zhang","www"];
comment.print = function()
{
	this.data.forEach(funcion(name){
			console.log(name);
		});
	}

console.dir(document);//use the check ducument objects online
//DOM 
