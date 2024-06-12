// InfiniPizza!

// Sample of having resolve and reject

// Create a function to use later

const myLoggerCallback = (data: any) =>
  console.log("I was called back with:", data);

const myErrorCallback = (data: any) => console.log("OOPS:", data);

// Toggle this value to pretend the db call has succeeded or failed

const bakeAPizza = () => true;

const orderFoodPromise = () =>
  new Promise((resolve, reject) => {
    // Do some task

    const longTaskOk = bakeAPizza();

    // which eventually calls either:

    if (longTaskOk) {
      // Call this if we are happy

      return resolve("Done! Yummy!");
    } else {
      // Or, if something goes wrong:

      reject("Oops, burnt it");
    }
  });

console.log("Start now...");

// See what happens here when the above call fails (rejects)

orderFoodPromise()
  .then(myLoggerCallback)

  .catch(myErrorCallback);

console.log("...Done");

export {};
