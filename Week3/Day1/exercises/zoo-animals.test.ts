/*
Run this with
> npm install
> npm test zoo-animals
*/

import { addDolphinToPool, petThePenguins, AnimalInfo } from "./zoo-animals";

describe("When adding a dolphin to the pool", () => {
  test("And speed is over 30 we get Speedy Alice", () => {
    // Arrange
    let expected = "Speedy Alice";

    // Act
    let result = () => addDolphinToPool(31);

    // Assert
    // Hint: expect.objectContaining on name only
    expect(result()).toEqual(expect.objectContaining({ name: expected }));
  });

  test("And speed is under 30 we get Slow Bob", () => {
    // Arrange
    let expected = "Slow Bob";

    // Act
    let result = () => addDolphinToPool(29);

    // Assert
    // Hint: expect.objectContaining on name only
    expect(result()).toEqual(expect.objectContaining({ name: expected }));
  });

  test("Speedy Alice is a fast mammal with two flippers", () => {
    // Arrange
    let expected = "Speedy Alice";
    let speed = 31;

    // Act
    let result = () => addDolphinToPool(speed);

    // Assert
    // Hint: toStrictEqual the whole object
    expect(result()).toStrictEqual({
      name: expected,
      flippers: 2,
      mammal: true,
      swimSpeedKph: speed,
    });
  });

  test("Slow Bob is a slow mammal with two flippers", () => {
    // Arrange
    let expected = "Slow Bob";
    let speed = 27;

    // Act
    let result = () => addDolphinToPool(27);

    // Assert
    // Hint: toStrictEqual the whole object
    expect(result()).toStrictEqual({
      name: expected,
      flippers: 2,
      mammal: true,
      swimSpeedKph: speed,
    });
  });
});

describe("When petting the penguins", () => {
  test("One penguin with one fish will be fed", () => {
    // Arrange
    let penguins = 25;
    let fishes = 25;

    // Act
    let result = (): AnimalInfo[] => petThePenguins(penguins, fishes);

    // Assert
    // Hint: toStrictEqual the whole array
    expect(result().every((m) => m.hungry === false)).toStrictEqual(true);
  });

  test("One penguin with no fish will be hungry", () => {
    // Arrange
    let penguins = 25;
    let fishes = 24;

    // Act
    let result = (): AnimalInfo[] => petThePenguins(penguins, fishes);

    // Assert
    // Hint: toStrictEqual the whole array
    expect(result().some((m) => m.hungry === true)).toStrictEqual(true);
  });

  describe("And there are not enough fish", () => {
    test("At least one penguin will be hungry", () => {
      // Arrange
      let penguins = 29;
      let fishes = 1;

      // Act
      let result = (): AnimalInfo[] => petThePenguins(penguins, fishes);

      // Assert
      // Hint: expect.arrayContaining on one penguin
      expect(result().map((r) => r.hungry)).toEqual(
        expect.arrayContaining([true])
      );
    });
  });
});
