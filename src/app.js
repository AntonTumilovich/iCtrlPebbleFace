var UI = require('ui');
var Vector2 = require('vector2');
var wind = new UI.Window();
var ajax = require('ajax');


// font: 'gothic-14-bold',

var date_data = new UI.TimeText ({
 position: new Vector2(25, 25),
 size: new Vector2(144, 168),
 font: 'gothic-28'
});

var time_data = new UI.TimeText ({
 position: new Vector2(45, -4),
 size: new Vector2(144, 168),
 font: 'gothic-28-bold'
});

var sens_data = new UI.Text({
 position: new Vector2(10, 60),
 size: new Vector2(144, 168),
 font: 'gothic-18'
});






function refresh_sensors(e){
ajax({ url: 'http://www.nevicom.ru/cgi-bin/jva6', type: 'json' },
  function(data)
    {
      sens_data.text("Room       : " + data.room_th + "\nOut            : " + data.out_th + "\nBath         : " + data.bath_th + "\nKitchen    : " + data.kitch_th + "\nDoor I/O  : " + data.door_in + "/" + data.door_out);
    }
  );
}

date_data.text('%d/%m %a'); time_data.text('%H:%M');

refresh_sensors();

sens_data.borderColor('black'); time_data.borderColor('black'); date_data.borderColor('black');

wind.add(sens_data); wind.add(time_data); wind.add(date_data);

wind.show();

