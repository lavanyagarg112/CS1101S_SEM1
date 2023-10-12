function make_withdraw(balance, password) {
    let count = 0;
    function withdraw(amount, pass) {
        if (pass === password && count !== 3){
            count = 0;
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
            
        }
        
        else {
            count = count + 1;
            if (count > 3){
                return "Account disabled";
            }
            else {
                return "Wrong password; no withdraw";
            }
        }
        
    }
    return withdraw;
}

const W1 = make_withdraw(100, "my_password");
W1(40, "my_password");
W1(40, "his_password");
W1(40, "his_password");
W1(40, "his_password");
W1(40, "my_password");

