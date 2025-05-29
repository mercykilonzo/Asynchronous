// 1.
// Create a function that takes in the email as an argument 
// create a variable to hold the promise
// Using setTimeout, set a waiting time of 5 seconds to delay the execution of the code by 5 seconds
// Create another function to simulate the reminders
// Declare a list of emails that holds the emails of the 3 users.
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

const tryLogin = 3;
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

3.
let count = 5;
const countdown = setInterval(() => {
    if (count > 0) {
        console.log(`${count}`);
    } else {
        console.log("Time's up!");
        clearInterval(countdown);
    }
    count--;
}, 1000);





const wait = (mseconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, mseconds);
  });
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


