/*jshint esversion: 6*/
// alert("sign out now");
// when i click next button each page should show a different background colour, circle colour and content
// when I click a previous button
// show the previous page
// when i click a random button
// // show a random pages
// when i press a key
// show the next or previous page


// step one add page content
const pages = [{
    content: "Learning to become a Web developer",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(175, 170, 170, 1) 0%, rgba(96, 94, 94, 1) 98%)",
    shape: "#DAA520",
  },
  {
    content: "Enthusiastic About Learning New Skills",
    background: "linear-gradient(90deg, rgba(218,165,32,1) 0%, rgba(161,132,61,1) 46%, rgba(96,94,94,1) 98%)",
    shape: "#000000",
  },
  {
    content: "Ready & Available For Work ",
    background: "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(175, 170, 170, 1) 0%, rgba(96, 94, 94, 1) 98%)",
    shape: "rgba(175, 170, 170, 1)",
  },
  {
    content: 'letting you <a href="cv.pdf">download CV<a/>',
    background: "linear-gradient(90deg, rgba(218,165,32,1) 0%, rgba(161,132,61,1) 46%, rgba(96,94,94,1) 98%)",
    shape: "rgba(175, 170, 170, 1)"

  }
];
// step2:pick up the tags we want to use in html &save them in constants
const bodyTag = document.querySelector("body");
const shapeTag = document.querySelector(".shape");
const nextTag = document.querySelector(".next");
const previousTag = document.querySelector(".previous");
const randomTag = document.querySelector(".random");
const outputTag = document.querySelector("h2");

// step 3: we need to know which page we are on in order to change it -
// so we need a way of tracking this
let pageNumber = 0;
// step 4: Create an action that increases the page number
const next = function() {
  pageNumber = pageNumber + 1;
  // we only have four pages so we do not want to be able to increase our page number

  // pages.length will print out the number of pages in our list. currently this is 4. However we start counting from 0 in programming so we -1
  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
};

// Step 5: Create an action that decreases a page Number(
const previous = function() {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }
};

// step 6: attach an eventlistener to the next button
const random = function() {
  // create a random number using math.random() - This creates a numbwe between 0 & 1 that has decimal places
  // so we multiply it by the number of pages we have - pages.length
  // we want a whole number so we wrap Math.random * pages.length in Math.floor
  pageNumber = Math.floor(Math.random() * pages.length);
};
// step 10: update the content on our page with the content from the pages list
const updatePage = function() {
  // update the content in our cody
  outputTag.innerHTML = pages[pageNumber].content;
  shapeTag.style.backgroundColor = pages[pageNumber].shape;
  bodyTag.style.background = pages[pageNumber].background;
};

// EVENT LISTENERS
nextTag.addEventListener("click", function() {

  next();
  console.log(pageNumber);
  updatePage();
});
// step 7 attached the event listener to the previous number
previousTag.addEventListener("click", function() {

  previous();
  console.log(pageNumber);
  updatePage();

});

// step 7 attached the event listener to the previous number
randomTag.addEventListener("click", function() {

  random();
  console.log(pageNumber);
  updatePage();

});