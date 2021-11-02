canvas=document.getElementById("Canvastouch");
ctx=canvas.getContext("2d");
var width=screen.width;
    var new_width=screen.width-70;
    var new_height=screen.height-300;

    if(width < 992){
    document.getElementById("Canvastouch").width=new_width
    document.getElementById("Canvastouch").height=new_height

    }
var eventcount=""
canvas.addEventListener("touchmove",My_touchmove)
function My_touchmove(e)
{
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle - "red";
ctx.lineWidth - 10;
ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y)
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y)
ctx.stroke();

last_position_of_touch_x = current_position_of_touch_x;
last_position_of_touch_y = current_position_of_touch_y;
}

function touchstart(e){
   console.log("touchstart")
   last_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft
   last_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop
  }    canvas.addEventListener("touchstart",touchstart)

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = "red";
    width_of_line = 10;
    eventcount="mousedown"
}
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (eventcount == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
           ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
    canvas.addEventListener("mouseup",My_mouseup);
   function My_mouseup(e){
eventcount="mouseup"
   }
   canvas.addEventListener("mouseleave",My_mouseleave);
   function My_mouseleave(e){
eventcount="mouseleave"
   }
   