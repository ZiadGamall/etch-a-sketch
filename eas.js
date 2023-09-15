const container = document.getElementById('container');
const columns = document.getElementById('column-container');

for (let j = 1; j < 17; j++) {

    const column = document.createElement('div');
    column.classList.add('column')
    
    for (let i = 1; i < 17; i++) {
        const row = document.createElement('div')
        row.classList.add('row')
        column.appendChild(row)
    } 
    container.appendChild(column)
}