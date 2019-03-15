import { letRun, ageEarth, ageMercury, ageVenus, ageMars, ageJupiter } from './../src/age.js';

describe('letRun', function() {

  it('should fail if user inputs an non-numerical year', function() {
    let ran = letRun('gbhu');
    expect(ran).toEqual(false);
  });

  it('should pass if user inputs a valid date', function() {
    const ran = letRun('2019');
    expect(ran).toEqual(true);
  });

  it('should fail if user inputs a future year', function() {
    const ran = letRun('2050');
    expect(ran).not.toEqual("Invalid year");
  });

});

describe ('ageEarth', function() {

  it("should return user's age on Earth", function() {
    let age = ageEarth('1999');
    expect(age).toEqual(20);
  });

});

describe ('ageMercury', function() {

  it("should return user's age on Mercury", function() {
    let mercury = ageMercury('20');
    expect(mercury).toEqual(83.33);
  });

});

describe ('ageVenus', function() {

  it("should return user's age on Venus", function() {
    let venus = ageVenus('20');
    expect(venus).toEqual(32.25);
  });

});

describe ('ageMars', function() {

  it("should return user's age on Mars", function() {
    let mars = ageMars('20');
    expect(mars).toEqual(10.64);
  });

});

describe ('ageJupiter', function() {

  it("should return user's age on Jupiter", function() {
    let jupiter = ageJupiter('20');
    expect(jupiter).toEqual(1.69);
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
