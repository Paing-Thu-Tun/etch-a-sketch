const container = document.querySelector("#container");
function createGrid(numOfGrids) {
    const size = 960 / numOfGrids;
    console.log(size);
    for (let i = 0; i < numOfGrids * numOfGrids; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.height = `${size}px`;
        newDiv.style.width = `${size}px`;
        newDiv.classList.add("square");
        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = randomRgb();
        }, {once: true})
        container.appendChild(newDiv);
    }
}

function deleteGrid() {
    const grids = Array.from(container.children);
    console.log(grids.length);
    for(const grid of grids) {
        container.removeChild(grid);
    }
}

createGrid(16);

const gridNumBtn = document.querySelector("#gridNumBtn");
gridNumBtn.addEventListener("click", () => {
    const numOfGrids = +prompt("How many grids?");
    deleteGrid();
    createGrid(numOfGrids);
})

// Generate random number between 0 to 255 (inclusive)
function randomNum() {
    return Math.floor(Math.random() * 255 + 1);
}

function randomRgb() {
    const randomR = randomNum();
    const randomB = randomNum();
    const randomC = randomNum();
    return `rgb(${randomR}, ${randomB}, ${randomC})`;
}