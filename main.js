var showMessage = false;

function toggleMessage() {
  showMessage = !showMessage;
  updateMessageVisibility();
}
function updateMessageVisibility() {
  var messageElement = document.getElementById("message");
  if (showMessage) {
    messageElement.style.display = "block";
  } else {
    messageElement.style.display = "none";
  }
}