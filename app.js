//------------------fixed navbar----------------------------//
let nav = document.querySelector("header nav"),
  main = document.querySelector("header main"),
  fixedPoint = main.offsetTop;
window.onscroll = function() {
  if (this.scrollY >= fixedPoint - 40) {
    nav.classList.add("active");
    main.classList.add("stretch");
  } else {
    nav.classList.remove("active");
    main.classList.remove("stretch");
  }
};
//------------------Nav Links hover----------------------------//
let navLinks = document.querySelectorAll(".nav_link");
let sections = document.querySelectorAll(".sec");
let current;
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 80) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
//---------------------portfolio-------------------------//
let tabs = document.querySelectorAll(".tab");
let porjects = document.querySelectorAll(".projects_container .project");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove("active");
    }
    tabs[i].classList.add("active");
    let dataFilter = tabs[i].getAttribute("data-filter");
    for (let k = 0; k < porjects.length; k++) {
      porjects[k].classList.add("hide");
      if (porjects[k].getAttribute("data-target") === dataFilter) {
        porjects[k].classList.remove("hide");
      }
      if (dataFilter === "all") {
        porjects[k].classList.remove("hide");
      }
    }
  });
}
//------------------Map section----------------------------//
if (navigator.geolocation) {
  const pos = [30.560668, 31.018417];
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const map = L.map("mapLocation").setView(coords, 11);
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      L.marker(coords).addTo(map).bindPopup("This is your Location");
      L.marker(pos).addTo(map).bindPopup("This is our Location").openPopup();
    },
    function() {
      alert("cannot get current position");
    }
  );
}
//------------------questions-----------//
let heads = document.querySelectorAll(".hed_acc");
let answers = document.querySelectorAll(".ans");
for (let i = 0; i < heads.length; i++) {
  heads[i].addEventListener("click", () => {
    if (heads[i].classList.contains("opened")) {
      answers[i].classList.remove("show");
      heads[i].classList.remove("opened");
    } else {
      for (let j = 0; j < answers.length; j++) {
        answers[j].classList.remove("show");
        heads[j].classList.remove("opened");
      }
      answers[i].classList.add("show");
      heads[i].classList.add("opened");
    }
  });
}
//--------------------animate counting-----------------------//
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
}
window.addEventListener("scroll", () => {
  if (this.scrollY >= document.querySelector(".about").offsetTop) {
    if (!started) {
      numbers.forEach(num => startCount(num));
    }
    started = true;
  }
});
//-----------------responsiveNav----------------------------//
let toggler = document.querySelector(".toggle");
let togglerIcon = document.querySelector(".toggle i");
let menuLinks = document.querySelectorAll(".nav_link");
toggler.addEventListener("click", () => {
  nav.classList.toggle("res_active");
  if (togglerIcon.classList.contains("fa-bars")) {
    togglerIcon.classList.remove("fa-bars");
    togglerIcon.classList.add("fa-times");
  } else {
    togglerIcon.classList.add("fa-bars");
    togglerIcon.classList.remove("fa-times");
  }
});
for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", () => {
    nav.classList.remove("res_active");
    togglerIcon.classList.remove("fa-times");
    togglerIcon.classList.add("fa-bars");
  });
}
