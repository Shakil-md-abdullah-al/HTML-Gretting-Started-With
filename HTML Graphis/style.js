var c=document.getElementById("canvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(350,250);
ctx.stroke();
var cty = c.getContext("2d");
cty.moveTo(350,0);
ctx.lineTo(0,250);
ctx.stroke();

var c=document.getElementById("canvas2");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(350,250);
ctx.stroke();
var cty = c.getContext("2d");
cty.moveTo(350,0);
ctx.lineTo(0,250);
ctx.stroke();

var ctm=c.getContext("2d");
ctm.moveTo(175,0);
ctm.lineTo(175,250);
ctm.stroke();

var ctn=c.getContext("2d");
ctn.moveTo(0,125);
ctn.lineTo(350,125);
ctn.stroke();

var c=document.getElementById("canvas3");
var ct3=c.getContext("2d");
ct3.beginPath();
ct3.arc(95,50,40,0, 2* Math.PI);
ct3.stroke();

var c=document.getElementById("canvas4");
var ct4=c.getContext("2d");
ct4.font="30px Arial";
ct4.fillText("Hello Shakil",10,50);
ct4.stroke();

var c=document.getElementById("canvas5");
var ct5=c.getContext("2d");
ct5.font="30px Arial";
ct5.strokeText("Hello Shakil", 10, 50);