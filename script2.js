/**
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Your Full Name.
*/


$(document).ready(function (){
    $("#convertBtn").click(function(){
        var farenheigh = parseFloat($("#temperature").val());

        if(!isNaN(farenheigh)){
            var celsiusTemp = (farenheigh - 32) * (5/9);

            var kelvinTemp = celsiusTemp + 273.15;

            $("#celsiusResult").text("Temperature in Celsius: " + celsiusTemp.toFixed(2) + " °C");
            $("#kelvinResult").text("Temperature in Kelvin: " + kelvinTemp.toFixed(2) + " K");
        }else {
            errorMessageDiv.text("Please enter a valid temperature in Fahrenheit.");
        }
    })
})