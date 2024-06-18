import { add } from "./add";
describe("test add", () => {
  let result: number;
  beforeEach(() => {
    result = add(3, 5);
  });
  it("add two numbers", () => {
    expect(result).toBe(8);
  });
});

describe("test add wrong", () => {
  let result: number;
  beforeEach(() => {
    result = add(31, 5);
  });
  it("add two numbers", () => {
    expect(result).toBe(40 - 4);
  });
});

describe("test add negative", () => {
  let result: number;
  beforeEach(() => {
    result = add(-3, -5);
  });
  it("add two numbers", () => {
    expect(result).toBe(-8);
  });
});
