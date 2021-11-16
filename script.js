let weather = {
    "apikey":  "7fd3fb8723a9ca0ed8f56fe77710ebf0" ,
    fetchWeather : function (city) {
        fetch(
            " https://api.openweathermap.org/data/2.5/weather?q=" 
            + city
             + "&units=metric&appid="
              + this.appKey

        )
        .then((response)=>response.json())
        .then((data)=>console.log(data));
        },
        displayWheather:function(data){
            
        }
    }; 