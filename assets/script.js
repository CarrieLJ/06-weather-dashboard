// fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}',{
//     method: 'GET',
//     credentials: 'same-origin',
// })

//global variables; call out your id
var searchBtn = document.getElementById("searchBtn");
// console.log("searchBtn");
var currentWeather = document.getElementById("current");
// console.log("current");
var futureForecast = document.getElementById("forecast");
// console.log("forecast");
var searchForm = document.querySelector("#seach-form");

//add var for city, date, icon, temp, humidity, and wind?
var weatherDisplay = ['city', 'date', 'icon', 'temperature', 'humidity', 'wind'];


//list api location globally - will need for current and forecast call out
var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKEY}"
var apiKey = ""; //use this to insert into links?



//1st function - validate the input of the search; call out next function and pass search with it
function citySearch() {
  var inputCity = document.getElementById("userCity");
  if (!inputCity.checkValidity()) {

  }
  // document.getElementById("userCity").addEventListener("input", citySearh);
  // console.log("citySearch");
};

//2nd function - fetch coordinates (geo); within 2nd .then, call out next function and pass through data array[0]
// fetch('https//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={apiKEY}', {
//   method: 'GET',
//   credentials: 'same-origin',
//   redirect: 'follow',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//3rd function - fetching the weather api data; call out 2 functions (current, forecast)
// fetch('https//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={apiKEY}', {
//   method: 'GET',
//   credentials: 'same-origin',
//   redirect: 'follow',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// saving city to search history:
$('#searchBtn').on('click', function(){
  //need to target the value in the input field
      var userText = $(this).parent().attr('class');
      // console.log(userText);
      var searchedCity = $(this).siblings('#userCity').val();
  //need to do a DOM traversal to move where we want within the html
      localStorage.setItem(userText, searchedCity);
});

$('#userCity').val(localStorage.getItem('.searchBox'));
console.log('');


// button.addEventListener('click', function(){
//   fetch('https//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}', {
//     response.json().then((data) {
//       var latitude = data.cord.latitude
//       var longitude = data.cord.longitude
//     })
//   })
//   method: 'GET',
//   credentials: 'same-origin',
//   redirect: 'follow',
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
// });

//event listener to take me to the 1st function
// $('#searchBtn').on('click', function() {  

// })

