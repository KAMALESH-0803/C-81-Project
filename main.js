canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth = 4;
ctx.rect(150, 150, 440, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth = 6;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth = 6;
ctx.arc(340, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth = 6;
ctx.arc(430, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 6;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth = 6;
ctx.arc(390, 250, 40, 0, 2*Math.PI);
ctx.stroke();