// Get Variables
// Get Buttons
const conventor1 = document.querySelector("#conventor1");
console.log(conventor1);
const conventor2 = document.querySelector("#conventor2");
// Get Input
const input = document.querySelector("input");
// Get First Day Of Year Date
let sysDateString = new Date().toLocaleDateString("fa-IR");
sysDateString = sysDateString.slice(0, sysDateString.length - 5);
// Get User Date
let userDateString = new Date(input.value).toLocaleDateString("fa-IR");
userDateString = userDateString.split("/");

// Convert User Date To Int
let userDateInt = [];
userDateString.map((index) => {
  userDateInt.push(Number(fixNumbers(index)));
});

// Convert System Date To Int
let sysDateInt = [+fixNumbers(sysDateString), 0, 0];

// Create Final Result
let latest = [];
sysDateInt.map((index, i) => {
  latest.push(userDateInt[i] - index);
});

// Month Convert To Day
for (let i = 0; i < latest[1]; i++) {
  // latest[2] = latest[2] + 30;
}

conventor1.addEventListener("click", () => {
  // Show Final Result
  console.log(`
    Month : ${latest[1]}
    Day : ${latest[2]}

  `);
});

conventor2.addEventListener("click", () => {
  const userDateString = document.querySelectorAll("input")[1].value.split("-");
  let userDateInt = [];
  userDateString.map((index) => {
    userDateInt.push(parseInt(fixNumbers(index)));
  });

  let latest = [];
  sysDateInt.map((index, i) => {
    latest.push(userDateInt[i] - index);
  });

  // Month Convert To Day
  switch (latest[1]) {
    case 0:
      latest[1] += 31;
      break;
    case 1:
      latest[1] += 31 * 1;
      break;
    case 2:
      latest[1] += 31 * 2;
      break;
    case 3:
      latest[1] += 31 * 3;
      break;
    case 4:
      latest[1] += 31 * 4;
      break;
    case 5:
      latest[1] += 31 * 5;
      break;
    case 6:
      latest[1] += 31 * 6;
      break;
    case 7:
      latest[1] += 31 * 7;
      break;
    case 7:
      latest[1] += 31 * 8;
      break;
  }

  // Show Final Result
  console.log(`
      ${latest[1]}
  `);
});