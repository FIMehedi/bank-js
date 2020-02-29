// Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none"; // Hide Login Area
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block"; // Show Transaction Area
});

// Deposit Button Event Handler
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function() {
    const depositNumber = getInputData("deposit-amount");
    updateSpanText("current-deposit", depositNumber); // Deposit
    updateSpanText("current-balance", depositNumber); // Balance
})

// Withdraw Button Event Handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputData("withdraw-amount");
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);
})

// Get Input Data
function getInputData(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    document.getElementById(id).value = ""; // Set Empty Value in Input Box
    return amountNumber;
}

// Update Status Value
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}