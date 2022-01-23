// Global initiation function on load
window.addEventListener("load", startup, false)

// Initialize colour selector, create the grid, background selector and reset for when opening the website 
function startup(){
    colorSelector();
    createGrid();
    changeBackground();
    reset();
    eraserButtonActivator();    
}

// Select the whole container of the grid
const divContainer = document.querySelector(".grid-container"); // Create div container for grid

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

// Function to select the color using input type=color 
function colorSelector(){
    const defaultColor = "#000000";
    var colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("change", null, false);
    colorWell.select();
}

// Delete the grid by selecting all div's made with createGrid and removing them 
function deleteGrid(){
    const gridCol = document.querySelectorAll(".grid-col");
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.remove());
    gridCol.forEach((col) => col.remove());
}

// Make the grid items background black on mouseover by adding the class filled or using css styling
function changeBackground(){
    divContainer.addEventListener("mouseover", (e) => {
        if(e.target && e.target.className === "grid-item") {
            e.target.style.backgroundColor = colorWell.value;
        }
    })
}

// Makes background white of grid-item
function backgroundEraser(){
    divContainer.addEventListener("mouseover", (e) => {
        if(e.target && e.target.className === "grid-item") {
            e.target.style.backgroundColor = "white"; 
        }
    })
}

// Activates the eraser button
function eraserButtonActivator(){
    const eraserBtn = document.querySelector("#eraser-btn");
    eraserBtn.addEventListener("click", backgroundEraser);
}

// Button to make the background color of the items in the grid white again by removing class filled
function reset(){
    const resetBtn = document.querySelector("#reset-btn");
    const items = document.querySelectorAll(".grid-item");
    // resetBtn.addEventListener("click", () => items.forEach((item) => item.classList.remove("filled"))); method 2
    resetBtn.addEventListener("click", () => items.forEach((item) => item.style.backgroundColor ="white"));
}

// Button which deletes grid and makes a new one with 20x20 grid
const smallBtn = document.querySelector(".small-grid");
smallBtn.addEventListener("click", () => {
    let gridSize = 20;
    deleteGrid();
    createGrid(gridSize);
    reset();
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.style.height = divContainer.clientHeight / gridSize + "px" ;
        item.style.width = "24px";
    });
});

// Button which deletes grid and makes a new one with 30x30 grid, padding is changed to compensate for the increasing amount of grid-items
const medBtn = document.querySelector(".med-grid");
medBtn.addEventListener("click", () => {
    deleteGrid();
    createGrid(30);
    reset();
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => {
        item.style.height = "16px";
        item.style.width = "16px";
    });
});

// Button which deletes grid and makes a new one with 40x40 grid, padding is changed to compensate for the increasing amount of grid-items
const largeBtn = document.querySelector(".large-grid");
largeBtn.addEventListener("click", () => {
    deleteGrid();
    createGrid(40);
    reset();    
    document.querySelectorAll(".grid-item").forEach((item) => {
        item.style.height = "12px";
        item.style.width = "12px";
    });
});

// When pressing the button for a new grid, I want select all items and turn their background color white through e.target.style.backgroundColor = "white"
// Is it possible to do this through event delegation/bubbling/capturing?
// Since there is no event taking place except the button being pressed

