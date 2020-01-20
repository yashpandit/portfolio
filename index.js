function showAbout() {
  $("#about_container").css("display", "inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideInLeft");
  }, 800);
}

function closeAbout() {
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display", "none");
  }, 800);
}

function showWork() {
  $("#work_container").css("display", "inherit");
  $("#work_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideInRight");
  }, 800);
}

function closeWork() {
  $("#work_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#work_container").removeClass("animated slideOutRight");
    $("#work_container").css("display", "none");
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#box").css("display", "none");
    $("#about").removeClass("animated fadeIn");
    $("#contact").removeClass("animated fadeIn");
    $("#work").removeClass("animated fadeIn");
  }, 300);
}, 500);
