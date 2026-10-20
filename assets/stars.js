const canvas = document.getElementById("stars-canvas");
const c = C.getContext("2d");
const { width, height } = C.getBoundingClientRect();
C.width = width;
C.height = height;
c.fillStyle = "white";
c.beginPath();
const [x, y, radius] = [20, 20, 2];
c.arc(x, y, radius, 0, Math.PI * 2);
c.fill();

console.log("HEY");
