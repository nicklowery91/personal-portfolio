/*
Student Name: Nicholas Lowery
File Name : script.js
Date: November 11, 2025
*/

// Hamburger menu toggle
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffclogo");

  // If either element doesn't exist, stop
  if (!menu || !logo) return;

  // Toggle visibility
  if (menu.style.display === "block") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}
