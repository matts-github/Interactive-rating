// "use strict";
// let orangeColor = function myFunction() {
//   document.querySelector(".btn1").style.background = "orange";
// };

// let disapear = function myFunction1() {
//   document.querySelector(".outer-wrapper").style.display = "none";
// };

// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log("A form has been submited");
// });

// var form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // prevents the form from autosubmitting

//   // var username = document.getElementById("username").value;
//   // console.log(username);
//   // var email = document.getElementById("email").value;
//   // console.log(email);
//   var checked = (document.getElementById("the_number").checked = true);
//   console.log("Please!");
//   // document.querySelector(".outer-wrapper").style.display = "none";
//   // document.querySelector(".submitted-2").style.display = "none";
//   // document.querySelector(".submitted-1").style.display = "block";
// });
// if (checked == true) {
//   console.log("come on!");
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // prevents the form from autosubmitting
//   var checked1 = (document.getElementById("the_number-2").checked = true);
//   // console.log("Please-1!");
//   // document.querySelector(".outer-wrapper").style.display = "none";
//   // document.querySelector(".submitted-1").style.display = "none";
//   // document.querySelector(".submitted-2").style.display = "block";
// });

function check() {
  var q1 = document.quiz.question1.value;
  if (q1 == "1") {
    document.querySelector(".outer-wrapper").style.display = "none";
    document.querySelector(".submitted-1").style.display = "block";
  } else if (q1 == "2") {
    document.querySelector(".outer-wrapper").style.display = "none";
    document.querySelector(".submitted-2").style.display = "block";
  } else if (q1 == "3") {
    document.querySelector(".outer-wrapper").style.display = "none";
    document.querySelector(".submitted-3").style.display = "block";
  } else if (q1 == "4") {
    document.querySelector(".outer-wrapper").style.display = "none";
    document.querySelector(".submitted-4").style.display = "block";
  } else if (q1 == "5") {
    document.querySelector(".outer-wrapper").style.display = "none";
    document.querySelector(".submitted-5").style.display = "block";
  }
}

check();
function myFunction() {
  document.getElementById("clicked").style.background = "hsl(25, 97%, 53%)";
  document.getElementById("clicked2").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked3").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked4").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked5").style.background = "hsl(216, 12%, 54%)";
}

function myFunction2() {
  document.getElementById("clicked2").style.background = "hsl(25, 97%, 53%)";
  document.getElementById("clicked").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked3").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked4").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked5").style.background = "hsl(216, 12%, 54%)";
}

function myFunction3() {
  document.getElementById("clicked3").style.background = "hsl(25, 97%, 53%)";
  document.getElementById("clicked").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked2").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked4").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked5").style.background = "hsl(216, 12%, 54%)";
}
function myFunction4() {
  document.getElementById("clicked4").style.background = "hsl(25, 97%, 53%)";
  document.getElementById("clicked").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked3").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked2").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked5").style.background = "hsl(216, 12%, 54%)";
}
function myFunction5() {
  document.getElementById("clicked5").style.background = "hsl(25, 97%, 53%)";
  document.getElementById("clicked").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked3").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked4").style.background = "hsl(216, 12%, 54%)";
  document.getElementById("clicked2").style.background = "hsl(216, 12%, 54%)";
}
