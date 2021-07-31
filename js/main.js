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

function nightfall() {
  var element = document.getElementById("three");
  element.classList.add("active");
}

function chatwalk() {
  var element = document.getElementById("chat-walk");
  element.classList.add("chat-play");
}
