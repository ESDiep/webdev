

function add(a, b ){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a)*Number(b);
}

function divide(a, b){
    if(Number(b) === 0)
    return "divide by 0";
    else
    return Number(a)/Number(b);
}

function operator(a,operator, b){
    if(operator === '+'){
       return add(a,b);
    }
    else if(operator === '-'){
        return subtract(a,b);
    }
    else if(operator === 'x'){
       return multiply(a,b);
    }
    else
       return divide(a,b);
}

//set up the display screen of the calculator: 1 row for entry and 1 row for result
const display = document.querySelector(".display");
const entryP = document.createElement("p");
entryP.setAttribute("id", "entry");
const resultP = document.createElement("p");
//resultP.setAttribute("class","temporary");
display.appendChild(entryP);
display.appendChild(resultP);


//button data
const button = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "x"],
    ["0", ".", "=", ""],
];

let clickInput = [];
let result = 0;
let a, b, op, displayContent;
let decimal ="";
let digit = ".";
let tempNum = "";


//console.log(button);

const btnDiv = document.querySelector(".buttonContainer");

//creating the button on the calculator
for (let row = 0; row < button.length; row++){
    const rowDiv = document.createElement("div");   
    rowDiv.setAttribute("class", "row");
    rowDiv.setAttribute("ID", row);
    btnDiv.appendChild(rowDiv);

    for(let col = 0; col < button[0].length; col++){
        if(row !== button.length -1 || col !== button[0].length -1){
            const btn = document.createElement("button");
            btn.textContent = button[row][col];
            btn.setAttribute("class", "button");
            btn.setAttribute("ID", button[row][col]);
            rowDiv.appendChild(btn);
            
            btn.addEventListener("click", (e)=>{
                
                if(e.target.textContent === "AC"){
                    result ="";
                    clickInput = [];
                    displayContent = "";
                    resultP.setAttribute("class","temporary");
                }
                else if(e.target.textContent === "+/-"){
                    if(clickInput.length === 1){
                        result = Number(clickInput.pop()) * (-1);
                        clickInput.push(result);
                    }

                }
                else if(e.target.textContent === "%"){
                    if(clickInput.length === 1){
                        result = Number(clickInput.pop())/100;
                        clickInput.push(result);
                    }

                }               
                
                else if(e.target.textContent === "/" || e.target.textContent === "x" ||
                e.target.textContent === "+" || e.target.textContent === "-" ||
                e.target.textContent === "="){
                   
                                       
                    if(tempNum !== "")
                        clickInput.push(Number(tempNum));
                    displayContent = e.target.textContent;                        
                    
                    

                    if(clickInput.length === 3){
                        b = clickInput.pop();
                        op = clickInput.pop();                        
                        a = clickInput.pop();                    
                        result = operator(a, op, b);
                        clickInput.push(result);
                        console.log(result);                     
                        
                    }
                   if(e.target.textContent !== "=")
                        clickInput.push(e.target.textContent);
                    else
                        resultP.setAttribute("class","final");   
                        
                        console.log("after pushing operator",clickInput); 
                        tempNum="";    
                    
                }

                else{
                    resultP.setAttribute("class","temporary");                 
                    tempNum += e.target.textContent;
                    displayContent = tempNum;    
  
                }     
                
              entryP.textContent = displayContent;
               resultP.textContent = result;

            });
        }

    }
}

