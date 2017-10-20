var p1button = document.querySelector('#p1');
var p2button = document.getElementById('p2');
var numinput = document.querySelector("input");
var winnerDis = document.querySelector("p span");
var count1 =0;
var count2 =0;
var p1 = document.querySelector('#p1dis');
var p2 = document.querySelector('#p2dis');
var reset =document.querySelector("#bn");
var gameover=false;
var winningScore=5;
p1button.addEventListener("click",function()
{
	if (!gameover)
	{
	count1++;
	p1.textContent=count1;
}
if (count1===winningScore)
{ 
	gameover=true;
	p1.classList.add("winner");
}
});

p2button.addEventListener("click",function()
{
	if (!gameover)
	{
	count2++;
	p2.textContent=count2;
}
if (count2===winningScore) 
	{gameover=true;
		p2.classList.add("winner");
	}
});

function resetit()
{
	count1=0;
	count2=0;
	gameover=false;
	p1.textContent=0;
	p2.textContent=0;
	p1.classList.remove("winner");
	p2.classList.remove("winner");
}

reset.addEventListener("click",function()
{
	resetit();
});

numinput.addEventListener("change",function()
{
	winnerDis.textContent=this.value;
	winningScore=Number(this.value);
	resetit();
});


