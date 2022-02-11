const container = document.getElementById("container");

container.addEventListener("hover", () => {
  console.log("hoverd");
});

document.addEventListener("animationend", async () => {
  const containerRect = container.getBoundingClientRect();
  const containerX = containerRect.width;
  const containerY = containerRect.height;
  let newYPos = Math.floor(Math.random() * (window.innerHeight - containerY));
  let newXPos = Math.floor(Math.random() * (window.innerWidth - containerX));

  container.classList.remove("animate");
  container.style.top = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--final-top");
  container.style.left = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--final-left");

  document
    .querySelector(":root")
    .style.setProperty("--final-top", `${newYPos}px`);
  document
    .querySelector(":root")
    .style.setProperty("--final-left", `${newXPos}px`);
  await new Promise((d) => setTimeout(d, 1000));
  container.classList.add("animate");
});
