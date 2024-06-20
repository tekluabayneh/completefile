const input = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const Errormessage = document.getElementById("error");

form.addEventListener("submit", function (e) {
  let message = [];

  if (input.value === "" || input.value === null) {
    message.push("Name is requare");
  }
  if (password.value.length <= 6) {
    message.push("Password must be grater thatn 6");
  }
  if (password.value.length > 15) {
    message.push("Password must be lessthan 15");
  }

  if (password.value === "password") {
    message.push("passwor can Not be password");
  }
  if (message.length > 0) {
    e.preventDefault();
    Errormessage.innerHTML = message.join(", ");
  }
});
