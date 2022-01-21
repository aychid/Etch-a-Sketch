const divContainer = document.querySelector(".grid-container");

// Creating the grid with default 20x20 squares 
function createGrid(squareNumber = 20) {
    for(let i = 0; i < squareNumber; i++){ // Outer loop initializes column 0, 1, 2, etc.. 
        const divCol = document.createElement("div");
        divCol.classList.add("grid-col");
        divContainer.appendChild(divCol);

        for(let j = 0; j < squareNumber; j++){ // Inner loop initializes the items in the column
            const newDiv = document.createElement("div");
            newDiv.classList.add("grid-item");
            divCol.appendChild(newDiv);
        }
    }    
}

// Initialize grid toggle and reset for when opening the website 
createGrid();
changeBackground();
reset();

// Delete the grid by selecting all div's made with createGrid and removing them 
function deleteGrid(){
    const gridCol = document.querySelectorAll(".grid-col");
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.remove());
    gridCol.forEach((col) => col.remove());
}

function changeBackground(){
    // Make the grid items background black on mouseover by adding the class filled
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.addEventListener("mouseover", () => {
        // e.target.style.backgroundColor = "orange"; // Method 1, using css styling
        item.classList.add("filled"); // Method 2, using classes
    }));
}

function reset(){
    // Button to make the background color of the items in the grid white again by removing class filled
    const resetBtn = document.querySelector("#reset-btn");
    const items = document.querySelectorAll(".grid-item");
    resetBtn.addEventListener("click", () => items.forEach((item) => item.classList.remove("filled")));
}

const smallBtn = document.querySelector(".small-grid");
smallBtn.addEventListener("click", () => {
    deleteGrid();
    createGrid(20);
    changeBackground();
    reset();    
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.style.padding = "12px");
    console.log(items.length)
});

const medBtn = document.querySelector(".med-grid");
medBtn.addEventListener("click", () => {
    deleteGrid();
    createGrid(30);
    changeBackground();
    reset();    
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.style.padding = "8px");
    console.log(items.length)
});

// Button to delete old grid, initialize a new one of 40x40 items. 
// To compensate for increasing the amount of items, padding needs to shrink down (12px -> 6px), so add class big
const bigBtn = document.querySelector(".large-grid");
bigBtn.addEventListener("click", () => {
    deleteGrid();
    createGrid(40);
    changeBackground();
    reset();    
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.style.padding = "6px");
});