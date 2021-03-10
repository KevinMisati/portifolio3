// ====================Navigational Menu===================*/

const navToggle = document.querySelector(".nav_toggle");
const navLinks = document.querySelector(".nav_link");

const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3= document.querySelector(".link3");
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
  link3.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
  link4.addEventListener("click", () => {
    document.body.classList.remove("nav_open");
  });
  

/*================================SLIDER==========================================*/
/*========maim array========*/

const container = document.querySelector(".project_list");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");


/* const projects = [

  {
     image:
      "images\\dan-dimmock-sNwnjxm8eTY-unsplash.jpg",
    name: "Budget",
    text:
      "This website is important in plannning how you are going to spend your money, it requests the total amount of money you want spend, then you enter all your expenses one by one as it culculates the balance.",
    alt: "budget image",
    link: "../BudgetApp\\budget.html",
  }, 

  {
    image:
      "images\\allie-gouPqaau9Qo-unsplash.jpg",
    name: "Conversion",
    text:
      "In this site you can convert Kelvin to Degrees celsius and viceversa, Degrees to radians and viceversa,and lastly pounds to kilograms and viceversa.",
    alt: " conversion image ",
    link: "ConversionApp\\converse.html",
  },
  {
    image:
      "images\\charles-deluvio-GlavtG-umzE-unsplash - Copy.jpg",
    name: "Calculator",
    text:
      "This is a basic culculator for simple operations, I built it using HTML,CSS and JavaScript. It is very basic but I will be adding more functionality.",
    alt: "image of a culculator",
    link: "culculator\\index.html",
  },

 

 
];


container.innerHTML=projects.map((project,index) => {
  const { image, name, text, alt, link } = project;
  let position = "next";
  if (index === 0) {
    position = "active";
  } else if (index === projects.length - 1) {
    position = "last";
  } 
  return `<div class="project ${position}">
  <a href="${link}" >
       <img src="${image}" alt="${alt}">
</a>
<h2 class="project_title"><a href="${link}">${name}</a></h2>
<p class="project_body">${text}</p>
</div>`;

}).join(""); */

  

  



  function startSlides (type) {
    
  
   

  
   let active = document.querySelector(".active");
  let last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next=container.firstElementChild;
  }


  active.classList.remove(["active"]);
  next.classList.remove(["last"]);

  

  active.classList.add(["last"]);
  next.classList.add(["active"]);
  last.classList.add(["next"]);

  if (type==="prev"){
    active.classList.add("next");
  
    next=last.previousElementSibling
    next.classList.add("last");
    last.classList.add("active");
  
  }
 
 
} 






prevButton.addEventListener("click",()=> {startSlides("prev")}
);

nextButton.addEventListener("click",() => {startSlides("next")}
);
  