let numOrStr = prompt("input number or string");
console.log(numOrStr);

let caseKey;

if (numOrStr === null) {
  caseKey = "cancel";
} else if (numOrStr.trim() === "") {
  caseKey = "empty";
} else if (isNaN(+numOrStr)) {
  caseKey = "nan";
} else {
  caseKey = "ok";
}

switch (caseKey) {
  case "cancel":
    console.log("ви скасували");
    break;
  case "empty":
    console.log("Empty String");
    break;
  case "nan":
    console.log("number is Ba_NaN");
    break;
  case "ok":
    console.log("OK!");
    break;
  default:
    console.log("Unexpected case");
}
