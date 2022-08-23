let parent=document.getElementById("parent");
parent.addEventListener("click",()=>{
    alert("Hi parent");
})
let child=document.getElementById("child");
child.addEventListener("click",(e)=>{
    alert("Hi child");
  
})
let event1=document.getElementById("event1");
event1.addEventListener("click",(e)=>{
    alert("Hi event1");
    e.stopPropagation()
})
//...............................delegation.............................
let delegate=document.getElementById("delegate")
delegate.addEventListener("click",(e)=>{
    alert("Hi"+e.target.tagName)

})