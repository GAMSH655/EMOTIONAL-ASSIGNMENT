const  container =document.querySelector(".lovecontainer");
const showME = document.querySelector("#show");
const loveButton = document.querySelector("#btn");
const emotionalImg = document.querySelector("#img")
const authName = document.querySelector(".authNAme")
console.log(container , showME , loveButton,  authName)

const emotionalArray = [
    {
        imageUrl:"./assets/love.avif",
          loveText:"dont let whats someone else has amaze you that you pray for his downfall, you shoul disturb your mind on getting yours and never stop praying for him to go down because you are down try to drag on up down too ... why dont we unite and tahe higher steps together",
          AuthorName: "Ajibola mustopah"
    },
    {
        imageUrl:"./assets/respect.avif",
          loveText:" It takes a lot of courage to push through hard times.Never give up on yourself.Good things are coming your way.The pain of today is the joy of tomorrow Believe in Yourself📌as hard times will come and go.",
           AuthorName: "Ajibola mustopah"
    },
    {
        imageUrl:"./assets/hug.avif",
          loveText:"Have you ever taken your time to sit and appreciate yourself on the little you have achieved,Appreciate and Say a Big thank you to yourself,When last did you visit the prison,graveyard and hospital 🤔Look into the mirror and give yourself a befitting smile 😊You are a Rare Gem 💎",
           AuthorName: "Ajibola mustopah"
    },
    {
        imageUrl:"./assets/app.jpg",
          loveText:"Just in case no one reminds you of this today...let me do Don’t give up and Don’t think that it’s always your fault, it’s not.**You have done your best, there’s nothing more you could have done.*Be proud of yourself, you are strong,beautiful and a shining star...*",
           AuthorName: "Ajibola mustopah"
    },
    {
        imageUrl:"./assets/pray.avif",
          loveText:"What God gives us,he gave you too,what he Gave them he gave you too,If you don’t see it work towards it and if you don’t get it keep trying because the success is near.Feel it and keep  ,It’s your time to  shine ",
           AuthorName: "Ajibola mustopah"
    },
]
 loveButton.addEventListener ('click' , function() {
     const randomImg = Math.floor(Math.random()*emotionalArray.length)
     showME.innerHTML = emotionalArray[randomImg].loveText
     emotionalImg.src = emotionalArray[randomImg].imageUrl
     authName.innerHTML = emotionalArray[randomImg].AuthorName
     
     for (let i=0 ; i < emotionalArray.length ; i++){
       emotionalImg.style.animationName ='imgs'
       emotionalImg.style.animationDuration ='5s'
       emotionalImg.style.animationDirection ='alternate'


     }

 })