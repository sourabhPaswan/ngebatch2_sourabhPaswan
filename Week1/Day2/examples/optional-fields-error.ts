// Expanded address

type Address = {
  houseNumber?: number
  houseName?: string
  addressLine1: string
  addressLine2?: string
  city: string
  county: string
  postcode: string
}

const printAddress = (address: Address) => {
  print(address.houseNumber)
}

const print = (line: string) => {
  console.log(line)
}


export {}
