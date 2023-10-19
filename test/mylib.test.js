// test/mylib.test.js
const chai = require("chai");
const assert = chai.assert;
const mylib = require("../src/mylib");

describe("mylib", () => {
  before(() => {
    // This function runs before all tests in this suite
  });

  after(() => {
    // This function runs after all tests in this suite
  });

  describe("add", () => {
    it("should add two numbers", () => {
      assert.equal(mylib.add(5, 3), 8);
    });
  });

  describe("subtract", () => {
    it("should subtract two numbers", () => {
      assert.equal(mylib.subtract(9, 2), 7);
    });
  });

  describe("multiply", () => {
    it("should multiply two numbers", () => {
      assert.equal(mylib.multiply(9, 3), 27);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      assert.equal(mylib.divide(50, 5), 10);
    });

    it("should throw an error for division by zero", () => {
      assert.throws(() => {
        mylib.divide(5, 0);
      }, "ZeroDivision: Division by zero is not allowed.");
    });
  });
});
