console.log("Hi updated js");

// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyjTLq7UVNeXcShr'
});
var base = Airtable.base('appYP6VqCWw0a5wKX');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
// put your table name in the quotes
base('submissions').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

var messages = [];

var flowers = document.getElementsByClassName("user-flower");

var message_counter = 0;

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {
        messages.push(row.fields.responses);
        console.log(messages);

        flowers[message_counter].style.display = "inline";

        message_counter++;




        // uncomment this code to add the description column from the table.
        // const div = document.createElement("div");
        // div.innerText = row.fields.Description;
        // document.body.appendChild(div);

        // uncomment this code to add the images from the table.
        // const image = document.createElement("img");
        // image.src = row.fields.icon[0].url;
        // document.body.appendChild(image);
    })
}



for (var i=0; i<flowers.length; i++) {
    flowers[i].addEventListener("click", show_message);
}

function show_message() {
    console.log("Flower clicked!!!");
    var current_flower = event.target.getAttribute('id');
    console.log(current_flower);
    var current_message = messages[current_flower];
    document.getElementById("message-box").innerHTML = current_message;
    document.getElementById("message-box").style.display = "block";
    document.getElementById("big-box").style.display = "flex";
     document.getElementById("close-button").style.display = "block";

}

function hide_message() {
    document.getElementById("message-box").style.display = "none";
    document.getElementById("big-box").style.display = "none";
    document.getElementById("close-button").style.display = "none";
}

document.getElementById("close-button").addEventListener("click", hide_message);



