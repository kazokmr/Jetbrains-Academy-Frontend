document.addEventListener("keydown", function (event) {
  let elements = document.querySelectorAll('kbd')
  for (let element of elements) {
    if (element.innerText.toUpperCase() === event.key.toUpperCase()) {
      new Audio("../audio/keys/" + event.key.toUpperCase() + ".mp3").play()
      return
    }
  }
  console.log("Not assigned key is pressed.")
});
