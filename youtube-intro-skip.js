// ==UserScript==
// @name        Youtube Intro Skip
// @namespace   test
// @description Skip the first x seconds of youtube videos
// @include http://www.youtube.com/watch*
// @include https://www.youtube.com/watch*
// @exclude http://www.youtube.com/*#t=*
// @exclude https://www.youtube.com/*#t=*
// @version     1.0
// @grant       none
// ==/UserScript==

/*USAGE
Add the channel name to the array

Sample:
users['TOTO'] = 20;  //skip all videos from TOTO for the first 20 seconds

*/

/* Array of users */
var users = new Object();
users['Channel1'] = 15;
users['Channel2'] = 10;

var timeSet = "#t=0m";
var timeSetSec = "s";

/*Extract the channel name*/
var url = document.URL; //current url on display
var doc = document.getElementsByClassName('g-hovercard yt-uix-sessionlink yt-user-name'); //Get class with names
var name = doc[0].lastChild.data; //Get channel name

if(users[name] != null) //name exist?
        window.location.href = (url + timeSet + users[name] + timeSetSec); //change url and add time to skip
