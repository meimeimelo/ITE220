//use (e) to stop the event
//units=metric to call celsius
//&units=imperial to call fahrenheit
$(function(){
  $("#bkk").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#bkkinfo").html(" Weather humidity: " + data.main.humidity + "% <br>" + "Wind Speed: " + data.wind.speed + " meter/sec <br>" + "  Cloudiness: " + data.clouds.all + "%" + "<br>");
      }
    });
  });

  $("#bkkcelsius").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#bkkcelsius").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });

  //&units=imperial to call fahrenheit
  $("#bkkfahren").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=bangkok&units=imperial&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#bkkfahren").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });
  //end of bkk

  //Tokyo
  $("#tk").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=tokyounits=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#tkinfo").html(" Weather humidity: " + data.main.humidity + "% <br>" + "Wind Speed: " + data.wind.speed + " meter/sec <br>" + "  Cloudiness: " + data.clouds.all + "%" + "<br>");
      }
    });
  });

  $("#tkcelsius").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#tkcelsius").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });

  $("#tkfahren").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=imperial&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#tkfahren").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });

  //end of Tokyo info

  //London
  $("#ld").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#ldinfo").html(" Weather humidity: " + data.main.humidity + "% <br>" + "Wind Speed: " + data.wind.speed + " meter/sec <br>" + "  Cloudiness: " + data.clouds.all + "%" + "<br>");
      }
    });
  });

  $("#ldcelsius").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#ldcelsius").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });

  $("#ldfahren").on("click", function(e){
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=london&units=imperial&appid=f46702ab644a229072150b9511bab04f',
      success: function(data){
        console.log(data);
        $("#ldfahren").html(data.name + "  " + data.main.temp + "<br>");
      }
    });
  });
});
