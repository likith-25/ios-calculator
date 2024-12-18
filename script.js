let currentInput = "";
let calculationHistory = [];


function loadHistory() {
  const savedHistory = localStorage.getItem("calculationHistory");
  if (savedHistory) {
    calculationHistory = JSON.parse(savedHistory);
    updateHistoryUI();
  }
}


function saveHistory() {
  localStorage.setItem("calculationHistory", JSON.stringify(calculationHistory));
}

function appendToScreen(value) {
  currentInput += value;
  document.getElementById("screen").textContent = currentInput;
}

function clearScreen() {
  currentInput = "";
  document.getElementById("screen").textContent = "";
}

function calculate() {
  try {
    const result = eval(currentInput).toString();

    addToHistory(`${currentInput} = ${result}`);

    currentInput = result;
    document.getElementById("screen").textContent = currentInput;
  } catch {
    document.getElementById("screen").textContent = "Error";
  }
}

function addToHistory(calculation) {
  calculationHistory.push(calculation);
  updateHistoryUI();
  saveHistory();
}

function updateHistoryUI() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  calculationHistory.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = entry;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    
    deleteButton.addEventListener("click", () => {
      deleteHistoryItem(index);
    });

    
    li.appendChild(deleteButton);
    historyList.appendChild(li);
  });
}

function deleteHistoryItem(index) {
  calculationHistory.splice(index, 1);
  updateHistoryUI();
  saveHistory();
}

function clearHistory() {
  calculationHistory = [];
  updateHistoryUI();
  saveHistory();
}

function setupHistoryContainer() {
  const historyContainer = document.createElement("div");
  historyContainer.id = "history-container";
  document.body.appendChild(historyContainer);
}

setupHistoryContainer();

window.onload = loadHistory;


const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sidebar.style.left = "0"; 
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px"; 
});
