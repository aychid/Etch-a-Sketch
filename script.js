//TODO 

// Design a grid of square div's  16 x 16 (256 total)
    // Make 16 div's with js 
    // Style the div's with css 
    // Individual squares are empty


// Option 2: Flexbox 
const divContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++){ // Outer loop initializes column 0, 1, 2, etc.. 
    const divCol = document.createElement("div");
    divCol.classList.add("grid-col");
    divContainer.appendChild(divCol);

    for( let j = 0; j < 16; j++){ // Inner loop initializes the items in the column
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        divCol.appendChild(newDiv);
    }
}



