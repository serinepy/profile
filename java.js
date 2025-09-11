function showMenu() {
  var menu = document.getElementById("menu");
  if (menu.className === "nav") {
      menu.className += " show";
  } else {
      menu.className = "nav";
  }
}
