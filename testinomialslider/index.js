const users=[
    {

        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21CGO6zhllpt3ZnqSLVdBU70NGOGUeEh-bXikTT7y5NZhyDKyg5vWDxNFlV1sQBzuQqA&usqp=CAU",
        content:"Great job, I will definitely be ordering again! I just can't get enough of applie. I want to get a T-Shirt with applie on it so I can show it off to everyone. It's exactly what I've been looking for.",
        username:"Dulcea H."
    },
    {

        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbO4yV8We_OIs0skH-gCVZJ574CHFHG-nSbqB4QXYmvxlFHOZuquCWLgSDkjSP1q1f_0&usqp=CAUps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKSfkLRZyd8OJ-s31T98fNF6ni9BQDvGJY2AESN2i-Omu7APrhfsAJ6gkk5ZzJpxZ0ok&usqp=CAUed-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1sAbGVXL6wGXdRO1ZR0oqtkkllkyueNg9oAkc_jtIA8UsKUk80k85Bl52dvgKzNLb-Ds&usqp=CAU",
        content:" I will definitely be ordering again! I just can't get enough of applie. I want to get a T-Shirt with applie on it so I can show it off to everyone. It's exactly what I've been looking for.",
        username:"Sylvester F."
    },
    {

        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKmTh4Bgm9Ui47-svtOEEPHZXE-METhVxV39qzSywHqCqkVsXGcvOWDnuGdPWV711SmU&usqp=CAU",
        content:" Applie did exactly what you said it does. more and more each day because it makes my life a lot easier. Applie did exactly what you said it does.'t get enough of applie. I want to get a T-Shirt with applie on it so I can show it off to everyone. It's exactly what I've been looking for.",
        username:"Zollie E."
    }
]
const imgele=document.querySelector("img")
const contele=document.querySelector(".content")
const userele=document.querySelector(".username")
function update()
{
    const user=users[Math.floor(Math.random()*users.length)]
    console.log(user);
    imgele.src=user.img
    contele.innerText=user.content
    userele.innerText="- "+user.username
    i=i+1
    if(i==users.length)
         i=0
    setTimeout(update,1000)
    
}
let i=0
update()