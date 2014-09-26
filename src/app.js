var UI = require('ui');

  var sens_card = new UI.Card({
    title: 'Sensors :',
    icon: 'images/temp.png',
    body: 'Room Temp : XX'
  });

      var ajax = require('ajax');
      ajax({ url: 'http://ictrl.home:1110/jva7' },

        function(data) {
            sens_card.body(data);
        }
      );
 
        sens_card.show();
