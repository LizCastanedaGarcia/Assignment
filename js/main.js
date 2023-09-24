// WEB303 Assignment 2
//Lizbeth Castaneda
//0781459
// September 21, 2023

$(document).ready(function () {
  //Load Prospect html page
  $("#prospect").click(function (e) {
    console.log("Prospect link was clicked");
    e.preventDefault();
    loadcontent("prospect.html");
  });

  //Load convert html page

  $("#convert").click(function (e) {
    e.preventDefault();
    loadcontent("convert.html");
  });

  //Load retain page
  $("#retain").click(function (e) {
    e.preventDefault();
    loadcontent("retain.html");
  });
});

function loadcontent(page) {
  console.log("I am in loadContent");
  $("#content").fadeIn(400, function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);

    xhr.send();
    xhr.onload = function () {
      console.log("My data from the " + page + " page is loaded");
      console.log("data", xhr.responseText);
    };
    xhr.onload = function () {
      if (this.status === 200) {
        {
          let el = document.getElementById("ajax-data-wrapper");
          el.innerHTML = xhr.responseText;
        }
      }
    };
  });
}
