type Person = {
  name: string,
  occupation: string, 
  age: number
}

const person: Person = {
  name: 'Alice',
  occupation: 'Astronaut',
  age: 43
}


const formatPerson = (person: Person) => {
  return `${person.name} (${person.occupation})`
}

formatPerson(person)

export {}
