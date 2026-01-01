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
            newDiv.style.backgroundColor = "black";
        })
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