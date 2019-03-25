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
      const date = new Date(`${userBirthday}`);
      $(".output").text(`Here on Earth you are ${userAge} years old.`);
      $(".output").append(`<p>On <strong>Mercury</strong> you are ${planetAge[0]} years old.</p>`);
      $(".output").append(`<p>On <strong>Venus</strong> you are ${planetAge[1]} years old.</p>`);
      $(".output").append(`<p>On <strong>Mars</strong> you are ${planetAge[2]} years old.</p>`);
      $(".output").append(`<p>On <strong>Jupiter</strong> you are ${planetAge[3]} years old.</p>`);
    } else {
      $(".output").text("Invalid Date");
    }
  });
});


//added outputs to append
