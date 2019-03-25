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
  const mercury = (earth / .24).toFixed(2);
  const venus = (earth / .62).toFixed(2);
  const mars = (earth / 1.88).toFixed(2);
  const jupiter = (earth / 11.86).toFixed(2);
  const earthLife = (79 - age);
  const mercuryLife = (328 - mercury).toFixed(2);
  const venusLife = (128.4 - venus).toFixed(2);
  const marsLife = (42 - mars).toFixed(2);
  const jupiterLife = (6.65 - jupiter).toFixed(2);
  const planets = [mercury, venus, mars, jupiter, earthLife, mercuryLife, venusLife, marsLife, jupiterLife];
  return planets;
}
