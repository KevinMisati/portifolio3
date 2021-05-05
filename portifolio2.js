// ====================Navigational Menu===================*/

const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_link");

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link4 = document.querySelector(".link4");

navToggle.addEventListener("click", function () {
  document.body.classList.toggle("nav_open");
});

 
  link1.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
  link2.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
  
  link4.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
  

const projects = [
  {
    href: "./hospital/html/hospital.html",
    src: "./images/hospital.png",
  },
];





















