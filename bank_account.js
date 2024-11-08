


let account = {
    accountName: "Name Surname",
    balance: 100,
};

function getBalance() {
    alert(`Your balance is ${account.balance}.`);
    nextAction();
    return account.balance;

}

function deposit() {
    let amount = parseFloat
        (prompt(`Write the amout that you want to deposit`));
    while (isNaN(amount) || amount <= 0) {
        amount = parseFloat(prompt("Please enter a valid number greater than 0."));
    }
    let newBalance = account.balance + amount;
    account.balance = newBalance;
    alert(`New balance: ${account.balance}.`);
    nextAction();
    return account.balance;

}

function withdrawal() {
    let newBalance;
    let stringError = ``;


    do {
        let amount = parseFloat(prompt(`${stringError} 
            Write the amount that you want to withdraw`));

        if (isNaN(amount) || amount <= 0) {
            stringError = `Please enter a valid number greater than 0.`;


        } else if (amount > account.balance) {
            stringError =
                `You don't have enough money! 
                Your balance is ${account.balance}. 
                Please enter a smaller amount.`;

        } else {
            newBalance = account.balance - amount;
            account.balance = newBalance;
            break;
        }
    } while (true);

    account.balance = newBalance;
    alert(`New balance: ${account.balance}.`);
    nextAction();
    return account.balance;

}

function nextAction() {
    const action = prompt(
        `What would you want to do next?
            1. Go back on beginning
            2. Exit`);

    if (action === `1`) {
        atm();
    } else if (action === `2`) {
        alert(`Thank you for using ATM. Goodbye`);

    } else {
        prompt(`Invalid choice. Try again.
                     ${action}`);
    }
}

function atm() {
    const message = parseFloat(
        prompt(
            `Select a choice 
               1.) See balance 
               2.) Make a deposit 
               3.) Make a withdrawal 
               4.) Get account name 
               5.) Exit`
        )
    );

    switch (message) {
        case 1:
            getBalance();
            break;

        case 2:
            deposit();
            break;
        case 3:
            withdrawal();
            break;
        case 4:
            alert(account.accountName);
            nextAction();
            break;
        case 5:
    }
}


atm();