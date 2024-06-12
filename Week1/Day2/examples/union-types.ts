type Address = {
  houseNumber: number
  street: string
  city: string
  county: string
  postcode: string
}

const address1 = '2 Cheese Street, Cheeseville, Cheeseshire, CH1 1CH'

const address2 = {
  houseNumber: 14,
  street: 'Numeral Road',
  city: 'Decimopolis',
  county: 'Floatland',
  postcode: 'NN1 1NN'
}

// const printAddress = (address: Address) => { 
// do some printing 
// }

// const printAddressString = (address: string) => {
// do some printing
// }

// Print address with union type

const printAddress = (address: string | Address) => {

}

printAddress(address1)
printAddress(address2)

export {}
