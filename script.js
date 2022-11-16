var drone = document.getElementById("drone");
document.onmousemove = function(e){
    drone.style.top = (e.pageY -250) + "px";
    drone.style.left = (e.pageX - 100) + "px";
}
