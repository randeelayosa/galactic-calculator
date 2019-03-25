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

export function calcAge(birthday) {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function calcPlanets(age){
  const earth = age;
  console.log(earth);
  const mercury = (earth / .24).toFixed(2);
  console.log(mercury);
  const venus = (earth / .62).toFixed(2);
  console.log(venus);
  const mars = (earth / 1.88).toFixed(2);
  console.log(mars);
  const jupiter = (earth / 11.86).toFixed(2);
  console.log(jupiter);
  const earthLife = (79 - age);
  console.log(earthLife);
  const mercuryLife = (328 - mercury).toFixed(2);
  console.log(mercuryLife);
  const venusLife = (128.4 - venus).toFixed(2);
  console.log(venusLife);
  const marsLife = (42 - mars).toFixed(2);
  console.log(marsLife);
  const jupiterLife = (6.65 - jupiter).toFixed(2);
  console.log(jupiterLife);
  const planets = [mercury, venus, mars, jupiter, earthLife, mercuryLife, venusLife, marsLife, jupiterLife];
  console.log(planets);
  return planets;
}
