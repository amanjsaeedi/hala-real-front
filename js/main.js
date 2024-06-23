function openSidebar() {
  document.getElementById("hambergur").classList.add("d-none");
  document.getElementById("closebtn").classList.remove("d-none");
  document.getElementById("dashboard-sidebar").classList.remove("d-none");

  document.getElementById("dashboard-sidebar").style.width = "200px";
}

function closeSidebar() {
  document.getElementById("closebtn").classList.add("d-none");
  document.getElementById("hambergur").classList.remove("d-none");

  document.getElementById("dashboard-sidebar").classList.add("d-none");
}

function showSignuptab() {
  document.getElementById("voroud").classList.remove("active");
  document.getElementById("login").classList.remove("active");
  document.getElementById("sabtenam").classList.add("active");
  document.getElementById("signup").classList.add("active");
}
