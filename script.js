let currentInput = "";
let calculationHistory = [];

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
}

function updateHistoryUI() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = "";
  calculationHistory.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
  });
}

function clearHistory() {
  calculationHistory = [];
  updateHistoryUI();
}

function setupHistoryContainer() {
  const historyContainer = document.createElement("div");
  historyContainer.id = "history-container";
  document.body.appendChild(historyContainer);
}


setupHistoryContainer();






const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sidebar.style.left = "0"; 
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px"; 
});




