// 1: Add types to the linkAuthors function
// types need to be added to
// - arguments
// - return of the function
// - variables

const titles = ["The Jungle Book", "Lord of the Flies"];

const authors = ["Rudyard Kipling"];

const linkAuthors = (authors, titles, ignoreMissingTitles) => {
  // Takes an array of authors and titles and merges them together
  // Some may notice - we could use list.map() but that is in the functional programming session which we have not done yet!
  const authorAndTitle: any = [];
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    const title = titles[i];

    if (title === undefined && ignoreMissingTitles === false) {
      throw new Error("Can't find that title!");
    }

    authorAndTitle[i] = `${title} (Author ${author})`;
  }
  return authorAndTitle;
};

const ignoreMissingTitles = false;

const authorCount = authors.length;
const titleCount = titles.length;

const resultList = linkAuthors(authors, titles, ignoreMissingTitles);
console.log(resultList);

// 2: create the type for the below function and call it MyFunction
type MyFunction = {};
const myFunction: MyFunction = (firstName, lastName) => {
  return firstName.length + lastName.length;
};

export {};
