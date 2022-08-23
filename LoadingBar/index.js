function update()
{
    counterele.innerText=i+"%"
    ele.style.width=i+"%"
    i=i+1
    if(i<101)
    {
        setTimeout(update,20)
    }
    
}
let i=0
const ele=document.querySelector(".frontbar")
const counterele=document.querySelector(".counter")
update()

