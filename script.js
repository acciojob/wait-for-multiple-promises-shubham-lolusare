//your JS code here. If required.
const table = document.getElementById("output");

// Add loading row
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = "2";
loadingCell.innerText = "Loading...";

// Create 3 random promises
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
];

// Wait for all promises to resolve
Promise.all(promises).then(results => {
  // Remove loading row
  table.deleteRow(0);

  // Add rows for each promise result
  results.forEach((result, i) => {
    const row = table.insertRow();
    const nameCell = row.insertCell();
    const timeCell = row.insertCell();
    nameCell.innerText = `Promise ${i+1}`;
    timeCell.innerText = `${result.toFixed()}`;
  });

  // Add total row
  const totalRow = table.insertRow();
  const totalNameCell = totalRow.insertCell();
  const totalTimeCell = totalRow.insertCell();
  totalNameCell.innerText = "Total";
  totalTimeCell.innerText = `${results.reduce((acc, val) => acc + val, 0).toFixed(3)}`;
});