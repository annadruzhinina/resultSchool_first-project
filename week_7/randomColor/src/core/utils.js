export function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  const rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.background = rgb;
  return rgb;
}
