(function() {
  "use strict"
  //this defines an array of HTML Elements
  
var Pararray = [];
 Pararray[0] = document.getElementById("bio");
;
 Pararray[2] = document.getElementById("about");
 Pararray[3] = document.getElementById("mission-statement");
 Pararray[4] = document.getElementById("SnapChat");
 Pararray[5] = document.getElementById("Contact");

/*Projects.html*/
 Pararray[1] = document.getElementById("project1");
 Pararray[6] = document.getElementById("sub1");
 Pararray[7] = document.getElementById("project2")
 Pararray[8] = document.getElementById("sub2");
 Pararray[9] = document.getElementById("project3")
 Pararray[10] = document.getElementById("sub3"); 
 Pararray[11] = document.getElementById("proj4");
 Pararray[12] = document.getElementById("sub4");
 //defines your paragraph array
  var paragraphs = [];
  //The data for my pages
  paragraphs [0] = "My Mission statement? I'd say to learn how to properly use chopsticks and code.";
  paragraphs [2] = "My full  name is Hassan Ghassan Kobeissi. I'm Lebanese but a born Canadian. My favourite sports to play is Soccer, Rugby, Kick Boxing and eating all sorts of fast foods.";
  paragraphs [3] = "My current Mission statement? I'd say to learn how to properly use chopsticks and code C#, and Javascript. Long term achievements are to travel for the first timeand win the Muay Thai lightweight championship.";
  paragraphs [4] = "A logo is something that well defines you. It's your calling and what best represents your life. I chose SnapChat as my logo because i live life with memorable moments that are worth sharing.";
  paragraphs [5] = "Please enter your information here and if one day i learn how to make the submit button work, i'll  get back to you.";  
  /*Projects.html*/ 
  paragraphs [1] = "Assignment One";
  paragraphs [6] = "Index.html - Beggining of HTML5 and CSS";
  paragraphs [7] = "Assignment Two";
  paragraphs [8] = "David Suzuki";
  paragraphs [9] = "Assignment Three";
  paragraphs [10] = "Ford Focus RS 2016";
  paragraphs [11] = "Term Project";
  paragraphs [12] = "Real Estate Agency (ScreenShot)";
  
  //second way to define an array
  //var paragraph = new  array();
  //checks to see if paragraph one exists
   for (var index = 0; index < Pararray.length; index++)
   {
     if (Pararray[index]) {
  Pararray[index].textContent = paragraphs[index];
  }
   }

  })();