// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [
  // array of objects
  { name: "Aisha", age: 8 }, // ages in months!
  { name: "Oscar", age: 9 },
  { name: "Wiggins", age: 44 },
  { name: "Gatsby", age: 56 },
];

type Academite = {
  name: string;
  age: number;
};

// Reduce the array to only the total age in months of all the doggie Academites
// having some doubt in question
// TODO
const onlyAges = someAcademitesWithAges.map((dog) => dog.age);
console.log("onlyAges", onlyAges);

// Sort the array by the names (alphabetically)
// Make a separate sorting function then use it

const sortingByName = () =>
  someAcademitesWithAges.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
const sortByName = sortingByName();
console.log("sortByName", sortByName);

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it
const sortingByAge = () => someAcademitesWithAges.sort((a, b) => b.age - a.age);
const sortByAges = sortingByAge();
console.log("sortByAges", sortByAges);
// EOF
