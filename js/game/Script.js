let ITITIAL_VALUE = 0.025;
let VELOCIYT_INCREASE = 0.00001;
class Ball {
  constructor(BallElem) {
    this.BallElem = BallElem;
    this.reset();
  }

  get x() {
    return parseFloat(getComputedStyle(this.BallElem).getPropertyValue("--x"));
  }

  set x(value) {
    this.BallElem.style.setProperty("--x", value);
  }

  get y() {
    return parseFloat(getComputedStyle(this.BallElem).getPropertyValue("--y"));
  }

  set y(value) {
    this.BallElem.style.setProperty("--y", value);
  }
  rect() {
    return this.BallElem.getBoundingClientRect();
  }
  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0, y: 0 };

    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.y) <= 0.2
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }

    this.velocity = ITITIAL_VALUE; // Adjust as needed
    console.log(this.direction);
  }

  update(delta) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    this.velocity += VELOCIYT_INCREASE * delta;
    const rect = this.rect();

    // Check vertical boundaries
    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1;
    }
    if (rect.left <= 0 || rect.right >= window.innerWidth) {
      this.direction.x *= -1;
    }
  }
}

let Speed = 0.2;
class paddel {
  constructor(paddelElemt) {
    this.paddelElemt = paddelElemt;
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddelElemt).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.paddelElemt.style.setProperty("--position", value);
  }

  update(delta, Ballheight) {
    this.position += Speed * delta * (Ballheight - this.position);
  }
}

document.addEventListener("mousemove", (e) => {
  playerpaddel.position = (e.y / window.innerHeight) * 100;
});

let ball = new Ball(document.getElementById("ball"));
let playerpaddel = new paddel(document.getElementById("player-paddel"));

let computerpaddel = new paddel(document.getElementById("compurtScore"));

console.log(playerpaddel, computerpaddel);
let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime;
    ball.update(delta);
    computerpaddel.update(delta, ball.y);
  }
  lastTime = time;
  window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
function randomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}
