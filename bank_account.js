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

    let account = {
        accountName: "Name Surname",
    };

    let balance = 100;
   

    function getBalance() {
       console.log (`Your balance is ${balance}.`);
        nextAction();
        return balance;

    }

    function deposit() {
        let amount = parseFloat
            (prompt(`Write the amout that you want to deposit`));
        while (isNaN(amount) || amount <= 0) {
            amount = parseFloat(prompt("Please enter a valid number greater than 0."));
        }
        let newBalance = balance + amount;
        balance = newBalance;
        console.log (`New balance: ${newBalance}.`);
        nextAction();
        return newBalance;

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


    switch (message) {
        case 1:
            getBalance();
            break;

        case 2:
            deposit();
            break;
        case 3:
        case 4:
            console.log(account);
            break;
        case 5:
    }
}


atm();