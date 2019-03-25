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

  it("should return user's brithday", function() {
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

});






//
// describe ('Triangle', function() {
//   var reusableTriangle;
//
//   beforeEach(function() {
//     reusableTriangle = new Triangle(5,5,5);
//   });
//
//   it ('should show how beforeEach() works', function() {
//     console.log(reusableTriangle);
//   });
//
//   it('should test whether a Triangle has three sides', function() {
//     var triangle = new Triangle(3,4,5);
//     expect(triangle.side1).toEqual(3);
//     expect(triangle.side2).toEqual(4);
//     expect(triangle.side3).not.toEqual(6);
//   });
//
//   it('should correctly determine whether three lengths can be made into a triangle', function(){
//       var notTriangle = new Triangle(3,9,22);
//       expect(notTriangle.checkType()).toEqual("not a triangle");
//   });
//
// });
