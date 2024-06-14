// Functional Programming - Workshop Exercise 2.
//
// Read the whole file!
// Then start at the instructions after the "EXERCISES" header
//
// Run the file with "npx ts-node exercise-2.ts" and read the outputs (console.logs) before you make any changes

type User = {
  name: string;
  food: number | null;
};

type Food = {
  name: string;
  id: number | null;
};

const userData: User[] = [
  {
    name: "John",
    food: 1,
  },
  {
    name: "Bob",
    food: 2,
  },
  {
    name: "Sarah",
    food: 3,
  },
  {
    name: "Faye",
    food: 4,
  },
  {
    name: "Tim",
    food: null,
  },
];

const foodData: Food[] = [
  {
    name: "Pizza",
    id: 1,
  },
  {
    name: "Indian",
    id: 2,
  },
  {
    name: "Thai",
    id: 3,
  },
  {
    name: "American",
    id: 4,
  },
  {
    name: "English",
    id: null,
  },
];

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
const queryUser = (personName: string): Promise<User> =>
  new Promise((resolve, reject) => {
    const isPersonName =
      userData.filter((user) => user.name === personName).length > 0;
    if (isPersonName) {
      resolve(userData.filter((user) => user.name === personName)[0]);
    } else {
      reject("error: no personName present");
    }
  });

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
const queryFood = (foodId: number | null): Promise<Food> =>
  new Promise((resolve, reject) => {
    const isFoodPresent =
      foodData.filter((food) => food.id === foodId).length > 0 &&
      foodId !== null;
    if (isFoodPresent) {
      resolve(foodData.filter((food) => food.id === foodId)[0]);
    } else {
      reject("error: no foodId present");
    }
  });

// Fetch data
const findFavouriteFood = (name: string) =>
  new Promise((resolve) => {
    resolve(
      queryUser(name)
        .then((person) => queryFood(person.food))
        .then((foodItem) => `${name} likes ${foodItem.name}`)
    );
  });

console.log("User data:", userData);
console.log("Food data:", foodData);

console.log("");
console.log("Bad Results:");

// Part 2. Add '.catch' blocks to these function chains to catch the rejected promises
findFavouriteFood("").then(console.log).catch(console.log); // Test rejection for not providing a name
findFavouriteFood("Megan").then(console.log).catch(console.log); // Test rejection for giving a name that doesn't exist
findFavouriteFood("Tim").then(console.log).catch(console.log); // Test rejection for missing food id

// ----- EXERCISES -------------------------------------------------------

// There is now a user with data `{ name: 'Tim', food: null }` and a food with data `{ name: 'English', id: null }`

// Part 1: Refactor queryUser and queryFood to 'reject' when missing the required values
// Part 2. Add '.catch' blocks to these function chains to catch the rejected promises
// For both of these, add console logs so you can check the output
