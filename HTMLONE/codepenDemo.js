<h1>https://codepen.io/kirkzhang49/pen/dVQJjb</h1>
<ul>
  <li>Make me a bullet point</li>
  <li>Make me another bullet point</li>
</ul>

<button>Make Me A Button Here</button>

/*body {
  background-color: #a3d5d3;
}*/
h1 {
  color: green;
}
button{
  boarder:12px solid #3495e;
  background-color: #3498db;
  color: green;
}

document.querySelector("button").addEventListener("click",function(){
  document.body.style.background = randColor();
})

function randColor()
{
  return '#' + (function co(lor)
                {
    return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c',
    'd','e','f'][Math.floor(Math.random()*16)])
    &&(lor.length ==6) ? lor : co(lor);
  })('')
  }
