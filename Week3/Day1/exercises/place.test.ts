/*
Run with
> npm install
> npm test place
*/
import { place } from "./place";

describe("When calling the place function", () => {
  // Starting happy test - we will add more
  test("We can place a piece in a column", () => {
    // Arrange
    let board = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    let player = "Mike";
    let column = 1;

    let expectedOutput = [
      [null, null, null, null],
      ["Mike", null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];

    // Act
    let actualOutput = place(board, player, column);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  // When a column has a second / third / fourth piece inserted
  test("We can place 3 piece in a column", () => {
    // Arrange
    let board = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    let player1 = "Mike";
    let player2 = "Sam";
    let player3 = "David";
    let column = 3;

    let expectedOutput = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      ["Mike", "Sam", "David", null],
    ];

    // Act
    let actualOutputMultiple: any = place(board, player1, column);
    actualOutputMultiple = place(actualOutputMultiple, player2, column);
    actualOutputMultiple = place(actualOutputMultiple, player3, column);

    // Assert
    expect(actualOutputMultiple).toStrictEqual(expectedOutput);
  });

  // When unhappy case, column is full and we attempt to put a fifth piece
  test("We can place 5 piece in a column", () => {
    // Arrange
    let board = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ];
    let player1 = "Mike";
    let player2 = "Sam";
    let player3 = "David";
    let player4 = "Daina";
    let player5 = "Rozy";
    let column = 3;

    let expectedOutput = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      ["Mike", "Sam", "David", "Daina"],
    ];

    // Act
    let actualOutputMultiple: any = place(board, player1, column);

    actualOutputMultiple = place(actualOutputMultiple, player2, column);
    actualOutputMultiple = place(actualOutputMultiple, player3, column);
    actualOutputMultiple = place(actualOutputMultiple, player4, column);
    actualOutputMultiple = place(actualOutputMultiple, player5, column);

    // Assert
    if (actualOutputMultiple) {
      expect(actualOutputMultiple).toStrictEqual(expectedOutput);
    } else {
      expect(actualOutputMultiple).toBeUndefined();
    }
  });
});
