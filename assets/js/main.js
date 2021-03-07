var transitioning = false;
window.onload = function () {
  window.setTimeout(function () {
    document.body.className = document.body.className.replace("is-preload", "");
  }, 100);
};

function contentTransition() {
  transitioning = true;
  document.body.className = document.body.className.replace("", "transition");
  window.setTimeout(function () {
    document.body.className = document.body.className.replace("transition", "");
    window.setTimeout(function () {
      transitioning = false;
    }, 1000);
  }, 1000);
}

function intro() {
  if (!transitioning) {
    if (document.getElementById("main-intro").className == "is-hide") {
      contentTransition();
      window.setTimeout(function () {
        show("main-intro");
        hide("main-aboutme");
        hide("main-work");
        hide("main-ambitions");
      }, 900);
    }
  }
}

function aboutme() {
  if (!transitioning) {
    if (document.getElementById("main-aboutme").className == "is-hide") {
      contentTransition();
      window.setTimeout(function () {
        hide("main-intro");
        show("main-aboutme");
        hide("main-work");
        hide("main-ambitions");
      }, 900);
    }
  }
}

function work() {
  if (!transitioning) {
    if (document.getElementById("main-work").className == "is-hide") {
      contentTransition();
      window.setTimeout(function () {
        hide("main-intro");
        hide("main-aboutme");
        show("main-work");
        hide("main-ambitions");
      }, 900);
    }
  }
}

function ambitions() {
  if (!transitioning) {
    if (document.getElementById("main-ambitions").className == "is-hide") {
      contentTransition();
      window.setTimeout(function () {
        hide("main-intro");
        hide("main-aboutme");
        hide("main-work");
        show("main-ambitions");
      }, 900);
    }
  }
}

function show(s) {
  document.getElementById(s).className = "";
}

function hide(s) {
  document.getElementById(s).className = "is-hide";
}
