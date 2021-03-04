let berocca_data = [
  {
    Event: "Took a swig of Berocca whilst on camera in a meeting",
    Date: "17/02/2021",
    Amount: "£5",
  },
  {
    Event: "Mentioned Berocca in a daily standup",
    Date: "22/02/2021",
    Amount: "£20",
  },
  {
    Event: "Took a swig of Berocca whilst on camera in a meeting",
    Date: "24/02/2021",
    Amount: "£5",
  },
  {
    Event: "Mentioned Berocca in a daily standup",
    Date: "24/02/2021",
    Amount: "£20",
  },
  {
    Event: "Sidetracked a company meeting to talk about Berocca for 30 minutes",
    Date: "26/02/2021",
    Amount: "£100",
  },
  {
    Event: "Got a tattoo of the Berocca logo and talked about it in a meeting",
    Date: "01/03/2021",
    Amount: "£1000",
  },
  {
    Event: "Took a swig of Berocca whilst on camera in a meeting",
    Date: "02/03/2021",
    Amount: "£5",
  },
];

function berocca() {
  document.title = "Berocca Kickbacks"
  document.getElementById("html").style.backgroundColor = "#4db864";
  document.getElementById("body").style.backgroundColor = "#ffd00e";
  document.getElementById("html").style.cursor =
    "url('../images/berocca_cursor.png'), auto";
  
    document.getElementById("img").src = "images/berocca.jpg";
  document.getElementById("form").innerHTML = "<strong>Welcome Paul</strong>";
  document.getElementById("login").style.visibility = "hidden";
  document.getElementById("logout").style.visibility = "visible";
  
  document.getElementById("h1").innerHTML = "Berocca Kickback Account";
  document.getElementById("h2").innerHTML = "Kickbacks:";

  
  document.getElementById("corp_table").innerHTML = "";
  document.createElement("table");
  let table = document.querySelector("table");
  let data = Object.keys(berocca_data[0]);
  generateTableHead(table, data);
  generateTable(table, berocca_data);
}
