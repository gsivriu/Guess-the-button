
function startRandom(button) {
    var correctButtonId = Math.floor(Math.random() * 3) + 1;
    var message = document.getElementById("message");
    message.innerHTML = ""; // Clear previous message
    var oldImg = imageContainer.getElementsByTagName("img")[0];
    if(oldImg) {
        imageContainer.removeChild(oldImg);
    }
    if (button.id === "button" + correctButtonId) {
        message.innerHTML += "Correct button was clicked!<br>";
        var correctImg = document.createElement("img");
        correctImg.src = "right.jpeg";
        imageContainer.appendChild(correctImg);
    } else {
        message.innerHTML += "Incorrect button was clicked!<br>";
        var correctImg = document.createElement("img");
        correctImg.src = "wrong.png";
        imageContainer.appendChild(correctImg);
    }
  }