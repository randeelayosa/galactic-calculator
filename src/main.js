import $ from 'jquery';
import './sass/styles.scss';
import { letRun, calcAge, calcPlanets } from './age.js';

$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    let userBirthday = $("#birthday").val();
    const userAge = calcAge(userBirthday);
    const planetAge = calcPlanets(userAge);
    if (letRun(userBirthday)) {
      $(".earthOutput").append(`<p>Here on <strong>Earth</strong> you are ${userAge} years old, and have ${planetAge[4]} years left to live on this planet!</p>`);
      $(".mercuryOutput").append(`<p>On <strong>Mercury</strong> you are ${planetAge[0]} years old, and have ${planetAge[5]} years left to live on this planet!</p>`);
      $(".venusOutput").append(`<p>On <strong>Venus</strong> you are ${planetAge[1]} years old, and have ${planetAge[6]} years left to live on this planet!</p>`);
      $(".marsOutput").append(`<p>On <strong>Mars</strong> you are ${planetAge[2]} years old, and have ${planetAge[7]} years left to live on this planet!</p>`);
      $(".jupiterOutput").append(`<p>On <strong>Jupiter</strong> you are ${planetAge[3]} years old, and have ${planetAge[8]} years left to live on this planet!</p>`);
      $(".userInput").hide();
      $(".outputContainer").show();
    } else {
      $(".output").text("The date you have entered is invalid. Please try again.");
    }
  });
});
