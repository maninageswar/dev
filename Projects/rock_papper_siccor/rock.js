let result = (input) => {
  const chioce = { 0: "paper", 1: "siccor", 2: "rock" };
  let res = "";
  var Computer_Choice = Math.floor(Math.random() * (3 - 0) + 0);
  console.log(Computer_Choice);
  if (Computer_Choice !== 2 && input !== 2) {
    if (Computer_Choice > input) {
      console.log("you lost");
      res = "you lost";
    } else if (Computer_Choice === input) {
      console.log("it's a tie");
      res = "it's a tie";
    } else {
      console.log("you won");
      res = "you won";
    }
  } else if (Computer_Choice === 2 || input === 2) {
    if (input === 2 && Computer_Choice === 1) {
      console.log("you lost");
      res = "you won";
    } else if (input === 2 && Computer_Choice === 0) {
      console.log("you lost");
      res = "you lost";
    } else if (input === 1 && Computer_Choice === 2) {
      console.log("you lost");
      res = "you lost";
    } else if (input === 0 && Computer_Choice === 2) {
      console.log("you won");
      res = "you won";
    } else {
      console.log("it's a tie");
      res = "it's a tie";
    }
  }
  document.getElementById(
    "computer_chioce"
  ).innerHTML = `<h3>system's chioce:${chioce[Computer_Choice]}</h3>`;
  return res;
};

rock = () => {
  console.log("you clicked rock");
  let k = result(2);
  document.getElementById("result").innerHTML = `<h3>result:${k}</h3>`;
  document.getElementById("your_choice").innerHTML = `<h3>your choice:rock</h3>`;
};
papper = () => {
  console.log("you clicked papper");
  let k = result(0);
  document.getElementById("result").innerHTML = `<h3>result:${k}</h3>`;
  document.getElementById("your_choice").innerHTML = `<h3>your choice:papper</h3>`;
};
siccor = () => {
  console.log("you clicked siccor");
  let k = result(1);
  document.getElementById("result").innerHTML = `<h3>result:${k}</h3>`;
  document.getElementById("your_choice").innerHTML = `<h3>your choice:siccor</h3>`;
};