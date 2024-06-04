# Fizz Run

Link to Game: [Fizz Run](https://fizz-run.firebaseapp.com/final-product/dist/index.html)
### Introduction

This document describes a game called "Fizz Run", which is designed to be a simple, 2D side-scroller, puzzle game. The game will employ sprite-based animation, tiled backgrounds, collision detection, physics, AI, and side scrolling

### Technology

Fizz Run will be developed for the Windows Platform using the Wolfie2D game engine, which is a bare-bones engine developed by Richard McKenna for rapidly prototyping 2D games. WebGL will be used as the underlying rendering technology. BeepBox and Chiptone will be used for all music and sound effects management. Artwork and assets will be made with Piskel.

### Backstory

Coca-Cola, Fanta, and Sprite are having a fun time exploring Sodaopolis when Baron Vender, the leader of the Vending Machines invades the city and kidnaps Fanta and Sprite to keep as hostages.

### Objective

Coca-Cola’s task is to save his friends and defeat Baron Vender by going through 6 different platforming puzzles staged in the urban sprawl of Sodaopolis. He has to use his abilities to break and move blocks around to get to the end of the stage while avoiding obstacles set by Baron Vender.

In the first 4 levels you will save all of your friends, and as you save them it will allow you to switch them in said levels to help you solve the puzzles in new and interesting ways.

### Gameplay

The game will work like a side scroller, with Coca-Cola and friends being able to run left and right, and jump up or down onto platforms and other surfaces such that we may scroll up and down.

Coca-Cola and friends will all act similarly except for their unique skill that can be used by the player to complete each puzzle. The unique skills are the following:

-   Coca-Cola: Throws a cola bomb that blinds enemies.
-   Fanta: Can summon a healing bubble that also protects the sprite from projectiles
-   Sprite: Shoots out lemon particles and deals slow acidic damage to enemies. Can also corrode cracked walls.  
    To change characters the player has to press the “F” key and they will be allowed to switch with no restriction.

There also exists powerups across each level such as:

-   Mentos: Increases the fizz meter of the sprite. If full, a countdown will start before unleashing a giant explosion. This explosion breaks walls and one shots all enemies on screen
-   Sugar: Increase the movement speed of the sprite for a certain amount of time.
-   Ice: Can make the drink icy and freeze water when it walks over it. Also increases damage for a certain amount of time.  
    There exists multiple different types of obstacles and enemies that prevent the player from reaching the destination that the sprite must interact with or maneuver around:

-   Water pools: Insta kills the player unless they have the Ice powerup
-   Cracked walls
-   Security guards
-   Lasers
-   Boxes
-   Pressure Plates  
    The abilities of the characters affect these obstacles and enemies

### Controls

This game will be played using both a keyboard and mouse. Once started, use the following:

-   A - Move Left
-   D - Move Right
-   LEFT-ARROW - Move Left (same as A)
-   RIGHT-ARROW - Move Right (same as D)
-   SPACE - Jump
-   F Character selection. It will cycle between the characters as you press it.
-   ESC - This pauses the game and presents a pop-up window to the player displaying buttons to resume or quitting back to the title screen.

### Graphical User Interface 

-  Splash Screen - The splash screen GUI simply presents a game logo and a Start button for the user to press when they are ready to play. Upon pressing it, a brief scripted sequence is played explaining the backstory for the game. While playing the message "Press ESC to Skip'' should be displayed at the bottom of the screen. If pressed, the game should immediately start.

-  Main Menu - This menu will have a select level button, a controls button, and a help button.

-  Level Selection Screen - This screen will list all the levels playable in the game. However, the player can only play a level when they completed the prior one first. When the player first plays the game, only level 1 is unlocked and the 5 other levels are locked.

-  In-Game Menu - When a player is playing a level, the ESC key can be pressed to pause the game. The pause menu will have the following buttons:
Restart game - If pressed, the current level will be restarted.
Display Controls - If pressed, the game will display an info screen that includes a description of all game controls (keyboard and mouse).
Help - If pressed, the game will display information about the game (like obstacle information) and the creators.
Main Menu - If pressed, the level will be abandoned and the game will return to the main menu.

-  In-Game GUI - Once a level starts, Coca-cola will be seen at the level spawn. As the sprite moves around, the viewport will follow it. This may reveal several obstacles and enemies that exist on the level map. While playing the following will be displayed at all times:
Health Remaining Bar
Fizz Meter Bar
In addition, a small HUD will be shown to show which soda flavor is currently selected as the sprite. Next to it, the abilities will be shown with their logo and cooldown if there is one at the moment.