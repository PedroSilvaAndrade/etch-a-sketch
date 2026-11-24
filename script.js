const divContainer = document.querySelector(".container");
const divGrid = document.createElement("div");
const newGridButton = document.createElement("button");

divGrid.classList.add("grid");
divGrid.style.display = "grid";
divGrid.style.width = "500px";
divGrid.style.height = "500px";

newGridButton.classList.add("ngrid-button");
newGridButton.textContent = "New Grid";

function createGrid(size) {
    divGrid.innerHTML = "";

    divGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.style.boxSizing = "border-box";
        cell.style.border = "1px solid #ccc";
        divGrid.appendChild(cell);
    }
}

newGridButton.addEventListener("click", () => {
    const answer = prompt("Choose the grid length (max. 100x100)");
    if (answer === null) return;

    const size = parseInt(answer);
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Enter a number between 1 and 100.");
        return;
    }

    createGrid(size);
});

divGrid.addEventListener("mouseenter", () => {
    caixa.style.backgroundColor = "red";
})

divContainer.appendChild(newGridButton);
divContainer.appendChild(divGrid);

createGrid(16);