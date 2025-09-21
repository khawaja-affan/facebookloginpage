// Navbar menu toggle
function menu() {
  let all = document.getElementById("all");
  if (all.classList.contains("show-menu")) {
    all.classList.remove("show-menu");
  } else {
    all.classList.add("show-menu");
  }
}

var daySelect = document.getElementById("day");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  daySelect.add(option);
}

var yearSelect = document.getElementById("year");
var currentYear = new Date().getFullYear();
for (var y = currentYear; y >= currentYear - 100; y--) {
  var option = document.createElement("option");
  option.value = y;
  option.text = y;
  yearSelect.add(option);
}

// Form submit event
var form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var firstName = document.getElementsByName("firstName")[0].value;
  var surname = document.getElementsByName("surname")[0].value;
  var day = document.getElementsByName("day")[0].value;
  var month = document.getElementsByName("month")[0].value;
  var year = document.getElementsByName("year")[0].value;
  var genderInput = document.querySelector("input[name='gender']:checked");
  var gender = genderInput ? genderInput.value : "Not selected";
  var email = document.getElementsByName("email")[0].value;
  var password = document.getElementsByName("password")[0].value;

  var userData = {
    firstName: firstName,
    surname: surname,
    dateOfBirth: day + "-" + month + "-" + year,
    gender: gender,
    email: email,
    password: password
  };

  console.log("User Data:", userData);
  alert("Form submitted successfully!");
});
