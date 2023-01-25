
function startRandom(button) {
    var correctButtonId = Math.floor(Math.random() * 3) + 1;
    var message = document.getElementById("message");
    message.innerHTML = ""; // Clear previous message
    if (button.id === "button" + correctButtonId) {
        message.innerHTML += "Correct button was clicked!<br>";
        var img = document.createElement("img");
        img.src = "path/to/right.jpeg";
        img.alt = "right";
        message.appendChild(img);
    } else {
        message.innerHTML += "Incorrect button was clicked!<br>";
    }
  }