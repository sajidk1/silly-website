let greggs_data = [
  {
    Event: "Ate a Gregg's doughnut whilst on camera in a meeting",
    Date: "17/02/2021",
    Amount: "£5",
  },
  {
    Event: "Ate a Gregg's doughnut whilst on camera in a meeting",
    Date: "22/02/2021",
    Amount: "£5",
  },
  {
    Event: "Ate a Gregg's doughnut whilst on camera in a meeting",
    Date: "24/02/2021",
    Amount: "£5",
  },
  {
    Event: "Showed the Greggs logo in a team meeting",
    Date: "24/02/2021",
    Amount: "£10",
  },
  {
    Event: "Mentioned Greggs in a daily standup",
    Date: "24/02/2021",
    Amount: "£20",
  },
  {
    Event:
      "Suggested 12.20pm is the best time to go Greggs (help improve lunch time profits)",
    Date: "26/02/2021",
    Amount: "£30",
  },
  {
    Event: "Homer Simpson Doughnut Licence fee",
    Date: "01/03/2021",
    Amount: "-£1.67",
  },
];

function greggs() {
  document.title = "Greggs Kickbacks";
  document.getElementById("html").style.backgroundColor = "#00558f";
  document.getElementById("body").style.backgroundColor = "#fdb628";
  document.getElementById("html").style.cursor =
    "url('../images/greggs_cursor.png'), auto";

  document.getElementById("img").src = "images/greggs.jpg";
  document.getElementById("form").innerHTML = "<strong>Welcome Marcus</strong>";
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("logout").style.visibility = "visible";

  document.getElementById("h1").innerHTML = "Greggs Kickback Account";
  document.getElementById("h2").innerHTML = "Kickbacks:";

  document.getElementById("corp_table").innerHTML = "";
  document.createElement("table");
  let table = document.querySelector("table");
  let data = Object.keys(greggs_data[0]);
  generateTableHead(table, data);
  generateTable(table, greggs_data);
}
