//TODO 

// Design a grid of square div's  16 x 16 (256 total)
    // Make 16 div's with js 
    // Style the div's with css 
    // Individual squares are empty


let squareNumber = 20;

const smallBtn = document.querySelector("#small-grid");
smallBtn.addEventListener("click", () => {
    squareNumber = 20;
})

const divContainer = document.querySelector(".grid-container");

for (let i = 0; i < squareNumber; i++){ // Outer loop initializes column 0, 1, 2, etc.. 
    const divCol = document.createElement("div");
    divCol.classList.add("grid-col");
    divContainer.appendChild(divCol);

    for( let j = 0; j < squareNumber; j++){ // Inner loop initializes the items in the column
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-item");
        divCol.appendChild(newDiv);
    }
}

const items = document.querySelectorAll(".grid-item");
items.forEach((item) => item.addEventListener("mouseover", () => {
    // e.target.style.backgroundColor = "orange"; // Method 1, using css styling
    item.classList.add("filled"); // Method 2, using classes
}));


const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => items.forEach((item) => item.classList.remove("filled")));



