const wheel = document.querySelector(".wheel")
const wheelWraper = document.querySelector(".wheel-wrapper")
const button = document.querySelector("button")


const resultsArr = [ 60, 500, 30, 50, 60, 55, 40, 90, 25, 30, 90, 300, 50, 40, 25, 80, 35, 45, 70, 30]


function randomNumber() {
    let random;
   // Generate a random multiple of 18 (360 deg / 20 fields = 18deg)
        random = Math.floor(Math.random() * 90) * 18;
    
    
    return random;
}
let alreadySpinned = false
let indexCounter = 0;
let degrees;


let rotationCounter = 0;
button.addEventListener("click", ()=>{


    degrees = randomNumber();
    let seconds = degrees / 100
   
    console.log(degrees, seconds)
   
        
        wheelWraper.style.transform = `rotate(-${degrees + rotationCounter}deg) `;
        wheelWraper.style.transition = `${seconds}s ease-in-out`
        wheel.style.transform = `rotate(${degrees + rotationCounter}deg)`;
        wheel.style.transition = `${seconds}s ease-in-out`
        rotationCounter += degrees;

        
        console.log(`you won ${findTheValue(degrees)}`)
    
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
      else if (indexCounter > 19 ) {
        index = indexCounter - 20
      }
     
      

      console.log(indexCounter)
        return newArr[index];
    
}

wheel.addEventListener("transitionend", () => {

    
    alert(`you won ${resultsArr[index]}`);
    
    // Display the result message
  
  });


