const wheel = document.querySelector(".wheel")
const wheelWraper = document.querySelector(".wheel-wrapper")
const spinWheel = document.querySelector(".spin-wheel")
const startGame = document.querySelector(".start-game");
const endGame = document.querySelector(".end-game")


startGame.addEventListener("click", ()=> {
    startGame.classList.toggle("d-none");
    spinWheel.classList.toggle("d-none");
    endGame.classList.toggle("d-none");
})


const resultsArr = [ 60, 500, 30, 50, 60, 55, 40, 90, 25, 30, 90, 300, 50, 40, 25, 80, 35, 45, 70, 30]


function randomNumber() {
    let random;
   // Generate a random multiple of 18 (360 deg / 20 fields = 18deg) between 360 and 2700
        random = 900 + Math.floor(Math.random() * 160) * 18;
    
    
    return random;
}
isSpinning = false
let indexCounter = 0;
let degrees;
let totalScore = 0;
let gameActive = true
let clickCounter= 0


let rotationCounter = 0;
spinWheel.addEventListener("click", ()=>{
    gameActive = true
    
    

    degrees = randomNumber();
    let seconds = degrees / 150
   
    
    
    if(clickCounter === 0){
      wheelWraper.style.transform = `rotate(-${degrees + rotationCounter}deg) `;
      wheelWraper.style.transition = `${seconds}s ease-in-out`
      wheel.style.transform = `rotate(${degrees + rotationCounter}deg)`;
      wheel.style.transition = `${seconds}s ease-in-out`
      rotationCounter += degrees;
      clickCounter++
    }
    else if (clickCounter > 0) {
      alert("Hey! Be patient! Try again once the wheel has stopped")
    }
   
    console.log(degrees, seconds)
 
    
   
    
    
    isSpinning = true
    

   
 
        
       
        

        
        
        console.log(`Congratulations! You won ${findTheValue(degrees)} $`)
    
})

let index; 


function findTheValue(deg){
    index = Math.floor(((deg) / 18));

    console.log(`index = ${index}`)

   
    
      indexCounter += index  

      index = indexCounter;
      
    
      if(indexCounter > 39){
        index = (indexCounter % 20) 
        console.log("test")
      }
      else if (indexCounter > 19) {
        index = indexCounter - 20
      }
     
      
      totalScore += resultsArr[index];
      console.log(`total score = ${totalScore}$`)
      console.log(indexCounter)
        return resultsArr[index];
    
}

wheel.addEventListener("transitionend", () => {
    
    gameActive = false
    
    alert(`Congratulations! you won ${resultsArr[index]}$`);
    
    // Display the result message
    
  });


  endGame.addEventListener("click", ()=>{
    
    if(rotationCounter === 0){
        alert("Try to spin the wheel at least once!")
    
    }
    else if (!gameActive) {
        spinWheel.classList.toggle("d-none")
        endGame.classList.toggle("d-none")
        startGame.classList.toggle("d-none")
    
        alert(`Good Job! You take home today ${totalScore} $ :)`)
    }
    else {
        alert("You can't end the game while the wheel is running!")
    }
    
  })


