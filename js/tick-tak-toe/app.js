const gameBored = document.getElementById("gameBored");
const infoDisplay = document.getElementById("info");
const StartCells = ["", "", "", "", "", "", "", "", ""];

let go = "Circle";

infoDisplay.textContent = "circle goes first ";

function CreateBored() {
  StartCells.forEach((Cell, index) => {
    const CellElement = document.createElement("div");
    CellElement.classList.add("Square");
    CellElement.id = index;
    CellElement.addEventListener("click", AddGo);
    gameBored.append(CellElement);

    function AddGo(e) {
      const goDisplay = document.createElement("div");
      goDisplay.classList.add(go);
      CellElement.appendChild(goDisplay);
      e.target.append(goDisplay); // we are appenging the clicked element to the parent element where it get clicked
      go = go === "Circle" ? "Cross" : "Circle"; // this is updating the go varale value
      infoDisplay.textContent = "it is now " + go + "`s go"; // this one is updating the info text
      e.target.removeEventListener("click", AddGo); // we are removing the rendendent couse
      checkScore();
    }
  });
}
CreateBored();

function checkScore() {
  const allSquares = document.querySelectorAll(".Square");
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningCombination.forEach((array) => {
    // we are checking the if the Circle is Wins

    const circleWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("Circle")
    );
    if (circleWins) {
      infoDisplay.textContent = "Circle Wins!";
      allSquares.forEach((Square) =>
        Square.replaceWith(Square.cloneNode(true))
      );
    }
  });
  /*  the ceond */

  winningCombination.forEach((array) => {
    const CrossWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains("Cross")
    );
    if (CrossWins) {
      infoDisplay.textContent = "Cross Wins!";
      allSquares.forEach((Cross) => Cross.replaceWith(Cross.cloneNode(true)));
    }
  });
}
