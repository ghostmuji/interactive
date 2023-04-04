this is the design breakdown of my code.

for the sake of time i'll just go through index.html, start.html and death.html are basically just static pages with a single button on them.
overall my design is a little repetitive, and there are definitely ways I could have improved it (such as setting a singular variable to use with SetInterval for consistency across the code rather than changing everything by hand when i was testing things). but honestly i spent most of my time getting html elements to display at the correct timing/just display in the first place since we had not done anything similar to this in class, so i didn't have that much time to optimize it haha.
-------
all html stuff is at the top of index.html, laying out all the elements

1. on line 38 my JavaScript starts, beginning by initializing some variables i'll be using.
2. on line 48 the DOMContentLoaded function starts, which contains all the functions that will be called when the page first loads. health and happiness bars are initialized by printing out a series of images based on the health/happiness value initialized above, in a style similar to how we made pyramids in mario. line 65 and 85 contain the functions that deplete health/happiness over time, which work by calling -1 to mu update functions (see below).

on line 89 is a giant function that constantly checks the health/happiness value of the pet and changes its expression accordingly.

starting on line 118 are two functions, healthalert and happinessalert, that display messages to the player if health or happiness falls below a certain level. these function also contain cases for if you kill your pet/when health or happiness = 0. these functions only work if they are run with setInterval, set to the exact same interval that health/happiness depletes at. the player will only receive 3 and 4 warnings for healthalert and happinessalert respectively, as the functions iterate through a string of messages that get increasingly apathetic until there are none left.

I chose to run all these functions using setIntervals within DOMContentLoaded because i needed them to run consistently throughout the time the page is loaded, and many functions call document elements that do not exist until DOMContentLoaded.

3. updatehealth and updatehappiness update the health and happiness variable everytime the player feeds or plays with their pet via an item or clicking on the pet. they are called by onclick in the html of the img element. they accept an arguement (amount), which can be a negative or positive integer. see index.html for a more detailed breakdown with comments.

4. sendmessage is functions that make a textbox visible and fills it with a message, if the user feeds/plays with their pet with health and happiness are both > 7. the message disapears on click
5. displayhehe is the same thing but for if the user clicks/tickles their pet when health and happiness > 5. message disappears after 2 secs.

6. starting on line 257 is a series of eating animations for each of the items, called when the item is clicked on. it works by iterating through a series of images named 'item1' 'item2' 'item3', etc. i probably could have done a single for loop that retrieves the name of the item from the oncall, but i did not want to spend time figuring it out.

7. random_msg generates a random message from a given array for sendmessage.