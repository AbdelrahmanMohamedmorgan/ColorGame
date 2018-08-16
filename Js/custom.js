var numbersOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
colorDisplay.textContent =pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    SetupModeButtons();
    SetupSquares();
    reset();
}
function SetupSquares(){
    for (var i = 0; i < squares.length; i++) {
        //add click listenert to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.background;
            ;
            //compare color to picked color
            if (clickedColor === pickedColor) {

                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again";
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function SetupModeButtons(){
    //mode button listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            console.log(this)
            this.textContent === "Easy" ? numbersOfSquares = 3 : numbersOfSquares = 6;
            reset();

        });
    }
}

    
function reset(){
        //generate all new colors
        colors = generateRandomColors(numbersOfSquares);
        //pick new random color
        pickedColor = pickColor();
        //change color display to match picked color
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
        messageDisplay.textContent = "";

        // change colors of squares
        for (var i = 0; i < squares.length; i++) {
            if(colors[i]){
                squares[i].style.display="block";
                squares[i].style.background=colors[i];

            }else{
                squares[i].style.display="none";
            }
            squares[i].style.background = colors[i];
        }
        h1.style.background = "steelblue";
        

    }
    

resetButton.addEventListener("click",function () {
   reset();
});

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background=color;
    }
    
}
function pickColor() {
    //generate random numbers from  the Array
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
    
}
function generateRandomColors(number){
    //make an array 
    var arr =[];
    // ad number random colors to array
    for(var i =0; i<number;i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor(){
    // pick RGB 
    var r= Math.floor(Math.random()*256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+", " + g + ", " + b + ")";
}