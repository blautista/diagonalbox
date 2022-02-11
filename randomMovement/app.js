const containerId = "container";

const getCSSVariable = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name);

const setCSSVariable = (name, value) => {
  document.querySelector(":root").style.setProperty(name, value);
};

const restartAnimation = async (container, animationClassName) => {
  container.classList.remove(animationClassName);
  await new Promise((d) => setTimeout(d, 50));
  container.classList.add(animationClassName);
};

const rand = (from = 0, to = 1, intOnly = true) => {
  const newRand = Math.random() * to + from;
  if (intOnly) return Math.floor(newRand);
  else return newRand;
};

document.addEventListener("animationend", async () => {
  const container = document.getElementById(containerId);

  const containerRect = container.getBoundingClientRect();
  const containerX = containerRect.width;
  const containerY = containerRect.height;
  let newYPos = rand(0, window.innerHeight - containerY);
  let newXPos = rand(0, window.innerWidth - containerX);

  container.style.top = getCSSVariable("--final-top");
  container.style.left = getCSSVariable("--final-left");
  setCSSVariable("--final-top", `${newYPos}px`);
  setCSSVariable("--final-left", `${newXPos}px`);

  await restartAnimation(container, "animate");
});
