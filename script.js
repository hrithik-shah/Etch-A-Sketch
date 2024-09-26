
const GRID_SIDE_LENGTH = 920;
let currentGridSize = 16;

function buildGrid(n) {
    const cell_side_length = (GRID_SIDE_LENGTH / n) | 0;
    gridContainer.textContent = "";
    for (let i = 0; i < n; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        for (let j = 0; j < n; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cell_side_length}px`;
            cell.style.height = `${cell_side_length}px`;
            cell.addEventListener("mouseenter", () => handleOnEnter(cell));
            rowContainer.appendChild(cell);
        }
        gridContainer.appendChild(rowContainer);
    }
}

function handleOnEnter(cell) {
    cell.classList.add("cell-hover");
}

function handleOnLeave(cell) {
    cell.classList.remove("cell-hover");
}

function isInt(value) {
    var x;
    if (isNaN(value)) {
      return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
  }

function handleOnClickInputGridSize() {
    let newGridSize = prompt("Enter grid size: ");
    if (!isInt(newGridSize)) return;
    currentGridSize = Math.min(100, parseInt(newGridSize));

    buildGrid(currentGridSize);
}

function handleOnClickResetBtn() {
    buildGrid(currentGridSize);
}

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

gridContainer.style.width = GRID_SIDE_LENGTH;
gridContainer.style.height = GRID_SIDE_LENGTH;

buildGrid(currentGridSize);

document.body.appendChild(gridContainer);

const inputButton = document.createElement("button");
inputButton.innerText = "Input Grid Size";
inputButton.classList.add("size-button");
inputButton.addEventListener("click", () => handleOnClickInputGridSize());

const resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.classList.add("reset-button");
resetButton.addEventListener("click", () => handleOnClickResetBtn());

const buttonContainer = document.createElement("div");
buttonContainer.appendChild(inputButton);
buttonContainer.appendChild(resetButton);

document.body.insertBefore(buttonContainer, document.body.firstChild);