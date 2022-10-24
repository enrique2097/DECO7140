// Title: Learn JavaScript form validation 
// Author: JoyShaheb
// Date: 22/9/2021
// Code version: 1
// Availability: https://github.com/JoyShaheb/Project-image-repo/tree/main/Form-Validation

let username = document.getElementById("username"),
  email = document.getElementById("email"),
  phoneNumber = document.getElementById("phoneNumber"),
  from = document.getElementById("from"),
  to = document.getElementById("to"),
  reg = document.getElementById("reg"),
  form = document.getElementById("form"),
  errorMsg = document.getElementsByClassName("error"),
  valid = document.getElementsByClassName("valid"),
  invalid = document.getElementsByClassName("invalid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  check(username, 0);
  check(email, 1);
  check(phoneNumber, 2);
  check(from, 3);
  check(to, 4);
  check(reg, 5);
  check(card, 6);
  check(date, 7);
  check(csv, 8);
  dateCheck(from, to);
});

function check(id, index) {
  var pattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
  var regFormat = '[A-Z]+[0-9]';
  if (id.value.trim() === "") {
    errorMsg[index].innerHTML = "This is a required field";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === username && /\d/.test(id.value)) {
    errorMsg[index].innerHTML = "Name cannot contains numbers";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === email && !id.value.match(pattern)) {
    errorMsg[index].innerHTML = "Invalid email address";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === reg && !id.value.match(regFormat)) {
    errorMsg[index].innerHTML = "Invalid registration number";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === phoneNumber && id.value.length > 10) {
    errorMsg[index].innerHTML = "Invalid, no more than 10 digits";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === card && id.value.length != 16) {
    errorMsg[index].innerHTML = "Invalid card number";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if (id === csv && id.value.length != 3) {
    errorMsg[index].innerHTML = "Invalid CSV code";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else {
    errorMsg[index].innerHTML = "";
    id.style.border = "2px solid green";

    invalid[index].style.opacity = "0";
    valid[index].style.opacity = "1";
  }
};

function dateCheck(startid, endid) {
  if (id.value.trim() === "") {
    errorMsg[index].innerHTML = "This is a required field";
    id.style.border = "2px solid red";

    invalid[index].style.opacity = "1";
    valid[index].style.opacity = "0";
  }
  else if ((Date.parse(startid.value) >= Date.parse(endid.value))) {
    errorMsg[4].innerHTML = "Exit date should be later than entry date";
    startid.style.border = "2px solid red";
    endid.style.border = "2px solid red";

    invalid[4].style.opacity = "1";
    valid[4].style.opacity = "0";
    invalid[3].style.opacity = "1";
    valid[3].style.opacity = "0";
  }
  else {
    errorMsg[4].innerHTML = "";
    errorMsg[3].innerHTML = "";
    startid.style.border = "2px solid green";
    endid.style.border = "2px solid green";

    invalid[4].style.opacity = "0";
    valid[4].style.opacity = "1";
    invalid[3].style.opacity = "0";
    valid[3].style.opacity = "1";
  }
};

