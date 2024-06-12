/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Aisha', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/
export type Developer = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
export function countFromEurope(developers: Developer[]) {
  return developers.filter((d) => d.continent === "Europe")?.length;
}

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Aisha, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
export function getGreetings(developers: Developer[]) {
  return developers.map(
    (d) => `Hi ${d.firstName} what do you like the most about ${d.language}?`
  );
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
export function isJSComing(developers: Developer[]) {
  return developers.every((d) => d.language === "Javascript");
}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Aisha, Croatia'
export function getFirstPythonDeveloper(developers: Developer[]) {
  return developers
    .filter((d) => d.language === "Python")
    .map((dev) => (dev ? `${dev.firstName}, ${dev.country}` : "none"));
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
export function getAverageAge(developers: Developer[]) {
  let average = -1;
  let totalAge: any = 0;
  let devsCount = developers.length;

  for (let i = 0; i < devsCount; i++) {
    totalAge += totalAge[i];
  }
  average = totalAge / developers.length;

  return average;
}

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
export function getLanguageCounts(developers: Developer[]) {
  let languageCounts = {};
  const countLanguage = (lang: string) =>
    developers.filter((d) => d.language === lang).length;

  // const removeDuplicates = []
  developers.forEach((d) => {
    languageCounts = {
      ...languageCounts,
      [d.language]: countLanguage(d.language),
    };
  });
  return languageCounts;
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Aisha']
export function getOldest(developers: Developer[]) {
  const sortedDevs = developers.sort((a, b) => b.age - a.age);
  let oldestArr = developers.filter((dev) => dev.age === sortedDevs[0].age);
  return oldestArr.map((oldest) => oldest.firstName);
}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
export function isGlobalGroup(developers: Developer[]) {
  let GlobalContinents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  let developersContinents = developers.map((d: any) => d.continent);
  return GlobalContinents.every((el) => developersContinents.includes(el));
}

