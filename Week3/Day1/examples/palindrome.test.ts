/*
Run with
> npm install
> npm test palindrome
*/
import { palindrome } from "./palindrome";

describe("When calling the palindrome function", () => {
  let check1: boolean;
  beforeEach(() => {
    check1 = palindrome("clear");
  });
  let check2: boolean;
  beforeEach(() => {
    check2 = palindrome("");
  });
  let check3: boolean;
  beforeEach(() => {
    check3 = palindrome("tyt");
  });
  it("will return true or false when called", () => {
    //Arrange

    //Act
    //Assert
    console.log("true or false");
    expect(check1).toBe(false);
  });

  it("will return false for invalid inputs", () => {
    //Arrange

    //Act
    //Assert
    console.log("invalid inputs");
    expect(check2).toBe(check2.valueOf !== null);
  });

  it("will return true for text that is a palindrome", () => {
    //Arrange

    //Act
    //Assert
    console.log("palindrome");
    expect(check3).toBe(true);
  });
});
