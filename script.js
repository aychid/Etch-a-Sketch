//TODO 

// Design a grid of square div's  16 x 16 (256 total)
    // Make 16 div's with js 
    // Style the div's with css 
    // Individual squares are empty


// Option 1: float and clear
const divContainer = document.querySelector(".grid-container");


for (let i = 0; i < 16; i++){ // Defines the amount of rows 
    const divRow = document.createElement("div");
    divRow.classList.add("grid-row");
    divContainer.appendChild(divRow);

    for( let j = 0; j < 16; j++){ // Defines the items in the grid
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        divRow.appendChild(newDiv);
    }
}