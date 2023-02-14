
var random1=Math.random()
random1=random1*6;
random1= Math.floor(random1+1)


var randoming= "dice"+random1+".png";
var randomsrc= "./images/"+randoming;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomsrc)



var random2=Math.random()
random2=random2*6;
random2= Math.floor(random2+1)


var randoming= "dice"+random2+".png";
var randomsrc= "./images/"+randoming;


var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomsrc)

if(random1>random2)
{
document.querySelector("h1").innerHTML="Player 1 Wins🚩"
}else
{
	if(random1<random2){
		document.querySelector("h1").innerHTML="Player 2 Wins🚩"
	}else
	{	if(random1==random2)
		{
			document.querySelector("h1").innerHTML="Draw🏁"
	}
		
	}
	
}