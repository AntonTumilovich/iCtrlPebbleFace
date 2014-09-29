var UI = require('ui');
var Vector2 = require('vector2');
var wind = new UI.Window({action: {backgroundColor : 'black'}});
var ajax = require('ajax');
var Accel = require('ui/accel'); Accel.init();



var date_data = new UI.TimeText ({position: new Vector2(25, 25), size: new Vector2(144, 168), font: 'gothic-28', text: '%d/%m %a'}); wind.add(date_data);
var time_data = new UI.TimeText ({position: new Vector2(45, -4), size: new Vector2(144, 168), font: 'gothic-28-bold', text: '%H:%M'}); wind.add(time_data);
var sens_data = new UI.Text     ({position: new Vector2(10, 60), size: new Vector2(144, 168), font: 'gothic-18', text: ''}); wind.add(sens_data);

Accel.on('tap', function(e) {refresh_sensors();});


function refresh_sensors(e)
{
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  ajax(
    {url: 'http://ictrl.home:1110/jva6', type: 'json' },
    function(data) 
    {
      setTimeout(function() {
      sens_data.text("Room       : " + data.room_th + "\nOut            : " + data.out_th + "\nBath         : " + data.bath_th + "\nKitchen    : " + data.kitch_th + "\nDoor I/O  : " + data.door_in + "/" + data.door_out + "\nRefresh   : " + hours + ":" + minutes + ".");
      }, 6000);
      sens_data.text("Room : " + data.room_l + "\nHall : " + data.hall_l + "\nToal : " + data.toal_l + "\nBath L/F : " + data.bath_l + "/" + data.bath_f + "\nKitch L/F: " + data.kitch_l + "/" + data.kitch_f);
    },
    function() {ajax({ url: 'http://www.nevicom.ru/cgi-bin/jva6', type: 'json' }, function(data) {sens_data.text("Room       : " + data.room_th + "\nOut            : " + data.out_th + "\nBath         : " + data.bath_th + "\nKitchen    : " + data.kitch_th + "\nDoor I/O  : " + data.door_in + "/" + data.door_out + "\nRefresh   : " + hours + ":" + minutes);});}
  );
}



setTimeout(function() {
  // Display the mainScreen
sens_data.text
}, 400);


wind.show(); refresh_sensors();

