//TODO 

// Design a grid of square div's  16 x 16 (256 total)
    // Make 16 div's with js 
    // Style the div's with css 
    // Individual squares are empty


// Option 1: float and clear
const divContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    divContainer.appendChild(newDiv);
}

const newDiv = document.createElement("div");
newDiv.classList.add("grid-test");
newDiv.setAttribute("style", "border-color:green");
divContainer.appendChild(newDiv);

for (let i =0; i < 16; i++){
    const newDivColumn = document.createElement("div");
    newDivColumn.classList.add("grid-col");
    divContainer.appendChild(newDivColumn);
}