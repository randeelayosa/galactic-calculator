export function letRun(year) {
  const today = new Date();
  const currYear = today.getFullYear();
  const validYear = /[0-9]+/g;
  if (year.match(validYear)) {
    return true;
  } else if ((year.match(validYear)) >= currYear){
    return "Invalid year";
  } else {
    return false;
  }
}

export function ageEarth(dob) {
  const today = new Date();
  const currYear = today.getFullYear();
  const age = currYear - dob;
  return age;
}

export function ageMercury(age){
  let mercury = (age / .24).toFixed(2);
  return mercury;
}

export function ageVenus(age){
  let venus = (age / .62).toFixed(2);
  return venus;
}

export function ageMars(age){
  let mars = (age / 1.88).toFixed(2);
  return mars;
}

export function ageJupiter(age){
  let jupiter = (age / 11.86).toFixed(2);
  return jupiter;
}

class Ages function (){
  constructor (a, b){
    this.a = a;
    this.b = b;
    return a / b;
  }

  mercury(){
    this.mercury = 
  }

}


//
//
// export function calcDay(date) {
//   const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//   const weekDay = week[date.getDay()];
//   return weekDay;
// }
//




// Sequence.prototype.checkType = function() {
//   if ((typeof this.num1 === "number") && (typeof this.num2 === "number") && (typeof this.num3 === "number") && (typeof this.num4 === "number")) {
//     return "numbers";
//     if ((typeof this.num5 === "number") && (typeof this.num6 === "number") && (typeof this.num7 === "number") && (typeof this.num8 === "number") && (typeof this.num9 === "number"))
//   } else {
//     false
//   }
// }
// };

// num1, num2, num3, num4, num5, num6, num7, num8, num9
// this.num1 = num1;
// this.num2 = num2;
// this.num3 = num3;
// this.num4 = num4;
// this.num5 = num5;
// this.num6 = num6;
// this.num7 = num7;
// this.num8 = num8;
// this.num9 = num9;


// for (var i=1; i <= 9; i++) {
//   var number = num.concat(i);
//   if (typeof Sequence.number = "number") {
//     true
//   } else {
//     return false
//   }
// }
