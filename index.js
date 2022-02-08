var preloader= document.getElementById('preloader');
window.addEventListener("load",function(){
    preloader.style.display="none";
})
var about= document.getElementById('about');
window.addEventListener("click",function(){
    about.style.display="block";
})
var service= document.getElementById('services');
window.addEventListener("click",function(){
    service.style.display="block";
})
var blog= document.getElementById('blog');
window.addEventListener("click",function(){
    blog.style.display="block";
})
var contact= document.getElementById('contact');
window.addEventListener("click",function(){
    contact.style.display="block";
})
// line using cavas
var c = document.getElementById("myEdu");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 400);
ctx.stroke();

var c = document.getElementById("myExp");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 400);
ctx.stroke();