fetch('api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}',{
    method: 'GET',
    credentials: 'same-origin',
})
//global variables; call out your ID
//list api location globally - will need for current and forecast call out
//event listener to take me to the 1st function
//1st function - validate the input of the search; call out next function and pass search with it
//2nd function - fetch coordinates (geo); within 2nd .then, call out next function and pass through data array[0]
//3rd function - fetching the weather api data; call out 2 functions (current, forecast)