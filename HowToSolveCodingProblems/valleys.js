const steps = 8;
const path = "UDDDUDUU";

const countingValleys = (steps, path) => {
  let latitude = 0;
  const above = 0;
  const below = 0;
  for (let i = 0; i < path.length; i++) {
    if (path.charAt(i) === "U") {
      latitude++;
    } else if (path.charAt(i) === "D") {
      latitude--;
    } else {
      continue;
    }
  }
};

countingValleys(steps, path);
