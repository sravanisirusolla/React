const currentdate=new Date()
const month=currentdate.getMonth()
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(currentdate)
document.querySelector("h1").innerText=months[month]
 const day=currentdate.getDay()
 document.querySelector("p").innerText=new Date().toDateString()
const lastdate=new Date(currentdate.getFullYear(),month+1,0)
const firstdate=new Date(currentdate.getFullYear(),month,1)
console.log(firstdate,lastdate);
let emptystring=""
for(i=1;i<firstdate.getDay();i++)
{
    emptystring=emptystring+`<div class="empty"></div>`
}
for(let i=1;i<=lastdate.getDate();i++)
{
    if(i==currentdate.getDate())
    emptystring=emptystring+`<div class="today">${i}</div>`
    else
    emptystring=emptystring+`<div>${i}</div>`
}
document.querySelector(".days").innerHTML=emptystring
