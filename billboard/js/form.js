console.log("Hi form js");

// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyjTLq7UVNeXcShr'
});
var base = Airtable.base('appYP6VqCWw0a5wKX');

function redirect() {
  console.log("redirect");
  location.href = 'https://ghostmuji.github.io/interactive/billboard/yes-2.html';
}



 document.getElementById("submit-button").addEventListener("click", function(e) {
   console.log("create_record");

   var response = document.getElementById("response").value;

   
      base('submissions').create([{
                  "fields": {
                      "responses": response
                  }
              }
          ], function(err, records) {
              if (err) {
                  console.error(err);
                  
                  return;
              }
              records.forEach(function(record) {
                  console.log(record.getId());

                  setTimeout(redirect, 1000);
            
              });
          }); 


});

function done() {
    var x = document.getElementById("form");
    x.style.display = "none"
    var y = document.getElementById("submit");
    y.style.display = "flex"
}
