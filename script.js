var overlay = document.getElementById("overlay");

// Buttons to 'switch' the page
var openContactUsButton = document.getElementById("slide-left-button");
var openProductSuggestionButton = document.getElementById("trouble-finding-product");

// The sidebars
var leftText = document.getElementById("contact-us");
var rightText = document.getElementById("product-suggestion");

// The forms
var accountForm = document.getElementById("contact-us-info")
var productSuggestionForm = document.getElementById("product-suggestion-info");

// Open the Sign Up page
openContactUs = () =>{
  var orderQuestion = document.getElementById("order-question");
  orderQuestion.checked = true;
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-contact-us");
  rightText.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-product-suggestion";
  leftText.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    productSuggestionForm.style.display = "flex";
    productSuggestionForm.classList += " form-right-slide-in";
  }, 200);
}

// Open the Sign In page
openProductSuggestion = () =>{
  // Remove classes so that animations can restart on the next 'switch'
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-product-suggestion");
  rightText.classList.remove("overlay-text-right-animation-out");
  // Add classes for animations
  productSuggestionForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-contact-us";
  rightText.className += " overlay-text-right-animation";
  // hide the sign in form once it is out of view
  setTimeout(function(){
    productSuggestionForm.classList.remove("form-right-slide-in")
    productSuggestionForm.style.display = "none";
    productSuggestionForm.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}

// When a 'switch' button is pressed, switch page
openContactUsButton.addEventListener("click", openContactUs, false);
openProductSuggestionButton.addEventListener("click", openProductSuggestion, false);