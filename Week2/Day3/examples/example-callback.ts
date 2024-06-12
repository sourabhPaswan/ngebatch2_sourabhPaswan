// InfiniPizza!

// Create a function to use later
const myLoggerCallback = () => console.log('I was called back')

// Start some long running non-blocking code now
// Don't wait for it to finish though
setTimeout(myLoggerCallback, 2000) // Simulate delay

// Carry on...
console.log('Waiting...')

export {}
