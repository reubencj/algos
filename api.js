// async function getGitHubApi() {
//   response = await fetch("https://api.github.com/users/reubencj");

//   coderData = await response.json();

//   return coderData;
// }

// console.log(getGitHubApi());
import fetch from "node-fetch";

// fetch(
//   "http://api.openweathermap.org/geo/1.0/zip?zip=94086,US&appid=10948f0d653fbd696af70c1ae650d971"
// )
//   .then((response) => response.json())
//   .then((coderData) => console.log(coderData))
//   .catch((err) => console.log(err));

async function getLoc() {
  let apiKey = "10948f0d653fbd696af70c1ae650d971";
  let response = await fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=94086,US&appid=${apiKey}`
  );

  let sunnyvale = await response.json();
  console.log(sunnyvale);

  let weatherResponse = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${sunnyvale.lat}&lon=${sunnyvale.lon}&appid=${apiKey}&units=imperial`
  );

  let weatherData = await weatherResponse.json();
  console.log(weatherData);
}

getLoc();
