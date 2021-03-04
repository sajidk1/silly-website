document.getElementById("login").onclick = login;
function login() {
  let username = document.getElementById("uname").value;
  if (username == "paul") {
    berocca();
  } else if (username == "marcus") {
    greggs();
  } else {
    alert("User not found!");
  }
}

document.getElementById("logout").onclick = logout;
function logout() {
  location.reload();
}
