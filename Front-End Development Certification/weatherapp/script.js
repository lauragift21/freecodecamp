function weather(){

	var location = document.getElementById("location");
	var apiKey = '5711315549fc67c705b078882c4c0025';
	var url = 'https://api.darksky.net/forecast/';

	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
  		latitude = position.coords.latitude;
  		longitude = position.coords.longitude;

        location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(data.currently.temperature + '° F' + '/' + '° C');
        $('#minutely').html(data.hourly.summary);
        $('#current-pressure').html(data.currently.pressure + '° F');
        $('#current-uvIndex').html(data.currently.uvIndex);
        // $('#details').html(data.daily.precipType);
        $('#current-icon').html(data.currently.icon );
        // $('#location').html(data.timezone);
      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  weather();


