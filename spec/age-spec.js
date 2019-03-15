import { letRun, ageEarth, planetAge } from './../src/age.js';

describe('letRun', function() {

  it('should fail if user inputs an non-numerical year', function() {
    const ran = letRun('gbhu');
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

  it("should return user's age on earth", function() {
    const age = ageEarth('1999');
    expect(age).toEqual(20);
  });

});

// describe ('planetAge', function() {
//
//   it("should return user's age on Mercury", function() {
//     const ageMer = ageMercury('20');
//     expect(mercury).toEqual(83.33);
//   });
//
// });
