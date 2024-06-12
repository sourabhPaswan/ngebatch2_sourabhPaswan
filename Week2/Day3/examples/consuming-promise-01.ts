// InfiniPizza!

const promiseMaker = (declaration: string) =>
  new Promise((resolve) => {
    //long running action like connect to db, get loads of data

    //then on success
    resolve(`I promised to: ${declaration} and I have`)
  })

const promise1 = promiseMaker('Do the washing up')

console.log('Start now...')
promise1.then(console.log) // I promised to: Do the washing up and I have
console.log('...Done')

// Which can be thought of as:
// promise.then((argument) => console.log(argument))

export {}
