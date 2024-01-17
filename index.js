const  container =document.querySelector(".lovecontainer");
const showME = document.querySelector("#show");
const loveButton = document.querySelector("#btn");
const emotionalImg = document.querySelector("#img")

console.log(container , showME , loveButton)

const emotionalArray = [
    {
        imageUrl:"./assets/love.avif",
          loveText:"love"
    },
    {
        imageUrl:"./assets/respect.avif",
          loveText:"respect"
    },
    {
        imageUrl:"./assets/hug.avif",
          loveText:"loyalty"
    }
]
 loveButton.addEventListener ('click' , function() {
     const randomImg = Math.floor(Math.random()*emotionalArray.length)
     showME.innerHTML = emotionalArray[randomImg].loveText
     emotionalImg.src = emotionalArray[randomImg].imageUrl
     
     for (let i=0 ; i < emotionalArray.length ; i++){
       emotionalImg.style.animationName ='imgs'
       emotionalImg.style.animationDuration ='5s'
       emotionalImg.style.animationDirection ='alternate'


     }

 })