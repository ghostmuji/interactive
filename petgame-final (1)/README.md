this is the markdown file for [all about love: a virtual petgame simulator]

my project is a simple web game coded in HTML and JavaScript where you take care of a virtual pet by interacting with 6 items and the pet. the goal is to keep the health and happiness bars from falling too low, though there are some funny reactions and a sad death scene if that happens.

here's a video showing it inaction: https://youtu.be/HXTMjKL8R-Y
---------
// start.html
the user should begin by cd-ing into the petgame folder(where all the files for this game are contained). they will be greeted by a blurb from me about the concept behind the game, and some brief instructions on the game. upon clicking on the start button, the user will be redirected to index.html

//index.html
this is where majority of the gameplay happens. the user can feed/play with the pet by clicking on the items in the inventory bars (which themselves are just images). on hover, a border will appear around the item the user has selected, and clicking the item will "eat/play" the item. the user will see an animation of the item (done by iterating through a series of static images with a for loop in JS), and depending on the item, the happiness or health bar will increase by 1. each item interaction should take no more than 5 seconds to run. you can also "tickle" your pet by clicking on it, which will cause happiness will increase by 1.

the health and happiness bars naturally deplete over time, health depleting by 1 heart every 20 seconds, and happiness depleting by 1 star every 30 seconds. as health and happiness increases/decreases, the pet's expression will change accordingly. see objects-reactions.png for a more detailed chart of which expressions correspond to which health and happiness values. if health falls below 5, the user will be warned 3 times by a little sign displaying on screen, with a reminder/hint on what to do to increase the pet's health. it will disapear when the user clicks anywhere on screen. however, after 3 times, the user will no longer receive any warnings. if health continues to fall and reaches 3, a little sign with "..." will appear, judging the user for neglecting the pet. the same actions occur for happiness levels falling, though the user gets 4 warnings for that. i've coded it so that a message should appear only when health/happiness falls BELOW 5, not if a user is feeding its pet and raises health/happiness TO 5.

if health and happiness are both > 7, a quote about love will be displayed the next time the user feeds/plays with the pet.

if the pet's health or happiness reaches 0, the user will have killed the pet and receive an alert telling them so. they will then be redirected to death.html

if health and happiness are both == 11, the user will receive an alert thanking them for taking care of the pet. the game is meant to be played indefinitely so the stat bars will keep depleting even after this point is reached, but it would've been easy to code in a good ending with a redirect page (similar to death) as well. 

also the pet's dancing is animated with key frames. he stops dancing if he is crying, sick, or standing. i made custom pixel art for most elements in the game :-)

//death.html
will display if you kill your pet. gives you the option to restart the game.
----------

my game is pretty simple but i had a fun time making it! there's a lot of hidden functionality for the user to discover as they play, and i wish i had the time to expand on it more and make the page scalable.  but c'est lavie!

-Sarah