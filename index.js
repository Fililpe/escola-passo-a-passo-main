var msgCookies = document.getElementById("cookies-msg");

function aceito() {
  localStorage.lgpd = "sim";
  msgCookies.style.display = "none";
}

if (localStorage.lgpd == "sim") {
  msgCookies.style.display = "none";
} else {
  msgCookies.style.display = "block";
}
