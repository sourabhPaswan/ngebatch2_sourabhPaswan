/*
Run this with
> npm install
> npm test maths-utils
*/

import { add, safeMultiply } from "./maths-utils";

describe("When calling the Add function", () => {
  it("should add two integers", () => {
    // Arrange: Setup variables here
    let expected = 30;

    // Act: Call function here
    let result: number;
    result = add(10, 20);

    // Assert: Check results here
    expect(result).toBe(expected);
  });

  it("will add strings and numbers", () => {
    // Arrange: Setup variables here
    let expected = "1020";

    // Act: Call function here
    let result: string;
    result = add(10, "20");

    // Assert: Check results here
    expect(result).toBe(expected);
  });
});

describe("When calling the safeMultiply function", () => {
  it("should multiply two integers", () => {
    // Arrange: Setup variables here
    let expected = 400;

    // Hint: happy case
    // Act: Call function here
    let result: number;
    result = safeMultiply(10, 40);

    // Assert: Check results here
    expect(result).toBe(expected);
  });

  it("will throw an error when parameter a is bad", () => {
    // Arrange: Setup variables here
    let firstNum = "one";
    let secondNum = 40;

    // Act: Call function here + Assert: Check results here
    // Hint: add a wrapper function
    let check = () => {
      let result = () => safeMultiply(firstNum, secondNum);
      return result;
    };

    // Assert
    // Hint: use "toThrow()"
    expect(check()).toThrow();
  });

  it("will throw an error when parameter b is bad", () => {
    // Arrange: Setup variables here
    let firstNum = 50;
    let secondNum = "two";

    // Act: Call function here
    let check = () => {
      let result = () => safeMultiply(firstNum, secondNum);
      return result;
    };
    // Assert: Check results here
    // You can either do this with a wrapper function and .toThrow, or you can try using a try/catch block
    expect(check()).toThrow();
  });
});
