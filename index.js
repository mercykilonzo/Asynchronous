// 1.
// Create a function that takes in the email as an argument 
// create a variable to hold the promise
// Using setTimeout, set a waiting time of 5 seconds to delay the execution
// Create another function to simulate the reminders
// Loop through the list of emails and send a reminder to each email
async function sendReminder(email) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Reminder sent to ${email}`);
            resolve();
        },5000);
    });
    return promise
}

async function sendRemindersToAll(users) {
    for (email of users) {
        await sendReminder(email);
    }
}
const users = ['alice@gmail.com', 'mercy@gmail.com', 'joy@gmail.com'];
sendRemindersToAll(users);

// 2.
// Initialize attempts to 0
//  create a function loginattempts,
// Create a new Promise,Inside the Promise,  Set a timeout for 1000 milliseconds
// If attempts <=3:Log "Attempt [attempts] failed"Else if attempts === 3:Log "Login successful"
// Increment attempts by 1

const tryLogin = 0;
const tryLoginPromise = new Promise((resolve, reject) => {
    if (tryLogin <= 3) {
        setTimeout(() => {
            resolve('Login Successful')
        }, 1000);
    } else {
        setTimeout(() => {
            reject('Login failed after 3 attempts');
        }, 1000);
    }

})
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    })
    .finally(() => {
        return 'try again ';
    })

const tryLoginAsync = async () => {

    const tryLoginResult = await tryLoginPromise;
    console.log({ tryLoginResult });

};
tryLoginAsync()

// 3.
// Set variable counter = 5
// Create interval using setInterval that triggers every 1000 milliseconds
// 4. Inside interval,log current counter value and decrease counter by 1
// If counter >= 0,Clear the interval and log "Time's up!"
let count = 5;
const countdown = setInterval(() => {
    if (count >=0) {
        console.log(`${count}`);
    } else {
        console.log("Time's up!");
        clearInterval(countdown);
    }
    count--;
}, 1000);

// 4.
// Create a promise with setTimeout to return the waiting period
// Create an async function loadpage to log "Loading header..." and wait for 1 second
// After the first log, wait for 2 seconds to log "Loading content..." and a second to log "Loading footer..."
// After all waits run, log "page fully loaded"



const wait = (mseconds) => {
const waitingperiod = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, mseconds);
  })
  return waitingperiod
};
const loadPage = async () => {
  try {
    console.log("Loading header...");
    await wait(1000);
    console.log("Loading content...");
    await wait(2000);
    console.log("Loading footer...");
    await wait(1000);
    console.log("Page fully loaded");
  } catch (error) {
    console.log({ error });
  }
};
loadPage();

// 5.
// Create a function fetchPrice that takes in symbol as an argument 
// return a promise after 2 seconds with a resolve message
// Create an async function that calls fetchPrice with
// Loop through the syombol arry
// log the results once they are resolved

function fetchPrice(symbol) {
     return new Promise((resolve) => {
        setTimeout(() => { 
        resolve(`Price for ${symbol} retrieved`

        ); },1000);
     }); }
async function fetchPrices(symbols) { 
    for (symbol of symbols) { 
        const result = await fetchPrice(symbol); 
        console.log(result); } }

 fetchPrices(['AAPL', 'GOOG']);


