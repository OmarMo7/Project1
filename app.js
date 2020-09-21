/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('main section');
var numOfSections = sections.length;


console.log(sections);
console.log(sections[0].id)
/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function addingActiveClass() {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 250 &&
      section.offsetTop + section.offsetHeight > fromTop + 250
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function smoothScrolling(){
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
let j = 0;
sections.forEach(section => {
  j++;
  navbar.innerHTML += `<li><a href="#${section.id = 'section' + j}">${section.attributes['data-nav'].nodeValue}</a></li>`;
})


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scroll event
var mainNavLinks = document.querySelectorAll("nav ul li a");
  
window.addEventListener("scroll", addingActiveClass);
smoothScrolling();

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
    }
  });
}, { rootMargin: "-200px 0px -200px 0px" });

sections.forEach(section => {
  observer.observe(section);
});


/////


var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );
  navbar.classList.remove('fadingOut');
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

    // Run the callback
    navbar.classList.add('fadingOut');

	}, 66);

}, false);