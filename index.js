/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(thetime))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.getElementById("greeting").innerText = (msg);
}

/* Write your implementation of greet() */
function greet(thetime) {

  const hour = parseInt(thetime);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
 else  return "Good Afternoon"
}