import $ from 'jquery';
import './sass/styles.scss';
import { letRun, calcAge, calcPlanets } from './age.js';

$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    let userBirthday = $("#birthday").val();
    const userAge = calcAge(userBirthday);
    const planetAge = calcPlanets(userAge);
    // const allPlanets = [earth, mercury, venus, mars, jupiter];
    // if (planetAge<lifeLeft) {
    //   for (i=3; i<allPlanets.length; i++) {
    //     let moreLife = "an estimated " + allPlanets[i] + " left to live!";
    //     console.log(moreLife);
    //   }
    // } else if (planetAge===lifeLeft) {
    //     let moreLife = "lived up to your expected age of existance!"
    //     console.log(moreLife);
    // } else {
    //   for (j=3; j<allPlanets.length; j++){
    //     let moreLife = "surpassed your age of expectancy on this planet by " + allPlanets[j] + "years!"
    //     console.log(allPlanets[4]);
    //   }
    // return moreLife;
    // console.log(moreLife);
    // }
    if (letRun(userBirthday)) {
      // const date = new Date(`${userBirthday}`);
      $(".output").append(`<p>Here on <strong>Earth</strong> you are ${userAge} years old, and have ${planetAge[4]}</p>`);
      $(".output").append(`<p>On <strong>Mercury</strong> you are ${planetAge[0]} years old, and have ${planetAge[5]}</p>`);
      $(".output").append(`<p>On <strong>Venus</strong> you are ${planetAge[1]} years old, and have ${planetAge[6]}</p>`);
      $(".output").append(`<p>On <strong>Mars</strong> you are ${planetAge[2]} years old, and have ${planetAge[7]}</p>`);
      $(".output").append(`<p>On <strong>Jupiter</strong> you are ${planetAge[3]} years old, and have ${planetAge[8]}</p>`);
    } else {
      $(".output").text("Invalid Date");
    }
  });
});
