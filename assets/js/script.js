var button = document.querySelector(".btn");
var inputValue = document.querySelector(".form-input");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var weatherAPI =  "api.openweathermap.org/data/3.0/onecall?lat=38.8&lon=12.09&callback=test"

button.addEventListener('click', function (){
    fetch (weatherAPI)
        .then(function(response){
            if (response.ok) {
                console.log(response);
            }else{ alert("invalid city")}
        });
});
