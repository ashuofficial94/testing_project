const expect = require("chai").expect;

it("should square root number correctly", () => {
    expect(Math.sqrt(225)).to.equals(15);
});

it("should square root number incorrectly", () => {
    expect(Math.sqrt(169)).to.equals(12);
})

it("should factorial number correctly", () => {
    let fact = 1;
    for (let i = 2; i <= 6; i++) fact *= i;
    expect(fact).to.equals(720);
});

it("should factorial number incorrectly", () => {
    let fact = 1;
    for (let i = 2; i <= 6; i++) fact *= i;
    expect(fact).to.equals(120);
});

it("should natural log number correctly", () => {
    expect(Math.log(Math.E)).to.equals(1);
});

it("should natural log number incorrectly", () => {
    expect(Math.log(Math.E)).to.equals(2);
});

it("should exponetial number correctly", () => {
    expect(Math.pow(2, 10)).to.equals(1024);
});

it("should exponetial number incorrectly", () => {
    expect(Math.pow(2, 10)).to.equals(1000);
});