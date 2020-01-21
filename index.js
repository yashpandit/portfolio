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

function showSkills() {
  $("#skills_container").css("display", "inherit");
  $("#skills_container").addClass("animated slideInUp");
  setTimeout(function () {
    $("#skills_container").removeClass("animated slideInUp");
  }, 800);
}

function closeSkills() {
  $("#skills_container").addClass("animated slideOutDown");
  setTimeout(function () {
    $("#skills_container").removeClass("animated slideOutDown");
    $("#skills_container").css("display", "none");
  }, 800);
}

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
    $("#about").removeClass("animated fadeIn");
    $("#work").removeClass("animated fadeIn");
    $("#skills").removeClass("animated fadeIn");
  }, 300);
}, 500);
