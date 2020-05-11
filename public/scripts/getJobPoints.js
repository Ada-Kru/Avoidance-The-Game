let submitBtn = document.querySelector(".btn");
let nameEntry = document.getElementById("username");
let form = document.getElementById("lp_form");

nameEntry.addEventListener("input", (evt) => {
  nameEntry.setCustomValidity("");
});

submitBtn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let name = nameEntry.value.trim();
  let job = document.querySelector('input[name="occupations"]:checked').value;

  // Translate occupation to it's occupation ID number.
  switch (job) {
    case "nurse":
      job = 0;
      break;
    case "teacher":
      job = 1;
      break;
    case "librarian":
      job = 2;
      break;
    default:
      job = 0;
  }

  // Check that name is valid.
  let message = null;
  if (/[^a-z0-9 ]/i.test(name)) {
    message = "Only letters, numbers, and spaces are allowed in names.";
  } else if (name.length > 32 || name.length == 0) {
    message = "Name length must be between 0 and 32 characters.";
  }
  if (message) {
    showError(message);
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("occupation", job);

  window.location.href = "/index";
});

function showError(msg) {
  nameEntry.setCustomValidity(msg);
  nameEntry.reportValidity(msg);
}
