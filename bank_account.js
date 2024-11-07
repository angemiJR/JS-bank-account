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
        console.log(balance);
    }

    function deposit() {
        let amount = parseFloat
            (prompt(`Write the amout that you want to deposit`)
            );

            let sum = getBalance() + amount;
            console.log(sum);


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