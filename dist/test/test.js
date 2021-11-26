"use strict";
var expect = require("chai").expect;
it("should square root number correctly", function () {
    expect(Math.sqrt(225)).to.equals(15);
});
it("should square root number incorrectly", function () {
    expect(Math.sqrt(169)).to.equals(12);
});
it("should factorial number correctly", function () {
    var fact = 1;
    for (var i = 2; i <= 6; i++)
        fact *= i;
    expect(fact).to.equals(720);
});
it("should factorial number incorrectly", function () {
    var fact = 1;
    for (var i = 2; i <= 6; i++)
        fact *= i;
    expect(fact).to.equals(120);
});
it("should natural log number correctly", function () {
    expect(Math.log(Math.E)).to.equals(1);
});
it("should natural log number incorrectly", function () {
    expect(Math.log(Math.E)).to.equals(2);
});
it("should exponetial number correctly", function () {
    expect(Math.pow(2, 10)).to.equals(1024);
});
it("should exponetial number incorrectly", function () {
    expect(Math.pow(2, 10)).to.equals(1000);
});
