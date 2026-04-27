/*
Google Sheet Clone (LightWt).

UI:
- A grid of cells (like a spreadsheet).
- Each cell will be editable.
- An address bar to show the current cell's address.
- A formula bar to enter formulas.
- Basic formatting options (bold, italic, underline).
- Simple dependency tracking.


Instruction to use it:
1. Change the referenced cell to see the changes in the dependent cells.
2. Click on any cell to edit its content.
3. Use the address bar to see the current cell's address.
4. Use the formula bar to enter formulas.
5. Use the formatting options to style your cells.

Data Structure: 
- A 2D array to represent the grid of cells.
- {
  value: '', // The displayed value of the cell
  formula: ""
  parent: [].
  children: []
  }

*/
let rows = 1000;
let cols = 26;

let sheetDB = [];
function createDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formula: "",
        parents: [],
        children: [],
      });
    }
    sheetDB.push(row);
  }
}

createDB();
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let cellsContainer = document.querySelector(".cells");
function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let el = document.createElement("div");
    el.classList.add("cell");
    el.textContent = String.fromCharCode(65 + i);
    topRow.appendChild(el);
  }
  for (let i = 0; i < rows; i++) {
    let el = document.createElement("div");
    el.textContent = i + 1;
    el.classList.add("cell");
    leftCol.appendChild(el);
  }
}

generateHeaders();
let selectedCell = null;
function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.contentEditable = true;
      cell.setAttribute("contenteditable", "true");
      cell.setAttribute("rid", i);
      cell.setAttribute("cid", j);
      rowDiv.appendChild(cell);
      cell.addEventListener("click", function () {
        let address = document.querySelector("#address");
        let addressValue = String.fromCharCode(65 + j) + (i + 1);
        address.value = addressValue;
        selectedCell = cell;
      });
    }
    cellsContainer.appendChild(rowDiv);
  }
}

generateCells();

let boldBtn = document.querySelector("#bold");
let italicBtn = document.querySelector("#itallic");
let underlineBtn = document.querySelector("#underline");

boldBtn.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.fontWeight =
      selectedCell.style.fontWeight === "bold" ? "normal" : "bold";
  }
});

italicBtn.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.fontStyle =
      selectedCell.style.fontStyle === "italic" ? "normal" : "italic";
  }
});

underlineBtn.addEventListener("click", function () {
  if (selectedCell) {
    selectedCell.style.textDecoration =
      selectedCell.style.textDecoration === "underline" ? "none" : "underline";
  }
});

let clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function () {
  let formulaInput = document.querySelector("#formula");
  formulaInput.value = "";
});

// cell editing logic
cellsContainer.addEventListener(
  "blur",
  function (e) {
    let cell = e.target;
    if (!cell.classList.contains("cell")) return;
    let rid = Number(cell.getAttribute("rid"));
    let cid = Number(cell.getAttribute("cid"));
    let value = cell.textContent;
    if (sheetDB[rid][cid].formula) {
      removeDependencies(rid, cid);
    }
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = "";
    updateChildren(rid, cid);
  },
  true,
);

function removeDependencies(rid, cid) {
  let parents = sheetDB[rid][cid].parents;
  parents.forEach(({ rid: pr, cid: pc }) => {
    sheetDB[pr][pc].children = sheetDB[pr][pc].children.filter(
      (child) => !(child.childRID === rid && child.childCID === cid),
    );
  });
  sheetDB[rid][cid].parents = [];
}

function updateChildren(rid, cid) {
  let children = sheetDB[rid][cid].children;
  children.forEach((child) => {
    let cellObj = sheetDB[child.childRID][child.childCID];
    let formula = cellObj.formula;
    let newValue = evaluateFormula(formula);
    cellObj.value = newValue;
    updateUI(child.childRID, child.childCID, newValue);
    updateChildren(child.childRID, child.childCID);
  });
}

function updateUI(rid, cid, newValue) {
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  if (cell) {
    cell.textContent = newValue;
  }
}

let formulaInput = document.querySelector("#formula");
formulaInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let formula = formulaInput.value;
    let address = document.querySelector("#address").value;
    if (!address) return;
    let { rid, cid } = getRIDCID(address);
    if (sheetDB[rid][cid].formula) {
      removeDependencies(rid, cid);
    }
    let value = evaluateFormula(formula);
    sheetDB[rid][cid].value = value;
    sheetDB[rid][cid].formula = formula;
    addDependencies(formula, rid, cid);
    updateUI(rid, cid, value);
    updateChildren(rid, cid);
  }
});
// A1 + B1 == [A1, + , B1]

function evaluateFormula(formula) {
  if (!formula) return "";
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+$/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      let value = sheetDB[rid][cid].value;
      tokens[i] = value === "" ? 0 : value;
    }
  }
  // [5 + 5]
  let expression = tokens.join(" ");
  try {
    let result = eval(expression);
    return result;
  } catch (error) {
    console.error("Error evaluating formula:", error);
    return "error";
  }
}

function addDependencies(formula, childRID, childCID) {
  let tokens = formula.split(" ");
  tokens.forEach((token) => {
    if (/^[A-Z][0-9]+$/.test(token)) {
      let { rid, cid } = getRIDCID(token);
      sheetDB[rid][cid].children.push({ childRID, childCID });
      sheetDB[childRID][childCID].parents.push({ rid, cid });
    }
  });
}

function getRIDCID(add) {
  let cid = add.charCodeAt(0) - 65;
  let rid = Number(add.substring(1)) - 1;
  return { rid, cid };
}
