

/*
$(document).ready(() => {
  $('#homeS-buttons').click(() => {
   
   var morph_api_url = 'https://api.morph.io/chrisguags/ratemyprofessors/data.json';
	var morph_api_params = {
  // Keep this key secret!
  	key: '7ECe3qkmbUlSNJsGBusV',
  	query: "select * from "data" limit 10"
	};

    console.log('making ajax request to:', requestURL);




    /*$.ajax({
  url: morph_api_url + '?' + $.param(morph_api_params),
  dataType: 'jsonp',
  success: function(data) {
    console.log('received data: ' + JSON.stringify(data));
    res.send(JSON.stringify(data))

  }
});
