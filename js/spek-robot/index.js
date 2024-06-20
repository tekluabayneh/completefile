const playbutton = document.getElementById("play-button");
const stopbutton = document.getElementById("stop-button");
const pausebutton = document.getElementById("pause-button");
const textInput = document.getElementById("text");
const SpeddInput = document.getElementById("speed");
let curentindex;
playbutton.addEventListener("click", () => {
  // this is the spech play tbn
  playText(textInput.value);
});
pausebutton.addEventListener("click", pusespeech); // this is foe the pause spech btn
stopbutton.addEventListener("click", cancelspech); // thi is  for the canceling the the speech
SpeddInput.addEventListener("input", () => {
  // Cancel the current speech and start a new one with the updated speed
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    playText(utterance.text.substring(curentindex));
  }
});
let utterance = new SpeechSynthesisUtterance(text); // this is for the creating t

utterance.addEventListener("boundary", (e) => {
  curentindex = e.charIndex;
});
utterance.addEventListener("end", () => {
  textInput.disabled = false; // this is wile he is talking we cant tech or modify the text
});
function playText(text) {
  if (speechSynthesis.pause && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  utterance.rate = SpeddInput.value || 1; // this one is for the spedd value
  textInput.disabled = true;
  speechSynthesis.speak(utterance); // this one is fo the one he use to speack
}
function pusespeech() {
  if (speechSynthesis.speaking) speechSynthesis.pause(); // this is pusing the conversation
}
function cancelspech() {
  // this is stoping or canceling the speech
  if (speechSynthesis.speaking) speechSynthesis.cancel();
  speechSynthesis.resume();
  textInput.disabled = false;
}
