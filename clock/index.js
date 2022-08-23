const hourele=document.querySelector(".hour")
const minuteele=document.querySelector(".minute")
const secondele=document.querySelector(".second")
function updateclock()
{
    const currentdate=new Date()
    const hour=currentdate.getHours()
    const minute=currentdate.getMinutes()
    const second=currentdate.getSeconds()
    //console.log(hour,second,minute);
    const hourdeg=(hour/12)*360
    hourele.style.transform=`rotate(${hourdeg}deg)`
    const minutedeg=(minute/60)*360
    minuteele.style.transform=`rotate(${minutedeg}deg)`
    const seconddeg=(second/60)*360
    secondele.style.transform=`rotate(${seconddeg}deg)`

}
setInterval(updateclock,1000)