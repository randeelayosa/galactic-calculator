import { letRun, calcAge, calcPlanets } from './../src/age.js';

describe('letRun', function() {

  it('should fail if user inputs an non-numerical year', function() {
    let ran = letRun('gbhu');
    expect(ran).toEqual(false);
  });

  it('should pass if user inputs a valid date', function() {
    const ran = letRun('age19');
    expect(ran).toEqual(true);
  });

  it('should fail if user inputs a future year', function() {
    const ran = letRun('2050');
    expect(ran).not.toEqual("Invalid year");
  });

});

describe ('calcAge', function() {

  it("should return user's birthday", function() {
    let age = calcAge('03/14/1999');
    expect(age).toEqual(20);
  });

});

describe ('calcPlanets', function() {

  it("should the user's age on mercury", function() {
    let planets = calcPlanets(20);
    expect(planets[0]).toEqual("83.33");
  });

  it("should the user's age on venus", function() {
    let planets = calcPlanets(20);
    expect(planets[1]).toEqual("32.26");
  });

  it("should the user's age on mars", function() {
    let planets = calcPlanets(20);
    expect(planets[2]).toEqual("10.64");
  });

  it("should the user's age on jupiter", function() {
    let planets = calcPlanets(20);
    expect(planets[3]).toEqual("1.69");
  });

  it("should the user's amount of life left on earth", function() {
    let planets = calcPlanets(20);
    expect(planets[4]).toEqual(59);
  });

  it("should the user's amount of life left on mercury", function() {
    let planets = calcPlanets(20);
    expect(planets[5]).toEqual("244.67");
  });

  it("should the user's amount of life left on venus", function() {
    let planets = calcPlanets(20);
    expect(planets[6]).toEqual("96.14");
  });

  it("should the user's amount of life left on mars", function() {
    let planets = calcPlanets(20);
    expect(planets[7]).toEqual("31.36");
  });

  it("should the user's amount of life left on jupiter", function() {
    let planets = calcPlanets(20);
    expect(planets[8]).toEqual("4.96");
  });

});
