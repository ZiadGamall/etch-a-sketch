const container = document.getElementById('container');
const columns = document.getElementById('column-container');
const n = 20
    //creating a 16x16 grid
for (let j = 0; j < n; j++) {

    const column = document.createElement('div');
    column.classList.add('column')
    
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        column.appendChild(row)
    } 
    columns.appendChild(column)
}

const cells = document.querySelectorAll('.row');
const dark = document.getElementById('dark')
const reset = document.getElementById('reset');
const erase = document.getElementById('erase');
const rainbow = document.getElementById('color')

    //change the color of cells if hovered over (black)
dark.addEventListener('click', () => cells.forEach(cell => {cell.addEventListener('mouseover', () => cell.style.backgroundColor = '#000')}));

    //make the color of all cells white
reset.addEventListener('click', () => {removeClass(cells)});

    //function responsible for turning the cells white
function removeClass (cells) {
    cells.forEach(cell => cell.style.backgroundColor = "#fff");
}

    //make the color of the hovered over cell white
erase.addEventListener('click', () => cells.forEach(cell => {cell.addEventListener('mouseover', () => cell.style.backgroundColor = '#fff')}));

    //generate a random color
function randomColor (e) {
    let random = '#' + Math.floor(Math.random()*16777215).toString(16);
    e.style.backgroundColor = random;
    console.log(random)
}

rainbow.addEventListener('click', () => cells.forEach(cell => {cell.addEventListener('mouseover', () => randomColor(cell))}));
