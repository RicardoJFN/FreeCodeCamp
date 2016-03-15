/**
 * Created by ricardon on 08-03-2016.
 */

$(document).ready(function(){

    $('#main').hide();
    $('#container').hide();
    $('#first_image').hide();
    $('#pic').hide();

    setTimeout(function(){
        $('#container').fadeIn(2000);
    }, 2000);

    $(window).load(function (){
       $('#first_image').slideDown(1500);
    });

    $('#teste').click(function(){
        $('#container').fadeOut(2000);
        setTimeout(function(){
            $('#first_image').slideUp(2000);
        },2500)
        setTimeout(function(){
            $('#main').fadeIn(2000);
        },5000);
        setTimeout(function (){
            $('#pic').fadeIn(2000);
        }, 5000);
        getWeatherFa();

    });

    $('#hexagon').click(function(){
        $('#container').fadeOut(2000);
        setTimeout(function(){
            $('#first_image').slideUp(2000);
        },2500)
        setTimeout(function(){
            $('#main').fadeIn(2000);
        },5000);
        setTimeout(function (){
            $('#pic').fadeIn(2000);
        }, 5000);
        getWeatherCe();

    });

});


function getWeatherFa(){

    var latitude, longitude, tempF;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=1bb31ee2e36c9b127c53131059993f90", function(json){
                tempF = Math.round(json.main.temp * (9/5) - 459.67);
                $('#main').html("<p>The Temperature in " + json.name + " is:  "+ tempF + " ºF. " + "The weather description is  " + json.weather[0].description.toLowerCase() +". " + "</p>");


                switch (json.weather[0].id){
                    case 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/01d.png");
                        break;
                    case 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/04d.png");
                        break;
                    case 500 || 501|| 502 || 503 ||504 || 511 || 520 || 521 || 522 || 531:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/03d.png");
                        break;
                    case 600 || 601 || 602 || 611 || 612 || 615 || 616 || 620 || 621 || 622:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/04d.png");
                        break;
                    case 701 || 711 || 721 || 731 || 741 || 751 || 761 || 762 || 771 || 781:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/09d.png");
                        break;
                    case 800:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/10d.png");
                        break;
                    case 801 || 802 || 803 || 804:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/11d.png");
                        break;
                    case 900 || 901 || 902 || 903 || 904 || 905 || 906:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/13d.png");
                        break;
                    case 951 || 952 || 953 || 954 || 955 || 956 || 957 || 958 || 959 || 960 || 961 || 962:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/50d.png");
                        break;
                }
            });


        });
    }

}

function getWeatherCe(){

    var latitude, longitude, tempC;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=1bb31ee2e36c9b127c53131059993f90", function(json){
                tempC = Math.round(json.main.temp - 273.15);
                $('#main').html("<p>The Temperature in " + json.name + " is:  "+ tempC + " ºC. " + "The weather description is  " + json.weather[0].description.toLowerCase() +". " + "</p>");


                switch (json.weather[0].id){
                    case 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/01d.png");
                        break;
                    case 300 || 301 || 302 || 310 || 311 || 312 || 313 || 314 || 321:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/04d.png");
                        break;
                    case 500 || 501|| 502 || 503 ||504 || 511 || 520 || 521 || 522 || 531:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/03d.png");
                        break;
                    case 600 || 601 || 602 || 611 || 612 || 615 || 616 || 620 || 621 || 622:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/04d.png");
                        break;
                    case 701 || 711 || 721 || 731 || 741 || 751 || 761 || 762 || 771 || 781:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/09d.png");
                        break;
                    case 800:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/10d.png");
                        break;
                    case 801 || 802 || 803 || 804:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/11d.png");
                        break;
                    case 900 || 901 || 902 || 903 || 904 || 905 || 906:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/13d.png");
                        break;
                    case 951 || 952 || 953 || 954 || 955 || 956 || 957 || 958 || 959 || 960 || 961 || 962:
                        $('#pic').css('background-image', "url(http://openweathermap.org/img/w/50d.png");
                        break;
                }



            });


        });
    }

}


//20604ACCL05
