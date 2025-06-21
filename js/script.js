/*
File: script.js
Name: Aneesh Bathey
Email: aneesh_bathey@student.uml.edu
*/

// Getting HTML elements in JavaScript code: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// Creating HTML elements using JavaScript: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// Type conversions in JavaScript: https://www.w3schools.com/js/js_type_conversion.asp

let form = document.getElementById("input-form");
let minYInput = document.getElementById("minY");
let maxYInput = document.getElementById("maxY");
let minXInput = document.getElementById("minX");
let maxXInput = document.getElementById("maxX");
let tableContainer = document.getElementById("mult-table");
let invalidInput = document.getElementById("invalid-input");

// Add submit event listener for when user clicks on submit button
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get all inputs and convert to numbers (this prevents bugs with negative numbers)
    const minY = Number(minYInput.value);
    const maxY = Number(maxYInput.value);
    const minX = Number(minXInput.value);
    const maxX = Number(maxXInput.value);

    // Make sure all numbers inputted are in range of -50 to 50
    if (minY < -50 || maxY > 50 || minX < -50 || maxX > 50) {
        return;
    }

    // Make sure min Y value is less than max Y, otherwise throw an error
    if (minY > maxY) {
        return;
    }
    
    // Make sure min X value is less than max X, otherwise throw an error
    if (minX > maxX) {
        return;
    }

    const oldTable = document.getElementById("table-element");

    if (oldTable) {
        // Remove table that was previously displayed
        tableContainer.removeChild(oldTable);
    }

    // Create table
    const table = document.createElement("table");
    table.id = "table-element";

    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);

    const tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    // Fill in table cells
    for (let row = minX - 1; row <= maxX; row++) {
        const tr = document.createElement("tr");

        for (let col = minY - 1; col <= maxY; col++) {
            // Create th or td element depending on the row or column
            const cell = document.createElement(row == minX - 1 || col == minY - 1 ? "th" : "td");

            if (row == minX - 1 && col == minY - 1) {
                cell.textContent = "x"; // Top left of table
            } else if (row == minX - 1) {
                cell.textContent = col;
            } else if (col == minY - 1) {
                cell.textContent = row;
            } else {
                cell.textContent = row * col; // Perform the multiplication
            }

            tr.appendChild(cell);
        }

        if (row === minX - 1) {
            tableHead.appendChild(tr);
        } else {
            tableBody.appendChild(tr);
        }
    }

    tableContainer.appendChild(table);
});