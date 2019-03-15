export function letRun(year) {
  const today = new Date();
  const currYear = today.getFullYear();
  const validYear = /[0-9]+/g;
  if (year.match(validYear)) {
    return true;
  } else if ((year.match(validYear)) > currYear){
    return "Invalid year"
  } else {
    return false;
  }
}

export function ageEarth() {
  const today = new Date();
  const currYear = today.getFullYear();
  let dob = 1999;
  const age = currYear - dob;
  return age;
}

// class planetAge {
//   constructor(mercury, venus, mars, jupiter){
//     this.mercury = mercury;
//     this.venus = venus;
//     this.mars = mars;
//     this.jupiter = jupiter;
//   }
//
//   ageMercury(){
//     let mercury = (ageEarth()/.24).toFixed(2);
//     this.mercury = mercury;
//   }
//
// }
