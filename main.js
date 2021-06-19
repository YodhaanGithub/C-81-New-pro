canvas = document.getElementById("firstcavas")


ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth=10;
ctx.arc(300, 300, 40, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth= 10;
ctx.arc(350, 350, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth=10;
ctx.arc(400, 300, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth= 10;
ctx.arc(450, 350, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth=10;
ctx.arc(500, 300, 40, 0, 2*Math.PI);
ctx.stroke();

