const strnghmeter = document.getElementById("strengh-meter");
const passwordinput = document.getElementById("password-input");
const Resonscontainer = document.getElementById("resons");

// passwordinput.addEventListener("input", () => {
//   const weakness = Calculatepasswordstrenght(passwordinput.value);
//   console.log(weakness);
// });
passwordinput.addEventListener("input", updatedstrenght);
updatedstrenght();

function updatedstrenght() {
  const weaknesses = Calculatepasswordstrenght(passwordinput.value);
  let strength = 100;
  Resonscontainer.innerHTML = "";
  weaknesses.forEach((weakness) => {
    if (weakness == null) return;
    strength -= weakness.deduction;
    const message = document.createElement("div");
    message.innerHTML = weakness.message;
    Resonscontainer.appendChild(message);
  });
  strnghmeter.style.setProperty("--strength", strength);
}

function Calculatepasswordstrenght(password) {
  const weknesses = [];
  weknesses.push(lenghtweaknes(password));
  console.log(weknesses);
  return weknesses;
}

function lenghtweaknes(password) {
  const length = password.length;

  if (length <= 5) {
    return {
      message: "Your password is too short",
      deduction: 40,
    };
  }
  if (length <= 10) {
    return {
      message: "Your password could be longer",
      deduction: 15,
    };
  }
  return {
    message: "Your password is too long",
    deduction: 10, // Adjust this deduction as needed
  };
}
