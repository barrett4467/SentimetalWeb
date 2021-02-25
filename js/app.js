const patinaText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada proin libero nunc consequat. In eu mi bibendum neque egestas congue quisque egestas. Gravida in fermentum et sollicitudin. Odio tempor orci dapibus ultrices in. Mi tempus imperdiet nulla malesuada. Libero volutpat sed cras ornare. Ut eu sem integer vitae justo eget magna. Curabitur vitae nunc sed velit dignissim sodales. Accumsan tortor posuere ac ut consequat semper viverra. Aliquam etiam erat velit scelerisque in dictum. ";

const patinaCards  = [
 {  image: "https://via.placeholder.com/350",
  description: "first",
  type: "Type",
  link: "../patinas/patinaSpecific.html"},
  {  image: "https://via.placeholder.com/350",
  description: "second",
  type: "Type",
  link: "#"},
  {  image: "https://via.placeholder.com/350",
  description: "third",
  type: "Type",
  link: "#"},
  {  image: "https://via.placeholder.com/350",
  description: "fourth",
   type: "Type",
  link: "#"},
  {  image: "https://via.placeholder.com/350",
  description: "fifth",
  type: "Type",
  link: "#"},
  {  image: "https://via.placeholder.com/350",
  description: "six",
  type: "Type",
  link: "#"}
  
  ]


patinaCards.forEach(card => {
 function handleOnclick () {
   console.log("on click");
 }
  document.querySelector("#patina-gallery").innerHTML += 
    `
    <div id="patina-card">
        <img src=${card.image} alt=${card.description} id="patina-image">
          <p>${card.type}</p>
           <button onclick=${handleOnclick}>Click Me</button>
           </div>
    `
})

window.onscroll = function(){handleScroll()};

const header = document.querySelector("#nav");
const sticky = header.offsetTop;

function handleScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// document.querySelector("#patina-gallery").innerHTML =
//   `<p id="patina-text">${patinaText}</p>`

// <img src=${patinaCards.image} alt=${patinaCards.description}>