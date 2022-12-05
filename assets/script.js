// fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}',{
//     method: 'GET',
//     credentials: 'same-origin',
// })

//global variables; call out your id
var searchBtn = document.getElementById("searchBtn");
var currentWeather = document.getElementById("current");
var futureForecast = document.getElementById("forecast");
var searchForm = document.querySelector("#seach-form");
// var nameInputEl = document.querySelector("#userCity");
var listHistoryCity = document.querySelector("#lastSearched");

//add var for city, date, icon, temp, humidity, and wind?
// var weatherDisplay = ['city', 'date', 'icon', 'temperature', 'humidity', 'wind'];

//list api location globally - will need for current and forecast call out
// var apiURL = 'https//api.openweathermap.org/data/2.5/forecast?q=' + inputCity + '&appid={aa626682344e40ff900c726f8e8dda2b}';
// var apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKEY}"
// var apiKey = ""; //use this to insert into links?

//1st function - validate the input of the search; call out next function and pass search with it

function citySearch(event) {
  var inputCity = document.getElementById("userCity");
  if (!inputCity.value) {
    //if no input, return
    return;
  }

  // var formSubmit = function (event) {
  event.preventDefault();

  var cityName = inputCity.value.trim();
  console.log(cityName);
  geoLocationByName(cityName);

  inputCity.value = "";
}
// document.getElementById("userCity").addEventListener("input", citySearh);
// console.log("citySearch");

//2nd function - fetch coordinates (geo); within 2nd .then, call out next function and pass through data array[0]
function geoLocationByName(cityName) {
  console.log(cityName);
  // <!-- below converts the geographical coordinates into the names of the nearby locations -->
  var apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=aa626682344e40ff900c726f8e8dda2b`;

  fetch(apiURL)
    //after .then, there are () where you enter actions. Res is the object of the data. Will now need to return so the machine can read it.
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //data is an object array
      if (!data[0]) {
        alert("Location not found.");
      } else {
        // historyCities(cityName)
        getWeather(data[0]);
        console.log(data[0]);
      }
    });
}
function getWeather(location) {
  console.log(location);
  var { lat, lon } = location;
  var city = location.name;
  console.log(location.name);

  //backticks instead of concatenation for links
  var apiURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=aa626682344e40ff900c726f8e8dda2b`;

  fetch(apiURL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //calling out city and data (which is all the weather)
      renderWeather(city, data);
    });
}

function renderWeather(city, data) {
  console.log(city);
  console.log(data);
  currentLocationWeather(city,data.list[0], data.timezone);
  futureLocationWeather(data.list, data.timezone);
}
//3rd function - fetching the weather api data; call out 2 functions (current, forecast)
//passing through 2 things (weather =data.list and data.timezone)
function currentLocationWeather (city, weather) {
  //list the date
  //identify the data we are calling; ex: var temp = ;
  var temp = (list.main.temp);
  var humidity = (list.main.humidity);
  var wind = (list.wind.speed);

}

function futureLocationWeather (weather){
  console.log(weather);
}


//dynamically create your card (search for card in bootstrap) <p class="card-text">
//add title: 5 day forecast - call data.list forecast.weather.temp
//run for loop through forecast.length; call out card that creates one card at a time. label everything var label


// saving city to search history:
$("#searchBtn").on("click", function () {
  //need to target the value in the input field
  var userText = $(this).parent().attr("class");
  // console.log(userText);
  var searchedCity = $(this).siblings("#userCity").val();
  //need to do a DOM traversal to move where we want within the html
  localStorage.setItem(userText, searchedCity);
});

// $('#userCity').val(localStorage.getItem('.searchBox'));
// console.log('');

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
//calling out citySearch function
searchBtn.addEventListener("click", citySearch);
