const success=document.querySelector(".new");
const normal=document.querySelector(".container");
const show=document.querySelector(".button");
show.addEventListener("click",function(){
    normal.style.display="none";
    success.style.display="block";
});
document.querySelector(".butt").addEventListener("click",function(){
    normal.style.display="block";
    success.style.display="none";
})