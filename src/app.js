var UI = require('ui');
var Vector2 = require('vector2');
var wind = new UI.Window({action: {backgroundColor : 'black'}});
var ajax = require('ajax');
var Accel = require('ui/accel'); Accel.init();

var date_data = new UI.TimeText ({position: new Vector2(25, 25), size: new Vector2(144, 168), font: 'gothic-28', text: '%d/%m %a'}); wind.add(date_data);
var time_data = new UI.TimeText ({position: new Vector2(45, -4), size: new Vector2(144, 168), font: 'gothic-28-bold', text: '%H:%M'}); wind.add(time_data);
var sens_data = new UI.Text     ({position: new Vector2(10, 60), size: new Vector2(144, 168), font: 'gothic-18', text: ''}); wind.add(sens_data);

Accel.on('tap', function(e) {
  refresh_sensors();
  console.log('Tap event on axis: ' + e.axis + ' and direction: ' + e.direction);
});


function refresh_sensors(e)
{
  ajax({ url: 'http://www.nevicom.ru/cgi-bin/jva6', type: 'json' },
    function(data) {sens_data.text("Room       : " + data.room_th + "\nOut            : " + data.out_th + "\nBath         : " + data.bath_th + "\nKitchen    : " + data.kitch_th + "\nDoor I/O  : " + data.door_in + "/" + data.door_out);}
  );
}

wind.show();

refresh_sensors();
