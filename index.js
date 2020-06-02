/* Given Code, don't edit */

function handleClick(e) {
  const time = document.getElementById('time').value
  displayMessage(greet(time))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = (msg);
}

/* Write your implementation of greet() */
function greet(timeString) {

  const hour = parseInt(timeString);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
 else  return "Good Afternoon"
}