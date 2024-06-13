// InfiniPizza!

const waitOne = () =>
  new Promise((resolve) => {
    console.log(`waitOne called`)
    setTimeout(() => resolve(1), 500)
  })

const waitTwo = () =>
  new Promise((resolve) => {
    console.log(`waitTwo called`)
    setTimeout(() => resolve(2), 1000)
  })

const boomBox = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`boomBox called`)
      //throw new Error('Database goes boom')
      reject('Database says no')
    }, 1750)
  })

// An array of Promises
const tasks = [waitOne(), boomBox(),waitTwo(), waitOne(),boomBox() ]

const successReport = (someData: any) => {
  console.log('Success all finished!', someData)
}

const errorHandler = (someError: any) => {
  console.error('There was an error, please try again later...', someError)
}

console.log('Start now...')
Promise.all(tasks)
  .then(successReport) // [1,2,1] an array of all the Resolved values
  .catch(errorHandler)
console.log('...Done')

export {}
