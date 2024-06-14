// Functional Programming - Workshop Exercise 4.
//
// Read the whole file!
// Then start at the instructions after the "EXERCISES" header
//
// Run the file with "npx ts-node exercise-4.ts" and read the outputs (console.logs) before you make any changes

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
  // Uncomment this to test your try/catch
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
];

const queryUser = async (personName: string): Promise<User> => {
  if (!personName) {
    throw new Error("Missing Name");
  }

  const result: User = await userData.filter(
    (user) => user.name === personName
  )[0];

  if (!result.name) {
    throw new Error("Not Found!");
  }
  return result;
};

const queryFood = async (foodId: number | null): Promise<Food> => {
  if (!foodId) {
    throw new Error("Missing ID");
  }

  const result: Food = await foodData.filter((food) => food.id === foodId)[0];

  if (!result.name) {
    throw new Error("Not Found!");
  }
  return result;
};

// Part 1. Refactor this to use async/await.
// Part 2. Refactor this to use a try/catch block to handle errors.
const findFavouriteFood = async (name: string) => {
  try {
    const userFound = await queryUser(name);
    const foodFound = await queryFood(userFound?.food);
    console.log(`${userFound?.name} likes ${foodFound?.name}`);
  } catch (err) {
    console.error(err);
  }
};

console.log("User data:", userData);
console.log("Food data:", foodData);

console.log("");
console.log("Bad Results:");
// Uncomment these one at a time to test that your refactor works:
//
findFavouriteFood("").catch(console.log); //Test rejection for not providing a name
findFavouriteFood("Megan"); //Test rejection for giving a name that isn't in database
findFavouriteFood("Tim"); //Test rejection for missing food id

// ----- EXERCISES -------------------------------------------------------

// Part 1. Refactor findFavouriteFood to use async/await.
// Part 2. Refactor findFavouriteFood to use a try/catch block to handle errors.
