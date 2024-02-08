var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
  var x = Math.random() * canvas.offsetWidth;
  var y = Math.random() * canvas.offsetHeight;
  var radius = Math.random() * 1.2;
  var hue = colorrange[getRandom(0, colorrange.length - 1)];
  var sat = getRandom(50, 100);
  var opacity = Math.random(); // Initialize with random opacity
  starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(
  0,
  0,
  window.innerWidth,
  window.innerHeight
);

function drawStars() {
  for (var i = 0; i < stars; i++) {
    var star = starArray[i];

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 360);
    context.fillStyle =
      "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
    context.fill();
  }
}

function updateStars() {
  for (var i = 0; i < stars; i++) {
    if (Math.random() > 0.99) {
      starArray[i].opacity = Math.random();
    }
  }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
  if (button.textContent === "Click Me! ❤") {
    button.textContent = "loading...";
    fetch("send_mail.php")
      .then((response) => {
        if (response.ok) {
          button.textContent = "Check Your Email 🙃";
        } else {
          console.error("Failed to send email");
          button.textContent = "Error 😞";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        button.textContent = "Error 😞";
      });
  }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
  lines.forEach((line, index) => {
    context.fillText(line, x, y + index * (fontSize + lineHeight));
  });
}

function drawText() {
  var fontSize = Math.min(30, window.innerWidth / 25); // Adjust font size based on screen width
  var lineHeight = 8;

  context.font = fontSize + "px Comic Sans MS";
  context.textAlign = "center";

    // line 1

  if (frameNumber < 300) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know, proposing for friendship might sound a bit unconventional,",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity + 0.01;
  }
  //fades out the text by decreasing the opacity
  if (frameNumber >= 300 && frameNumber < 600) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    context.fillText(
      "I know, proposing for friendship might sound a bit unconventional,",
      canvas.width / 2,
      canvas.height / 2
    );
    opacity = opacity - 0.01;
  }

  //needs this if statement to reset the opacity before next statement on canvas
  if (frameNumber == 600) {
    opacity = 0;
  }

  // Line 2
  
  if (frameNumber > 600 && frameNumber < 900) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["but hey, life's too short for formalities, right? 😄"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "but hey, life's too short for formalities, right? 😄",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }
  if (frameNumber >= 900 && frameNumber < 1200) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        ["but hey, life's too short for formalities, right? 😄"],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "but hey, life's too short for formalities, right? 😄",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity - 0.01;
  }

    // Line 3

    if (frameNumber == 1200) {
      opacity = 0;
    }
    if (frameNumber > 1200 && frameNumber < 1500) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText(
        "Imagine the two of us conquering the ups and downs together,",
        canvas.width / 2,
        canvas.height / 2
      );
      opacity = opacity + 0.01;
    }
    if (frameNumber >= 1500 && frameNumber < 1800) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText(
        "Imagine the two of us conquering the ups and downs together,",
        canvas.width / 2,
        canvas.height / 2
      );
      opacity = opacity - 0.01;
    }

      // Line 4

    if (frameNumber == 1800) {
      opacity = 0;
    }
    if (frameNumber > 1800 && frameNumber < 2100) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText(
        "like a dynamic duo in this adventure called life. 🌟",
        canvas.width / 2,
        canvas.height / 2
      );
      opacity = opacity + 0.01;
    }
    if (frameNumber >= 2100 && frameNumber < 2400) {
      context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      context.fillText(
        "like a dynamic duo in this adventure called life. 🌟",
        canvas.width / 2,
        canvas.height / 2
      );
      opacity = opacity - 0.01;
    }
      // Line 5

      if (frameNumber == 2400) {
        opacity = 0;
      }
      if (frameNumber > 2400 && frameNumber < 2700) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "Picture us making memories that we'll reminisce about with laughter",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 2700 && frameNumber < 3000) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "Picture us making memories that we'll reminisce about with laughter",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }
      
      // Line 6

      if (frameNumber == 3000) {
        opacity = 0;
      }
      if (frameNumber > 3000 && frameNumber < 3300) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "and a warm feeling in our hearts. 📸💖",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 3300 && frameNumber < 3600) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "and a warm feeling in our hearts. 📸💖",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }

      // Line 7

      if (frameNumber == 3600) {
        opacity = 0;
      }
      if (frameNumber > 3600 && frameNumber < 3900) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "So, what do you think? Ready to embark on this journey of friendship",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 4200 && frameNumber < 4500) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "So, what do you think? Ready to embark on this journey of friendship",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }

      // Line 8
      if (frameNumber == 4500) {
        opacity = 0;
      }
      if (frameNumber > 4500 && frameNumber < 4800) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "and create a story that's uniquely ours? 🚀",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 4800 && frameNumber < 5100) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "and create a story that's uniquely ours? 🚀",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }
      
      // Line 9
      if (frameNumber == 5100) {
        opacity = 0;
      }
      if (frameNumber > 5100 && frameNumber < 5400) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "I'm excited about the prospect of having you as my partner in crime,",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 5400 && frameNumber < 5700) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "I'm excited about the prospect of having you as my partner in crime,",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }

      // Line 10
      if (frameNumber == 5700) {
        opacity = 0;
      }
      if (frameNumber > 5700 && frameNumber < 6000) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "confidant, and all-around awesome friend. 🤝😎",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 6000 && frameNumber < 6300) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "confidant, and all-around awesome friend. 🤝😎",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }
      
      // Line 11
      if (frameNumber == 6300) {
        opacity = 0;
      }
      if (frameNumber > 6300 && frameNumber < 6600) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "Looking forward to your response and",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 6600 && frameNumber < 6900) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "Looking forward to your response and",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }

      // Line 8
      if (frameNumber == 6900) {
        opacity = 0;
      }
      if (frameNumber > 6900 && frameNumber < 7200) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "the countless memories we're about to create! 💌",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity + 0.01;
      }
      if (frameNumber >= 7200 && frameNumber < 7500) {
        context.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        context.fillText(
          "the countless memories we're about to create! 💌",
          canvas.width / 2,
          canvas.height / 2
        );
        opacity = opacity - 0.01;
      }
      
  if (frameNumber == 7500) {
    opacity = 0;
  }
  if (frameNumber > 7500 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${opacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "I Will love to be your Bestest-friend ever",
        ],
        canvas.width / 2,
        canvas.height / 2,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "I Will love to be your Bestest-friend ever,",
        canvas.width / 2,
        canvas.height / 2
      );
    }

    opacity = opacity + 0.01;
  }

  if (frameNumber >= 7800 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${secondOpacity})`;

    if (window.innerWidth < 600) {
      drawTextWithLineBreaks(
        [
          "and I can't wait to spend all the time in",
          "the world being best-friend with you!",
        ],
        canvas.width / 2,
        canvas.height / 2 + 70,
        fontSize,
        lineHeight
      );
    } else {
      context.fillText(
        "and I can't wait to spend all the time in the world being best-friend with you!",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    }

    secondOpacity = secondOpacity + 0.01;
  } 

  if (frameNumber >= 8100 && frameNumber < 99999) {
    context.fillStyle = `rgba(255, 255, 255, ${thirdOpacity})`;
    context.fillText(
      "Will You Be My best friend Forever?",
      canvas.width / 2,
      canvas.height / 2 + 120
    );
    thirdOpacity = thirdOpacity + 0.01;

    button.style.display = "block";
  }
}

function draw() {
  context.putImageData(baseFrame, 0, 0);

  drawStars();
  updateStars();
  drawText();

  if (frameNumber < 99999) {
    frameNumber++;
  }
  window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
