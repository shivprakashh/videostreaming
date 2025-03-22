function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        depo(amount) {
            balance += amount;
            console.log(`Deposited $${amount}. New balance: $${balance}`);
        },
        withdraw(amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${balance}`);
            } else {
                console.log('Insufficient funds');
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log(myAccount.getBalance()); // 1300


function memoize(fn) {
    let cache = {};

    return function(arg) {
        console.log("ccccc",cache)
        if (cache[arg]) {
            console.log('Fetching from cache...');
            return cache[arg];
        }

        console.log('Calculating result...');
        const result = fn(arg);
        cache[arg] = result;
        return result;
    };
}

const slowFunction = (x) => {
    for (let i = 0; i < 1e9; i++) {} // Simulate a slow function
    return x * 2;
};

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));  // Calculating result... 10
console.log(memoizedSlowFunction(5));  // Fetching from cache... 10
console.log(memoizedSlowFunction(10)); // Calculating result... 20


const obj = {name:"thet"}
obj["name"] = "naing";
obj['fuck'] = "thet naing tun"
console.log(obj,"obj......")
const arr = [3,23,34,45];
let car = {name:"thet",456:"ht"};
car["age"] = 45
let i = 0;
console.log(car['456'],"sfsf")

while (i < arr.length) {
    car[`thetttt${arr[i]}`] = arr[i]; // No template literal here, so arr[i] stays a number
    i++;
}



console.log(car,"thisis cc")
let c = 3;
function aa(){
  
    if(c <2){
        console.log(c)
        return 1;
    }

    c -= 1;
    1
   
}

console.log(aa(),"ths is h")

