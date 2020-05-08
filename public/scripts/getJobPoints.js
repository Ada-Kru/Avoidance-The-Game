let btn = document.querySelector(".btn");
let nameEntry = document.getElementById("username");
let form = document.getElementById("lp_form");
let choice = "";

// get whatever occupation user checked
function getRadioValue() {
  var element = document.getElementsByName("occupations");

  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      choice = element[i].value;
      return choice;
    }
  }
}

nameEntry.addEventListener("input", (evt) => {
  nameEntry.setCustomValidity("");
});

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let name = nameEntry.value.trim();
  let message = null;

  if (/[^a-z0-9 ]/i.test(name)) {
    message = "Only contain letters, numbers, and spaces are allowed in names.";
  } else if (name.length > 32 || name.length == 0) {
    message = "Name length must be between 0 and 32 characters.";
  }
  if (message) {
    nameEntry.setCustomValidity(message);
    nameEntry.reportValidity(message);
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("occupation", getRadioValue());
  window.location.href = "/index";
});
