
// Update the donation and Current balance, and add to history
function donate(donate, currentAmount) {
    // Get balance and donation amount
    let donationInput = document.getElementById(`donate-${donate}`);
    let donationAmount = parseFloat(donationInput.value);
    let balanceElement = document.getElementById("balance");
    let donationBalanceElement = document.getElementById(`${donate}-donation-balance`);

    // Get the current balance
    let currentBalance = parseFloat(balanceElement.textContent.replace(" BDT", ""));

    // Input validation
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    if (donationAmount > currentBalance) {
        alert("Insufficient balance to make this donation.");
        return;
    }

    // Deduct donation amount from the balance
    let newBalance = currentBalance - donationAmount;
    balanceElement.textContent = `${newBalance} BDT`;

    // Add donation amount
    let newDonationAmount = currentAmount + donationAmount;
    donationBalanceElement.innerHTML = `<strong>${newDonationAmount} BDT</strong>`;

    // Clear input field
    donationInput.value = "";

    // Successfull message
    alert("Donation Successful!");


    // Add the donation to history
    addToHistory(donate, donationAmount);
}

// Function add the transaction to history
function addToHistory(donate, donationAmount) {
    let historyList = document.getElementById("history-list");

    // Create a new list item
    let newHistoryItem = document.createElement("li");
    newHistoryItem.classList.add("border-2", "rounded-lg", "px-10", "py-4", "mb-2", "bg-white");

    // Get the current date and time
    let currentDate = new Date().toLocaleString();

    // Set the transaction details
    let userName;
    switch (donate) {
        case 'noakhali':
            userName = "Flood Relief at Noakhali, Bangladesh";
            break;
        case 'feni':
            userName = "Flood Relief at Feni, Bangladesh";
            break;
        case 'quota':
            userName = "Aid for Injured in the Quota Movement, Bangladesh";
            break;
        default:
            userName = "Donation";
    }

    newHistoryItem.innerHTML = `${donationAmount} BDT is donated for ${userName} </br>
    Date:  ${currentDate}`;

    // Append the new history item to the history list
    historyList.appendChild(newHistoryItem);
}



// Toggle donation and history sections
document.getElementById('historyBtn').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

    // button styles
    this.classList.add('bg-[#B4F461]', 'text-black',);
    document.getElementById('donationBtn').classList.remove('bg-[#B4F461]', 'text-black',);

});

document.getElementById('donationBtn').addEventListener('click', function () {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('hidden');

    // button styles
    this.classList.add('bg-[#B4F461]', 'text-black',);
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]', 'text-black',);
});


// set blog page link
function gotoLink(link) {
    console.log(link.value);
    location.href = 'blog.html';
}

