import "./style.css";
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");
// Set the background color using CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add the flex-ctr class to mainEl
mainEl.classList.add("flex-ctr");

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu");
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Iterate over the menu links array
menuLinks.forEach((link) => {
  // Create an anchor element
  const anchor = document.createElement("a");

  // Set the href attribute
  anchor.setAttribute("href", link.href);

  // Set the text content
  anchor.textContent = link.text;

  // Append the anchor to the top menu
  topMenuEl.appendChild(anchor);
});

document.getElementById('profile_image').addEventListener('click', function() {
  this.src = 'Images/Another_Image.jpeg'; // Change to another image
});

document.getElementById('box2').addEventListener('mouseover', function() {
  this.innerHTML = `
      <p><strong>Name:</strong> Jefferson Sarah</p>
      <p><strong>Date of birth:</strong> June 6, 1970</p>
      <p><strong>Address:</strong> Updated Address, US</p>
      <p><strong>Phone:</strong> +1-541-754-3010</p>
      <p><strong>Email:</strong> <a href="mailto:updatedemail@gmail.com">updatedemail@gmail.com</a></p>
      <p><strong>Website:</strong> <a href="http://updatedwebsite.com">http://updatedwebsite.com</a></p>
  `;
});

const newSection = document.createElement('section');
newSection.id = 'new_section';
newSection.innerHTML = `
    <div class="box">
        <h3>New Section</h3>
        <p>This is a dynamically added section.</p>
    </div>
`;
document.querySelector('.main_container').appendChild(newSection);

window.onload = function() {
  alert('Welcome to my digital resume!');
};

document.getElementById('box3').addEventListener('click', function() {
  window.location.href = 'https://www.example.com';
});

console.log('Browser Information:', navigator.userAgent);