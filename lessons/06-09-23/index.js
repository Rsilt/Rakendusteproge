function getUserName() {
  var name = prompt("please enter your name:");

  if (name !== null && name !== "") {
    return "your name is " + name;
  } else {
    return "you didn't enter a name.";
  }
}

var result = getUserName();

console.log(result);