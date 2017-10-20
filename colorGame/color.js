var numberofSquares = 6;
var colors =[];
var pickedColor;
var arr = document.querySelectorAll(".square");
var ans = document.getElementById("display");
var messageShow = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBT = document.querySelector("#reset");
var modeBt = document.querySelectorAll(".mode");

init();
function init()
{
	setupMode();
	setupSquare();
	reset()
}

      function setupMode(){
	for (var i=0;i<modeBt.length;i++)
		{
		modeBt[i].addEventListener("click",function()
			{
				modeBt[0].classList.remove("selected");
				modeBt[1].classList.remove("selected");
				this.classList.add("selected");
				//figure out howmany square to show take new color pick new color update page
				this.textContent =="Easy" ? numberofSquares=3:numberofSquares=6;
				reset();
			});
		}
	}

      function setupSquare()
	{
		for (var i=0;i<arr.length;i++){
		//add initial colors to squares
		arr[i].style.backgroundColor=colors[i];

		//add click listeners to squares
		arr[i].addEventListener("click", function()
		{
			var clickColor=this.style.backgroundColor;
			if (clickColor === pickedColor)
			{
				messageShow.textContent="Correct";
				messageShow.style.bold;
				changeColor(pickedColor);
				h1.style.backgroundColor =pickedColor;
				resetBT.textContent="Try Again";
			}
			else 
				{
					this.style.backgroundColor ="#232323";
					messageShow.innerHTML="Try Again";
					messageShow.style.bold;
					}	
		});
	 }
	}

function reset(){
		//generate all new colors
	colors=generateRandoms(numberofSquares);
	 pickedColor = pickcolors();//change picked
	ans.textContent = pickedColor;//change display colors
	messageShow.textContent ="";
	resetBT.textContent="New Colors";
	for (var i=0;i<arr.length;i++)
	{
		//add initial colors to squares
		if(colors[i])//only the color has value assign
		{
			arr[i].style.display = "block";
	  		arr[i].style.backgroundColor = colors[i];
		}
	  	else//else disable display
	  		arr[i].style.display = "none";
	}
	h1.style.backgroundColor="steelblue";
}


resetBT.addEventListener("click",function()
{
	reset();
});

ans.textContent = pickedColor;


function changeColor(color)
{
	//loop all squares to match color
	for (var i=0;i<arr.length;i++)
	{
		arr[i].style.backgroundColor=color;
	}
}


function pickcolors(){
	var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}

function generateRandoms(num)
{
	//make an array
	var result =[];
	//add num random color to array
	for(var i=0;i<num;i++)
	{
		//get random color and push to array
		result.push(randomC());
	}
	//return that array
	return result;
}

function randomC()
{
	//pick 3 color from 0 - 255
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	return "rgb("+r+", " +g+", "+b+")";
}






