
function add(a, b ){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b !==0)
        return a/b;
    else
        return "Can't divide by 0";
}

function operator(operator, a, b){
    if(operator === '+'){
        add(a,b);
    }
    else if(operator === '-'){
        subtract(a,b);
    }
    else if(operator === 'x'){
        multiply(a,b);
    }
    else
        divide(a,b);
}

let button = [
    ["AC", "C", "%", "/"],
    ["7", "8", "9", "+"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "x"],
    ["0", ".", "=", ""],
];

console.log(button);

const btnDiv = document.querySelector(".button");

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
            
            btn.addEventListener(display);
        }

    }
}