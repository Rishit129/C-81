canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
linewidth=2;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
     circle(mouse_x,mouse_y);
     
}
function circle(){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=linewidth;
ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
ctx.stroke();

}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

 