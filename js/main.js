// Get
var input = document.querySelector("input");
var button = document.querySelector("button");
var spans = document.querySelectorAll("a.name");

// Do
function replaceName() {
  spans.forEach((span) => {
    span.innerText = input.value;
  });
}

// Event
button.addEventListener("click", replaceName);
