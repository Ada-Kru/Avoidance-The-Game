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
    message = "Only contain letters, numbers, and spaces are allowed in names.";
  } else if (name.length > 32 || name.length == 0) {
    message = "Name length must be between 0 and 32 characters.";
  }
  if (message) {
    showError(message);
    return;
  }

  let result = await createUser(name, job);
  if (result.error != null) {
    showError(result.error);
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("occupation", job);
  localStorage.setItem("secretKey", result.secret_key);

  window.location.href = "/index";
});


function showError(msg) {
    nameEntry.setCustomValidity(msg);
    nameEntry.reportValidity(msg);
}

async function createUser(name, job) {
  // Try to create the new user on the database.
  try {
    let result = await fetch("/scores/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, characterType: job }),
    });

    return await result.json();
  }
  catch(err) {
      console.log(err);
      return {error: "Could not connect to database!"}
  }


}
