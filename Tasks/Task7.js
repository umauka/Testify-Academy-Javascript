// Determine the type of triangle based on its sides

const side1 = 5;
const side2 = 10;
const side3 = 7;

if (side1 === side2 && side2 === side3) {
  console.log("The triangle is equilateral.");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("The triangle is isosceles.");
} else {
  console.log("The triangle is scalene.");
}