function stylesheet() {
  let changer = document.getElementById("stylesheetchange").value;
  if (changer == 1) {
    localStorage.setItem("theme", 0);
    document.getElementById("stylesheetchange").value = 0;
    document.getElementById("theme").href = "assets/css/stylesheet-dark.css";
  } else if (changer == 0) {
    localStorage.setItem("theme", 1);
    document.getElementById("stylesheetchange").value = 1;
    document.getElementById("theme").href = "assets/css/stylesheet-light.css";
  }
}

function theme() {
  if (localStorage.getItem("theme") == 0) {
    document.getElementById("theme").href = "assets/css/stylesheet-dark.css";
    document.getElementById("stylesheetchange").checked = true;
  } else if (localStorage.getItem("theme") == 1) {
    document.getElementById("theme").href = "assets/css/stylesheet-light.css";
    document.getElementById("stylesheetchange").checked = false;
  }
}
