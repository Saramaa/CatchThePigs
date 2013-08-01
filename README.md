CatchThePigs
============
In this file are information about Installation instructions, Functionality, Configuration, and a short Analysis.
***************************
See the game in action: http://www.student.bth.se/~kapc12/javascript/CatchThePigs/game/index.php
***************************
Installation instrucations
***************************
1. Clone this repo to a desired loaction on your machine

2. Upload all the files to your server

3. Navigate in a browser to your server files and open the game with the file CatchThePigs/game/index.php

4. Change the files as you wish!

***************************
Functionality
***************************
• Background sound

•	Pause background sound 

•	Soundeffects (when the pig regenerates and when the game start/restart) 

•	Update a textfield displaying points at point of touch of an object (pig)

•	Move the player objekt with the arrow keys

•	Prevent the player and pig object from appearing or moving out of the game bounderies

•	Load the game objects with images

•	When a goal has been reached (ten pigs has been caught) a functionality get trigged (a Game Over-div appears above the game surface)

•	A "restart" functionality that restarts the game when the user clicks a button (in this case the Game Over div)

***************************
Configuration
***************************
To configure parts of the game please follow the instructions below. Also note that the game can work without some of the files in the package and that you also can add new files completely - just keep track of the linking between the files when doing so.

• Configure the game style: CatchThePigs/game/style.less

•	Change the websites style: CatchThePigs/temp/style.less eller CatchThePigs/temp/base.less

•	To change the CatchThePigs-game code: CatchThePigs/game/game.js

•	To edit the index file that contain the game: CatchThePigs/game/index.php

•	In the folder CatchThePigs/js lies the rest of the JavaScript-files that control the websites functionality. When adding new JS-files they also need to be included in CatchThePigs/temp/footer.php amongst the other JS scripts: 

<script src="../js/jquery.js"></script>

<script src="main.js"></script>

<script src="../js/your_new_js_file.js"></script>


•	In the folder ”sound” and ”img” you can continue to build up your sound and image libarary. 


***************************
Analysis
***************************
There are litteraly milions of games out there that are better than my game in functionality and entertainment,
however my code offer several code examples of different functionality. 
This game is far from complete but got great potential to show a thing or two to newbie HTML5 Canvas and JS coders.

Here are some of the competition (some of whom I have learnt a great deal from):

How to make a simple HTML 5 Canvas game
http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

HTML5 game tutorial – Make a snake game using HTML5 Canvas and jQuery
http://thecodeplayer.com/walkthrough/html5-game-tutorial-make-a-snake-game-using-html5-canvas-jquery

Make a particle system in HTML 5 Canvas
http://thecodeplayer.com/walkthrough/make-a-particle-system-in-html5-canvas


Not any of these "games" are entertaining (at least not for long) but they all have a great deal of good code solution to teach, that is easily applied on seperate projects.
